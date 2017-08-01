var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var pathToProjectsFile =  __dirname + "/" + "projects.json";
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static('htmljs'));

app.get('/loadProjects', function (req, res) {
  if (fs.existsSync(pathToProjectsFile)) {
    fs.readFile(pathToProjectsFile, 'utf8', function (err, data) {
       res.end( data );
   });
  } else {
    res.end("[]");
  }
})

app.post('/saveProjects', function (req, res) {
   fs.writeFile(pathToProjectsFile, JSON.stringify(req.body), 'utf8', function (err) {
       if (err) {
         res.end("Error");
       } else {
         res.end( "Success" );
       }
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})
