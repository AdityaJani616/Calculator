const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));//special one that we use to pass data that form recieves


app.get("/",function(req,res)
{
    // console.log(__dirname);//Gives current file location at any given time
    res.sendFile(__dirname+"/index.html");//will be useful when uploading on server,will do it for the directory and append the file

});

app.get("/bmicalculator",function(req,res)
{
    res.sendFile(__dirname+"/bmiCalculator.html");

});
app.post("/",function(req,res)
{     
    var num1=parseInt(req.body.num1);//or Number()
    var num2=parseInt(req.body.num2);//or Number()
    var result=num1+num2;

    res.send("The result of the calculation is :"+result);
    

});
app.post("/bmicalculator",function(req,res)
{
    var weight=Number(req.body.weight);
    var height=Number(req.body.height);
    var bmi=weight/(height*height);
    res.send("The result of the BMI calculation is:" +bmi);
});
app.listen(3000,function()
{
    console.log("Server Started");
});