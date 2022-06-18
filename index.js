var http = require("http");
var fs = require("fs");
var path = require("path");

http
  .createServer(function (req, res) {
    if (req.url === "/home.html") {
      fs.readFile(__dirname + "/home.html", "UTF-8", function (err, html) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
      });
    } else if (req.url === "/") {
      res.writeHead(302,{'Location':"/home.html"});
      res.end();
    } else if (req.url === "/about.html") {
      fs.readFile(__dirname + "/about.html", "UTF-8", function (err, html) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
      });
    } else if (req.url === "/contact.html") {
      fs.readFile(__dirname + "/contact.html", "UTF-8", function (err, html) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
      });
    } else if (req.url.match(".css$")) {
      var cssPath = path.join(__dirname, req.url);
      var fileStream = fs.createReadStream(cssPath, "UTF-8");
      res.writeHead(200, { "Content-Type": "text/css" });
      fileStream.pipe(res);
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("No Page Found");
    }
  })
  .listen(3000, "127.0.0.1");
console.log("Server is listening");

// const express = require("express");
// const app = express();

// app.listen(3000, () => {
//   console.log("Application started and Listening on port 3000");
// });

// // serve your css as static
// app.use(express.static(__dirname));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });
