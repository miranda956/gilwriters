module.exports=(sequelize,DataTypes)=>{    
    const taskHistory=sequelize.define("taskHistory",{
        history_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          rework_requested: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
          },
          rework_reason: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          rework_completed: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
          },
        
    
    },
    {
        freezeTableName:true,
        timestamps:false
    
    });
    
    return taskHistory;
    
    }