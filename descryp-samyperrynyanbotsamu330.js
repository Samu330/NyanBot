//Made by Samu330🥀
var CryptoJS = require("crypto-js");

var rawStr = fs.readFileSync('./samu.js');
var samYperry = CryptoJS.enc.Base64.parse(rawStr);
var parsedStr = samYperry.toString(CryptoJS.enc.Utf8);
fs.writeFileSync(`./SamYperry.js`, parsedStr)
