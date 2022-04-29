"use strict";

const express = require("express");
var commentController = require('./controllers/commentController'); // set commentController to the commentController class
var movieController = require('./controllers/movieController'); // set movieController to the movieController class

const bodyParser = require("body-parser");
var app = express();
var host = "127.0.0.1";
var port = 8080;
var startPage = "index.html";

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.route('/movies').get(movieController.getAllMovies); // activate the getAllMovies method if the route is GET(method) /movies
app.route('/commentsssss').get(commentController.getAllComments) // activate the getAllComments method if the route is GET(method) /comments
app.route('/comments').post(commentController.addComment); // activate the addComments method if the route is POST(method) /comments
app.route('/comments/:id').put(commentController.updateComment) // activate the updateComments method if the route is PUT(method) /comments/:id
app.route('/comments/:id').delete(commentController.deleteComment); // activate the deleteComment method if the route is DELETE(method) /comments/:id


function gotoIndex(req, res) {
    console.log(req.params);
    res.sendFile(__dirname + "/" + startPage);
}

app.get("/" + startPage, gotoIndex);

app.route("/");

var server = app.listen(port, host, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});
