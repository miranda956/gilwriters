module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define(
    'Job',
    {
      job_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    expected_delivery_time: {
      type: DataTypes.INTEGER, // Assuming it's stored as an integer
      allowNull: false,
      get() {
        const now = new Date();
        const remainingHours = this.getDataValue('expected_delivery_time');
        const totalMinutes = remainingHours * 60;
        
        const timeDifference = totalMinutes * 60000; // milliseconds in a minute

        if (timeDifference <= 0) {
          return 'Time\'s up!';
        }

        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;

        return `${hours} hours ${minutes} minutes`;
      },
    },
      budget: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      requirement_document: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      task_id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );

  Job.beforeCreate(async (job) => {
    // Generate a task ID based on the category and random numbers
    const firstLetter = job.category.charAt(0).toUpperCase();
    let randomNumbers = '';
    for (let i = 0; i < 5; i++) {
      randomNumbers += Math.floor(Math.random() * 10);
    }
    job.task_id = firstLetter + randomNumbers;

    // Ensure the generated task ID is unique
    const existingJob = await Job.findOne({ where: { task_id: job.task_id } });
    if (existingJob) {
      // If the generated task ID is not unique, regenerate it
      return Job.beforeCreate(job);
    }
  });

  Job.associate = (models) => {
    Job.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Job;
};
