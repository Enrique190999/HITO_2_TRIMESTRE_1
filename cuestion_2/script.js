var Animal = /** @class */ (function () {
    function Animal(nombreAnimal, numeroPatas, carnivoro, edad) {
        this.nombreAnimal = nombreAnimal;
        this.numeroPatas = numeroPatas;
        this.carnivoro = carnivoro;
        this.edad = edad;
    }
    Animal.prototype.getNombreAnimal = function () {
        return this.nombreAnimal;
    };
    Animal.prototype.getNumeroPatas = function () {
        return this.numeroPatas;
    };
    Animal.prototype.getCarnivoro = function () {
        return this.carnivoro;
    };
    Animal.prototype.getEdad = function () {
        return this.edad;
    };
    Animal.prototype.setNombreAnimal = function (nombreAnimal) {
        this.nombreAnimal = nombreAnimal;
    };
    Animal.prototype.setNumeroPatas = function (numeroPatas) {
        this.numeroPatas = numeroPatas;
    };
    Animal.prototype.setCarnivoro = function (carnivoro) {
        this.carnivoro = carnivoro;
    };
    Animal.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    return Animal;
}());
var animales = [
    new Animal("Gato", 4, true, 12),
    new Animal("Perro", 4, true, 8),
    new Animal("Caballo", 4, true, 2)
];
function cargarTextoAnimales() {
    var elemento = document.createElement("textarea");
    elemento.style.width = "515px";
    elemento.style.height = "54px";
    for (var _i = 0, animales_1 = animales; _i < animales_1.length; _i++) {
        var i = animales_1[_i];
        elemento.innerHTML += "Nombre: " + i.getNombreAnimal() + " Numero de patas: " + i.getNumeroPatas() + " Carnivoro: " + i.getCarnivoro() + " Edad: " + i.getEdad() + "\n";
    }
    document.body.appendChild(elemento);
}
cargarTextoAnimales();
