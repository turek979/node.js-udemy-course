const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const app = express();

// Register pug as a templating engine, express supports it out of the box
// app.set('view engine', 'pug');
// app.set('views', 'views');

// Register handlebars as a templating engine, has to be configured
app.engine(
  "hbs",
  expressHbs({
    layoutsDir: "views/layouts/",
    defaultLayout: "main-layout",
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "views");

// Register ejs as a templating engine, express supports it out of the box
// app.set('view engine', 'ejs');
// app.set('views', 'views');

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);


// Same rendering for pug, handlebars and ejs files
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "404 Page Not Found" });
});

app.listen(3000);
