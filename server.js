const express = require("express")
const axios = require("axios")
const app = express()

app.get("/",(req,res)=>{
    axios.get("https://api.ipify.org?format=json").then((response)=>{
        let test = response.data;
        console.log(test);
        res.send(test);
    }).catch((error)=>{
        if (error){
            console.log(error)
        }
    })

})

app.listen(3000,()=>{console.log("working")})

