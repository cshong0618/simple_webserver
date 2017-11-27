var express = require("express");
var app = express();

var fs = require("fs");

app.use(express.static("public"));

app.get('/favicon.ico', function(req, res) {
    res.status(204);
});

app.get("/:file", (req, res) => {
    var fullpath = "public/" + req.params.file;
    if(fs.existsSync(fullpath)) {
        res.sendFile(fullpath);
    } else {
        res.sendFile("public/error_404.html", {root: __dirname});
    }
});

var port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("Listening to port " + port);
});