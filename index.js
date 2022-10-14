let Client = require('./Client.js');
let client = new Client();
global.client = client;
require("./Manager/Server")(client);
