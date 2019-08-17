#!/usr/bin/env node

'use strict';

const fs = require('fs');
const termcolors = require('termcolors');
const pkg = require('./package.json');
const palette = fs.readFileSync('./palette.json', 'utf8');
const colors = termcolors.json.import(palette);
const _ = require('lodash');
const pantheon = fs.readFileSync('./templates/pantheon.dot', 'utf8');

const toHex = _.partialRight(_.mapValues, function(color) {
    return color.toHex();
});
const pantheonTemplate = termcolors.export(pantheon, toHex);
const pantheonData = pantheonTemplate(colors);

fs.writeFile('srcery_pantheon-terminal.sh', pantheonData, (err) => {
  if (err) throw err;
  console.log('Pantheon config saved!');
});
