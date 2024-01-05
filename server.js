var express = require('express');
var app = express();
app.use(express.static('public'));
app.get("/",(req, res) => {
    res.send("Welcome to my sdm project...");
});
app.listen(8000);
Console.log("App is listening on port 8000");