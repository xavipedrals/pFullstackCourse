# FullStack course

## Hello world
Okay, let's do this fast, I know you want to get to the real thing. Below you have the code to put in your index.js
```javascript
var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);
```
Now run
```
node index.js
```
And in your browser open http://localhost:8888. Congrats, your Hello World is up and running.
