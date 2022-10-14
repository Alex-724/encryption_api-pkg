const axios = require("axios");
class NSFW_API {
  constructor() {
    this.url = "https://alex.okayiamteo6033.repl.co/api/encryption";
  }
  async Encrypt(text, key, level) {
    if (!text) throw new Error("Please provide a text to encrypt");
    if (!key) throw new Error("Please provide a key to encrypt");
    if (!level) level = "normal";
    const { data } = await axios.get(
      `${this.url}/encrypt?text=${text}&key=${key}&level=${level}`
    );
    return data.result;
  }
  async Decrypt(text, key, level) {
    if (!text) throw new Error("Please provide a text to decrypt");
    if (!key) throw new Error("Please provide a key to decrypt");
    if (!level) level = "normal";
    const { data } = await axios.get(
      `${this.url}/decrypt?text=${text}&key=${key}&level=${level}`
    );
    return data.result;
  }
}

module.exports = NSFW_API;
