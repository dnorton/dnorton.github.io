/**
 * Created with IntelliJ IDEA.
 * User: dnorton
 * Date: 11/11/13
 * Time: 9:35 PM
 * To change this template use File | Settings | File Templates.
 */
var connect = require('connect');

connect.createServer(
    connect.static(__dirname)
).listen(4000);