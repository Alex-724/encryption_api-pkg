let Client = require('./Manager/Client.js');
let client = new Client();
global.client = client;
require("./Manager/Server");
