var restaurants = require("request");
var http = require("http");

restaurants.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants%20in%20Khon%20Kaen&key=AIzaSyBrFMiB-FesfdLaPU066Qlb2yxX5jgYZsg", (error, response,body) =>{
    if (error){
        return console.dir(error);
        }
        var resultObj = JSON.parse(body);
        var results = resultObj.results;

        http.createServer(function(req,res){
            res.writeHead(200,{
                'Content-Type': 'text/html; charset=utf-8'});
                res.write("<h2>Restaurants in Khon Kaen </h2>");
                res.write("<ol>");
                for(i in results){
                    res.write("<li>"+results[i].name+"</li>");
                }
                res.write("</ol>");
        }).listen(8080);
       
       
});