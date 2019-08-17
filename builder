#!/usr/bin/env node

"use strict";

const fs = require("fs");
const termcolors = require("termcolors");
const pkg = require("./package.json");
const palette = fs.readFileSync("./palette.json", "utf8");
const colors = termcolors.json.import(palette);
const _ = require("lodash");
const process = require("process");

const toHex = _.partialRight(_.mapValues, function(color) {
    return color.toHex();
});

function pantheonConfig() {
  const file = fs.readFileSync("./templates/pantheon.dot", "utf8");
  const template = termcolors.export(file, toHex);
  const data = template(colors);
  process.stdout.write(data);
}

pantheonConfig();

// fs.writeFile("srcery_pantheon-terminal.sh", pantheonData, (err) => {
//   if (err) throw err;
//   console.log("Pantheon config saved!");
// });
