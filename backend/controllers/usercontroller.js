const express=require("express");

const jwt = require("jsonwebtoken");
const {jwtOptions} = require('../config/jwtoptions');
const bcrypt = require('bcrypt');

const db = require('../models'); // Import the User model

function router(app){

  
    app.post('/api/v1/register', async (req, res) => {
        try {
          const { f_name, l_name, email, contact, pwd } = req.body;
      
          // Check if the user with the provided email already exists
          const existingUser = await db.User.findOne({ where: { email } });
          if (existingUser) {
            return res.status(409).json({ error: 'User with this email already exists' });
          }
      
          // Hash the password before saving
          const hashedPassword = bcrypt.hashSync(pwd,
             bcrypt.genSaltSync(8));
      
          // Create the user
          const newUser = await db.User.create({
            f_name,
            l_name,
            email,
            contact,
            pwd: hashedPassword
          });
      
          return res.status(201).json(newUser);
        } catch (error) {
          console.error('Error during registration:', error);
          return res.status(500).json({ error: 'Registration failed' });
        }
      });
      
      app.post('/api/v1/login', async (req, res) => {
        try {
            const { email, pwd } = req.body;
    
            if (email && pwd) {
                const user = await db.User.findOne({ where: { email } });
                if (!user) {
                    return res.status(401).json({ message: 'No such user found' });
                }
    
                bcrypt.compare(pwd, user.pwd, (err, result) => {
                    if (err) {
                        return res.status(403).json({ message: 'Incorrect password' });
                    }
                    if (result) {
                        const payload = { user };
                        const token = jwt.sign(payload, jwtOptions.secretOrKey);
                        return res.status(200).json({ message: 'Login success', token });
                    } else {
                        return res.status(403).json({ message: 'Incorrect password' });
                    }
                });
            } else {
                return res.status(400).json({ message: 'Bad request' });
            }
        } catch (error) {
            console.error('Error during login:', error);
            return res.status(500).json({ message: 'Login failed' });
        }
    });
    
  
          

}




module.exports= router;