"use strict";
exports.__esModule = true;
var ImplCalculator_1 = require("./ImplCalculator");
var obj = new ImplCalculator_1.ImplCalculator();
var Hapi = require('hapi');
var server = new Hapi.Server({
    port: 3000
});
server.route({
    method: 'GET',
    path: '/add/{num1}/{num2}',
    handler: function (req, res) {
        var x = parseInt(req.params.num1, 10);
        var y = parseInt(req.params.num2, 10);
        return obj.add(x, y);
    }
});
server.route({
    method: 'GET',
    path: '/subtract/{num1}/{num2}',
    handler: function (req, res) {
        var x = parseInt(req.params.num1, 10);
        var y = parseInt(req.params.num2, 10);
        return obj.subtract(x, y);
    }
});
server.route({
    method: 'GET',
    path: '/multiply/{num1}/{num2}',
    handler: function (req, res) {
        var x = parseInt(req.params.num1, 10);
        var y = parseInt(req.params.num2, 10);
        return obj.multiply(x, y);
    }
});
server.route({
    method: 'GET',
    path: '/divide/{num1}/{num2}',
    handler: function (req, res) {
        var x = parseInt(req.params.num1, 10);
        var y = parseInt(req.params.num2, 10);
        return obj.divide(x, y);
    }
});
server.start();
console.log('Server started....\nhttp://localhost:' + server.info.port + '/');
