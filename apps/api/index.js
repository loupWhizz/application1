const Dep1 = require('@loupwhizz/dependency1');
const Dep2 = require('@loupwhizz/dependency2');

const dependency1Value = Dep1.callFunction();
const dependency2Value = Dep2.callFunction();
console.log(`Application 1, Dependencies: ${[dependency1Value, dependency2Value].join(',')}`);