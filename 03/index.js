let array = ['string', 1, true, ['array1'], ['array2'],['array3'],['array4']];
//console.log (array)//

//array.forEach(function(item,index){console.log(item, index)});//

//array.push('novo item');
//console.log (array);

//array.pop('novo item');

//array.shift();
//console.log (array);

//array.unshift('minharopa');
//console.log(array);

//console.log(array.indexOf(true));

//array.splice(0,3)
//console.log(array);

//let novoArray = array.slice(0,3);
//console.log(novoArray);

let object = {string: 'stringa', number: 1, boolean: true, array: ['array'], objectI: {objectIa: 'interno'}};
console.log(object.objectI);

var string = object.string;
console.log(string);

var arrayi = object.array;
console.log(arrayi);

var {string,boolean,objectI} = object;
console.log(string, boolean, objectI);
