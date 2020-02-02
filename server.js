const express = require("express");
var db = require("./models")
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var exphbs = require("express-handlebars");

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.listen(PORT, function() {
  console.log("App listening on: http://localhost:" + PORT);
});

// db.sequelize.sync().then(function() {
//   });
  