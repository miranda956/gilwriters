module.exports=(sequelize,DataTypes)=>{    
    const taskHandler=sequelize.define("taskHandler",{
        handler_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          expertise_area: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        
    
    },
    {
        freezeTableName:true,
        timestamps:false
    
    });
    
    return taskHandler;
    
    }