const express = require("express");

const app = express();

app.use(express.static("./dist/scl-estatico"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/scl-estatico/" });
});

const port = process.env.PORT || 8081;

app.listen(port);

console.log("Aplicação escutando porta " + port);
