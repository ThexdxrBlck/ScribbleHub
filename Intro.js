const fs = require("node:fs");

fs.writeFileSync("hello.txt", "Boitumelo: 'How are you?'");
fs.appendFileSync("hello.txt", "Olebogeng: 'I am good and how about you?'");

const note = function () {
  return "Your Note is doing alright...";
};

module.exports = intro;
