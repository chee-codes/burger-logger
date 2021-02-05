const express = require("express");
const exphbs = require("express-handlebars");
//!const routes = require("");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static("public"));

//!app.use(routes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, () => {
  console.log("Server listening on http://localhost:" + PORT);
});
