# FullStack course

## MySQL server
We will be using mysql as a database, to make it quick & easy install it via Homebrew by running
```
brew install mysql
```

## MySQL client
To naviagte a mysql database you can learn and memorize the comands or use a GUI tool to help you. If you are on macOS I would choose [Sequel Pro](https://sequelpro.com).

## Connecting to the database
Create a file named mysqlConfig.js in your directory and add this code to it

```javascript
var config = {
  host    : 'localhost',
  user    : 'root',
  password: 'root',
  database: 'quotedb'
};

module.exports = config;
```
This will be a module containing all the necessary credentials for the server to access the database.
Now add the following code on your index.js
```javascript
var mysql = require('mysql');
var mysqlConfig = require('./mysqlConfig.js')

var connection = mysql.createConnection(mysqlConfig);

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected to MYSQL!");
});
```
As you might see we are importing the configuration of the databse from mysqlConfig.js, to check that everything is alright run the server
```
node index.js
```
If everything went right you shold see "Connected to MYSQL!" printed on your console.

## Databse operations

### Tip
If you want to try out your SQL statements to ensure they are correct you can try them out on [SQLFiddle](http://sqlfiddle.com).

### Creating a table
The following function takes an SQL string and executes it on our mysql connection.
```javascript
function createTable() {
  var createQuoteTable = "CREATE TABLE IF NOT EXISTS quotes(id int PRIMARY KEY auto_increment,author VARCHAR(255)NOT NULL,body varchar(255)not null)";
  connection.query(createQuoteTable, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });
}
```

### Inserting a row
Now we should focus on inserting a quote in the database, to do that we can use this function
```javascript
function createQuote2(author, body) {
  var quote = { author: author, body: body };
  var queryStr = "INSERT INTO quotes SET ?"
  connection.query(queryStr, quote, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Quote id: ' + results.insertId);
  })
}
```
