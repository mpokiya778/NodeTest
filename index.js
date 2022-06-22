var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = require('./route')

mongoose.connect("mongodb+srv://Monali:monali5401@cluster0.ydavz.mongodb.net/Movies?retryWrites=true&w=majority").then(()=>{
    console.log("DB Connected");

    var app = express();
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(express.json())
    app.use('api',router)

    app.listen(process.env.PORT,()=>{
        console.log("server started")
    })

}).catch((err)=>{
    console.log(err);
})

