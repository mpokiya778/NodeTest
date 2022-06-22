var express = require('express');
var router = express.Router();
var Movie = require('./Models/Movie')

router.get("/movies",async(req,res)=>{
    //res.sendFile("index.html",{root:__dirname})
    const iMovie = await Movie.find();
    res.send(iMovie)
})


router.post('/movies',async(req,res)=>{
    const iMovie = new Movie({
        name : req.body.name,
        rating : req.body.rating
    })
    console.log(req.body.name);
    await iMovie.save((err,msg)=>{
        if(err){
            res.send(err)
        }else{
            res.send(msg)
        }
    })
})

module.exports=router