const express =require('express');
const methodoverride =require('method-override');
const cors =require('cors');
;
const bodyparser=require("body-parser");
const path =require("path");

const db=require("./models");


const app=express();
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.text());
app.use(bodyparser.json());
app.use(cors());  

app.use(methodoverride("_method"));
require('./controllers/taskcontroller')(app)
require('./controllers/usercontroller')(app);

db.sequelize.sync({force:false}).then(()=>{
   const port = process.env.PORT || 4500;
   app.listen(port,()=> 
    console.log(`Server running on port ${port} 🔥`)); 
}).catch((err)=>{
    console.log(err)
});

      