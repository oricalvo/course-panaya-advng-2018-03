var express = require("express");
var helpers = require("../common/helpers");

const app = express();

app.get("/api/format/:str", function(req, res) {
    res.write(helpers.format(req.params.str));
    res.end();
});

app.listen(3000, function() {
    console.log("Server is running");
});
