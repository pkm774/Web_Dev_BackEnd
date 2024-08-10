//var generateName = require('sillyname'); <-- cjs
import generateName from 'sillyname' // <-- esm
import { randomSuperhero } from 'superheroes';

var sillyName = generateName();
var heroName = randomSuperhero();

console.log(' ')
console.log(sillyName + ' heroic name is ' + heroName);