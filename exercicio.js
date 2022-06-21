var codigos = 'A121B12112C12212F12G01';
var exp = /[A-Za-z]\d+/g
var codigosExtraidos = codigos.match(exp);

console.log(codigosExtraidos)


var arquivo = '100,200-150,200;20';
var valores = arquivo.split(',')
var exp = /[,;-]/;
var valores = arquivo.split(exp);

console.log(valores)