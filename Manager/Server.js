const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();
const referrerPolicy = require("referrer-policy");
app.use(referrerPolicy({ policy: "strict-origin" }));
module.exports = async (client) => {
  var minifyHTML = require("express-minify-html-terser");
  app.use(
    minifyHTML({
      override: true,
      exception_url: false,
      htmlMinifier: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: true,
        removeEmptyAttributes: true,
        minifyJS: true,
      },
    })
  );

  app.engine("Encription", ejs.renderFile);
  app.set("view engine", "Encription");

  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  const http = require("http").createServer(app);
  const _port = process.env.PORT || 80;
  http.listen(_port, () => {
    console.log("info", `Server started on port ${_port}`);
  });
  //------------------- Routers -------------------//
  console.log("Loading routers...");
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
        let result = client.HardEncrypt(text, key);
        return res.json({result: result});
    } else if (level == "normal") {
        let result = client.Encrypt(text, key);
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
        let result = client.HardDecrypt(text, key);
        return res.json({result: result});
    } else if (level == "normal") {
        let result = client.Decrypt(text, key);
        return res.json({result: result});
    } else {
        return res.json({error: "Invalid level provided"});
    }
});
}