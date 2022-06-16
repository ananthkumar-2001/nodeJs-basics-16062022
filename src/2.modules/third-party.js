const express = require("express")

const users = require("./user.json")

const app = express()

const router = exppress.Router()

//console.log(app)

app.get("/",function(request,response){
    response.send("Welcome to ExpressJs")
})

app.get("/employee",function(request,response){
    response.send("Here is the employee information")
})

app.get("/users",function(request,response){
    console.log(users)
    response.json("Here is the user information")
})

app.get("*",function(request,response){
    response.send("Please contact the Admistrator")
})



const PORT = 3001

app.listen(PORT, ()=>{
    console.log(`server listening at PORT ${PORT}`)
})