/**
 * Created by victor on 5/20/16.
 */

var express = require('express')
var app = express();

app.use(express.static('server'));

app.listen(8008)

console.log('app runing on port 8008...')