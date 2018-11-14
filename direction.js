var request = require('request');
var http = require('http');
request.get("https://maps.googleapis.com/maps/api/directions/json?origin=Khon%20Kaen&destination=Bangkok&key=AIzaSyCVyv8nM1Iktuxf2mkRY6o3jvKBn6i1hxI", (error, response, body) => {
    if (error) {
        return console.dir(error);
    }
    var resultObj = JSON.parse(body);
    var results = resultObj.routes[0].legs[0].steps;
    console.log(results);
    http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html ; charset=utf-8' });
        res.write("<h2>Directions from Khon Kaen to Bankok</h2>");
        res.write('<ol>');
        for (x in results) {
            var title = results[x].html_instructions;
            var para =  results[x].distance.text ;
            
            res.write("<div style=' line-height: 10pt'><li>" + title + "\n<p style='color : blue'>("+ para + ")</p></li></div>");
        }
        res.write('</ol>');
    }).listen(8080);
});