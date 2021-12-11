let numero:number = 1;
let texto:string = "Esto es una cadena de texto";
let boleana:boolean = true;

let listado:string[] = [
    "Elemento 1",
    "Elemento 2",
    "Elemento 3"
];


//EJEMPLO DE CONST

const iva:number = 21;

//ES UN VALOR QUE NO DEBE CAMBIAR NUNCA

//EJEMPLO DE LET 

for(let a in listado){

}

//En este caso si hacemos un console.log de esa variable en el bloque funcionara pero si lo hacemos fuera del bloque dara error


//EJEMPLO DE VAR

for(var a in listado){

}

console.log(a);


//En este caso no daria ningun fallo ya que se permite acceder desde fuera del ambito de bloque a esa variable