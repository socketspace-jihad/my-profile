const express=require("express");
const app=express();

app.engine('.ejs', require('ejs').__express);
app.set('views', __dirname + '/public')
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/assets'))

app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.listen(8082,"0.0.0.0",()=>console.log("LISTENING ON 8082"))