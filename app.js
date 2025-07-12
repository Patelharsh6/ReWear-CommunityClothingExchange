const express=require("express");
const app=express();
const path=require("path");

app.set("view engine","views");
app.use("views",path.join(__dirname,"views"));


const port=3000;
app.listen(port,()=>{
    console.log(`app is listening at ${port}`);
})

app.get("/",(req,res)=>{
    res.send("you at root path");
})