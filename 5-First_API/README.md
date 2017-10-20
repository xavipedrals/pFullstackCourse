# FullStack course

## First API
For this lesson we will need [Postman](https://www.getpostman.com).
<Postman image>

## HTTP requests
(Some super basic theory)

## Express
Express is a framework to program web servers and their REST APIs with NodeJS.
To make an express server simply run
```
npm install express --save-dev
```
And here we have the express "Hello World"
```javascript
var express = require('express');
var http = require('http');

var app = express();

app.get('/', function(req, res) {
	res.send("Hello world!");
});

http.createServer(app).listen(8080);
```
But what does Express offer to be worth it? Express give us two things, ***middleware*** and ***routing***.

## Middleware
Middleware are the functions that are executed on our server upon a request arrives. Here are some of the uses that we can give to our middleware:

- Make request logs
- Authentication
- Headers and body parsing
- DB operations
- Some real bad things if you are a bad person :(

Here there's an example of winston, a library that will print every request that we recieve
```javascript
app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console({
      colorize: true
    })
  ],
  meta: false,
  msg: "HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms",
  colorStatus: true
}));
```
