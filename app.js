const express  = require("express")
const bodyParser = require('body-parser')


const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))

app.get("/",function(req,res){
  res.sendFile("index.html");
})

app.get("/gdp",function(req,res){
  console.log("i received gdp "+__dirname)
  res.sendFile(__dirname+"/public/gdp.html");
})

app.get("/donut",function(req,res){
  console.log("i received donut")
  res.sendFile(__dirname+"/public/donut.html");
})

app.listen(3000,function(){
  console.log("Server started on port 3000")
})
