const express = require("express")

const https = require("https");

const app = express()

app.get("/", function(req, res){
    res.send("Server is up and running. ")
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=6a85176eb6e4e715d88ef1bde47b41b8"
    https.get(url, function(response){
        console.log(response.statusCode);
        
        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            res.write("The weather is currently " + weatherDescription);
            res.write("<h1>The temperature in london is " + temp + "degrees Celcius." + icon + " </h1>");
            res.send()
        })
    })
})


app.listen(3000, function(){
    console.log("Server is running on port 3000.");
})