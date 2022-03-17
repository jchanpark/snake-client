const net = require("net");
connect = require("./client");
setupInput = require("./input");


console.log("Connecting ...");
connect();

setupInput(connect());