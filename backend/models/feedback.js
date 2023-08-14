module.exports=(sequelize,DataTypes)=>{    
    const Feedback=sequelize.define("Feedback",{
        Feedback_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          comments: {
            type: DataTypes.STRING,
            allowNull: true,
          },
    
    },
    {
        freezeTableName:true,
        timestamps:false
    
    });
    
    return Feedback;
    
    }