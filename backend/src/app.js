const express = require("express");
const routes = require("./routes");

const app = express();

const mongoConnect = require("./db/db").mongoConnect;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

routes.forEach((route) => app[route.method](route.path, route.handler));

mongoConnect(() => {
  app.listen(8080, () => {
    console.log("Server is listening on the port 8080!");
  });
});
