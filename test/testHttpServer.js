var http = require('http');
var bistra = require(__dirname + "/../lib/bistra")();
var port = 3000;
var server = http.createServer(bistra.route);

bistra.mkapi('/api');

bistra.get('/home', function(req, res){
  res.send('testString');
});

bistra.get('/json', function(req, res){
  res.json({"test": "JSON"});
});

bistra.post('/upload', function(req, res){
  req.upload('upload.sample', function() {
    console.log('upload callback operational');
    return res.end();
  });
});

server.listen(port);
console.log("Server listening to port: " + port);