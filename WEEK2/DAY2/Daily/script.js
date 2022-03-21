let sen = `The movie is not that bad I like it`;
let arr = sen.split(' ')

let wordNot = sen.indexOf('not');
let worBad = sen.indexOf(`bad`);
arr.splice(wordNot,worBad-worBad+3,`good`);
console.log(arr.join(` `))
