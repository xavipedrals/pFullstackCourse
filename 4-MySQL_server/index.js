var mysql = require('mysql');
var mysqlConfig = require('./mysqlConfig.js')
var connection = mysql.createConnection(mysqlConfig);

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected to MYSQL!");
  createTable();
  createQuote("George Orwell", "Freedom is the right to tell people what they do not want to hear.");
});


function createTable() {
  var createQuoteTable = "CREATE TABLE IF NOT EXISTS quotes(id int PRIMARY KEY auto_increment,author VARCHAR(255)NOT NULL,body varchar(255)not null)";
  connection.query(createQuoteTable, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });
}

function createQuote(author, body) {
  var quote = { author: author, body: body };
  var queryStr = "INSERT INTO quotes SET ?"
  connection.query(queryStr, quote, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Quote id: ' + results.insertId);
  })
}
