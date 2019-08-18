#!/usr/bin/env node

"use strict";

const fs = require("fs");
const termcolors = require("termcolors");
const pkg = require("./package.json");
const palette = fs.readFileSync("./palette.json", "utf8");
const colors = termcolors.json.import(palette);
const program = require("commander");
const _ = require("lodash");
const process = require("process");

const toHex = _.partialRight(_.mapValues, function(color) {
    return color.toHex();
});

const toHexUpper = _.partialRight(_.mapValues, function(color) {
  return color.toHex().toUpperCase();
});

const toAvgRgbArray = _.partialRight(_.mapValues, function(color) {
    return color.toAvgRgbArray();
});

const formats = ["pantheon", "iterm", "genode"];

function pantheonConfig() {
  const file = fs.readFileSync("./templates/pantheon.dot", "utf8");
  const template = termcolors.export(file, toHex);
  const data = template(colors);
  process.stdout.write(data);
}

function itermConfig() {
  const file = fs.readFileSync("./templates/iterm.dot", "utf8");
  const template = termcolors.export(file, toAvgRgbArray);
  const data = template(colors);
  process.stdout.write(data);
}

function genodeConfig() {
  const file = fs.readFileSync("./templates/genode.dot", "utf8");
  const template = termcolors.export(file, toHexUpper);
  const data = template(colors);
  process.stdout.write(data);
}

program
  .version(pkg.version)
  .option('-l, --list', 'List available formats')
  .option('-o, --output [format]', 'Output format')
  .parse(process.argv);

if (program.list) {
  for (let i = 0; i < formats.length; i++) {
    console.log(formats[i]);
  }
  process.exit();
}

if (!program.output) {
  console.log('Must declare an output format');
  process.exit(1);
}

if (!formats.includes(program.output)) {
  console.log('Invalid output format: ', program.output);
  process.exit(1);
}

switch (program.output) {
case "pantheon":
  pantheonConfig();
  process.exit();
  break;
case "iterm":
  itermConfig();
  process.exit();
  break;
case "genode":
  genodeConfig();
  process.exit();
  break;
}
