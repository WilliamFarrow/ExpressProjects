var express = require('express');
var app = express();
const router = require('./routes');

app.get('/', (req, res) => {
  res.send('hello world1')
})

const router = require('./routes');

app.use("/", router);

var server = app.listen(5000, function () {
   console.log("Express App running at http://127.0.0.1:5000/");
})
