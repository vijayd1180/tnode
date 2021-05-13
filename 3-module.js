// commanjs , every file is module(by default)
//Module - encapulate code (only share minimum or what we want)

const names = require('./4-names');
const sayHi = require('./5-utils');
var data = require('./6-alternative-flavors');
require('./7-mine-grenade');
console.log(data);
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);