/**
 * Created with IntelliJ IDEA.
 *
 */
var connect = require('connect');

connect.createServer(
    connect.static(__dirname)
).listen(4000);