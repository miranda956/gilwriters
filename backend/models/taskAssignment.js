module.exports=(sequelize,DataTypes)=>{    
    const taskAssignment=sequelize.define("taskAssignment",{
        Assignment_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          accepted_date: {
            type: DataTypes.DATE,
            allowNull: false,
          },
          completion_date: {
            type: DataTypes.DATE,
            allowNull: true,
          },
    
    },
    {
        freezeTableName:true,
        timestamps:false
    
    });
    
    return taskAssignment;
    
    }