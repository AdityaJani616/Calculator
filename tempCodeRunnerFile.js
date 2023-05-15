const express=require("express");
const app=express();
app.get("/",function(req,res)
{
    res.send("This is my lovely first page ");
    res.send("I am very genius person , I can achieve any thing I want to I am just an overThinker thats all otherwise I would have done very well in my life!")
});
app.listen(3000,function()
{
    console.log("Server start ho gaya bhaiya ");
    console.log("Jay Bajarangbali");
    
})