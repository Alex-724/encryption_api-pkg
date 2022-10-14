const express = require('express');
const app = express();
const http = require("http").createServer(app);
const ejs = require('ejs');
const _port = process.env.PORT || 80;

app.engine("Encription", ejs.renderFile);
app.set("view engine", "Encription");

http.listen(_port, () => {
  console.log(`Server started on port ${_port}`);
});

app.get('/', (req, res) => {
    return res.json({status: "online"});
});
app.get('/encrypt', (req, res) => {
    let text = req.query.text;
    let key = req.query.key;
    let level = req.query.level;
    if (!text) return res.json({error: "No text provided"});
    if (!key) return res.json({error: "No key provided"});
    if (!level) level = "normal";
    if (level == "hard") {
        let result = global.client.HardEncrypt(text, key);
        return res.json({result: result});
    } else if (level == "normal") {
        let result = global.client.Encrypt(text, key);
        return res.json({result: result});
    } else {
        return res.json({error: "Invalid level provided"});
    }
});

app.get('/decrypt', (req, res) => {
    let text = req.query.text;
    let key = req.query.key;
    let level = req.query.level;
    if (!text) return res.json({error: "No text provided"});
    if (!key) return res.json({error: "No key provided"});
    if (!level) level = "normal";
    if (level == "hard") {
        let result = global.client.HardDecrypt(text, key);
        return res.json({result: result});
    } else if (level == "normal") {
        let result = global.client.Decrypt(text, key);
        return res.json({result: result});
    } else {
        return res.json({error: "Invalid level provided"});
    }
});