#!/usr/bin/node

const lib = require('../src/lib');

const $root = require('./test.root.json');

lib.setIntendedFor($root);

//check the result