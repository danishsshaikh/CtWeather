const express = require("express");
const https = require("https");

const app = express();


app.get("/", function(req, res){

	const url = "https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=921f7d8868b9aef04d8e0b69b878630c&units=metric";
	https.get(url, function(response){
		console.log(response.statusCode);

		response.on("data", function(data){
			const weatherData = JSON.parse(data);
			const temp = weatherData.main.temp;
			const desc = weatherData.weather[0].description;
			const icon = weatherData.weather[0].icon
			const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
			res.write("<h1>The weather in Mumbai is " + temp + " degree celsius</h1>");
			res.write("<p>The description of weather is " + desc + "</p>");
			res.write("<img src=" + imageUrl + "/>");
			res.send()
		});
	});
});











app.listen(3000, function(){
	console.log("App is listening to 3000");
});