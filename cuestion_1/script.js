var numero = 1;
var texto = "Esto es una cadena de texto";
var boleana = true;
var listado = [
    "Elemento 1",
    "Elemento 2",
    "Elemento 3"
];
//EJEMPLO DE CONST
var iva = 21;
//ES UN VALOR QUE NO DEBE CAMBIAR NUNCA
//EJEMPLO DE LET 
for (var a_1 in listado) {
}
//En este caso si hacemos un console.log de esa variable en el bloque funcionara pero si lo hacemos fuera del bloque dara error
//EJEMPLO DE VAR
for (var a in listado) {
}
console.log(a);
//En este caso no daria ningun fallo ya que se permite acceder desde fuera del ambito de bloque a esa variable
