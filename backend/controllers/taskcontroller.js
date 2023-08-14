const express=require("express");
const multer = require("multer")
const upload = multer({ dest: 'uploads/' }); // Specify the directory

const db=require("../models");
function router(app){

    app.post('/api/jobs/', upload.single('document'), async (req, res) => {
        try {
          const {category,description, expected_delivery_time, budget, status,UserId,requirement_document } = req.body;
          const file = req.file; // Uploaded file details
      
          // Create the job record in the database
          const newJob = await db.Job.create({
            category,
            description,  
            expected_delivery_time,
            budget,
            requirement_document, // Store the file path or name if uploaded, else null
            status,
            UserId
        // Set the UserId based on the logged-in user
          });
      
          res.status(201).json(newJob);
        } catch (error) {
          console.error('Error creating job:', error);
          res.status(500).json({ message: 'Internal server error' });
        }
      });
      

      app.get('/api/jobs', async (req, res) => {
        try {
          const jobs = await db.Job.findAll();
      
          const currentTime = new Date();
      
          const jobsWithUpdatedExpectedDelivery = jobs.map(job => {
            const createdAtTime = new Date(job.createdAt);
            const elapsedTimeMilliseconds = currentTime - createdAtTime;
      
            const expectedDeliveryTimeParts = job.expected_delivery_time.split(' ');
            const expectedHours = parseInt(expectedDeliveryTimeParts[0]);
            const expectedMinutes = parseInt(expectedDeliveryTimeParts[2]);
      
            const totalExpectedMinutes = expectedHours * 60 + expectedMinutes;
            const elapsedMinutes = Math.floor(elapsedTimeMilliseconds / 60000);
      
            const remainingMinutes = totalExpectedMinutes - elapsedMinutes;
            const remainingHours = Math.floor(remainingMinutes / 60);
            const remainingMinutesInHour = remainingMinutes % 60;
      
            return {
              category: job.category,
              description: job.description,
              budget: job.budget,
              requirement_document: job.requirement_document,
              status: job.status,
              task_id: job.task_id,
              expected_delivery_time: ` ${remainingHours} hours ${remainingMinutesInHour} minutes `
            };
          });
      
          res.status(200).json(jobsWithUpdatedExpectedDelivery);
        } catch (error) {
          console.error('Error retrieving jobs:', error);
          res.status(500).json({ message: 'Internal server error' });
        }
      });
      
      
}

module.exports= router;