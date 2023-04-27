const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const programRoutes = require("../backend/routes/programRoutes");
dotenv.config({path:"../.env"});

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(programRoutes);


mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(3000,function(){
            console.log("Server running on port 3000!");
        });
        
    })
    .catch((err)=>{
        console.log(err);
    })
