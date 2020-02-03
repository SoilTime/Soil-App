const express = require("express");
var db = require("./models")
var soilController = require("./controllers/soilroutes")
var app = express();
var PORT = process.env.PORT || 8086;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var exphbs = require("express-handlebars");
app.use(express.static("public"));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

soilController(app);


db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on: http://localhost:" + PORT);
  });
});
