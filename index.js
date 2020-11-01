const express = require("express");
const bodyParser = require("body-parser");
const { static } = require("express");
const app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var toDoItems = [];
app.get("/",(req,res)=>{
    
    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var week = days[d.getDay()];
    var date = d.getDate();
    var month = d.getMonth();
    var yr  = d.getFullYear();

    var today = week +","+ date +"-"+ month +"-"+yr;
    console.log(today);
    res.render("list",{day:today,toDoItems:toDoItems});
    
});


app.post("/",function(req,res){
    var newtodo = req.body.todo;
    toDoItems.push(newtodo);
    res.redirect("/");

});

app.listen(3000,function(){
console.log("Server started on portal 3000");
});