const Dep3 = require('@whizz/dependency3');

const dependencies = [
  Dep3.callFunction()
];

console.log(`Application 1, Dependencies: ${dependencies.join(',')}`);