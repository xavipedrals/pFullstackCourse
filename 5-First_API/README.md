# First API
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
## Routes
Routing is the way we handle the requests that arrive to our server.
Each request consists of:
- A url
- A HTTP method
A request can also have:
- Headers
- A body

To declare a route simply create a .js file and then add this code:
```javascript
var quotesRouter = require('express').Router();

//add all the router code here

module.exports = quotesRouter;
```
**Note**: Usually it's a good practise to have routes inside a folder.

Then in your index.js file you can use that route by adding:
```javascript
app.use('/quote', require('./routes/quotes'));
```

With this you are telling your server to redirect all the requests that have a "/quote" url to quotesRouter.
Now let's add some functionallity to our quotesRouter, first we should now what kind of request we are recieving so add this:
```javascript
quotesRouter.get('/', function (req, res) {
	//Add some functionallity here
});

quotesRouter.post('/', function(req, res) {
	//Add some functionallity here
});
```

Now let's return a list of all the quotes that we have on the DB. Our get method should look like
```javascript
quotesRouter.get('/', function (req, res) {
      QuoteModel.getAllQuotes(function(err, results) {
          if (err) throw err;
          return res.status(200).send({ error: false, data: results, message: 'Quotes list' });
      });
});
```
