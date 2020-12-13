const express = require('express');
const cors = require('cors');
const path = require('path');
var serveStatic = require('serve-static');
const app = express();
const corsOption = {
    origin: [
        "http://todot-com-api.herokuapp.com",
        "https://todot-com.herokuapp.com",
    ],
    credentials: true,
}
app.use(serveStatic(__dirname + "/dist"));
app.use(cors(corsOption))

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started ' + port);