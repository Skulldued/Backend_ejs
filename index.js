const express = require("express");
const app = express();
const path =require('path');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs'); 

app.get("/",(req,res)=>{
//  res.render("index.ejs");
 res.render("index");
});

//static routes
app.get("/about",(req,res)=>{
    res.send("I am Fine Guys");
});

//dynamic routing
app.get("/profile/:name",(req,res)=>{
    res.send(`Welcome to my profile ${req.params.name}`);
});

app.get("/profile/:username/:age/:address",(req,res)=>{
    res.send(`welcome ${req.params.username} age is ${req.params.age} of address ${req.params.address}`);
})






app.listen(3000,()=>{
    console.log("start server");
})