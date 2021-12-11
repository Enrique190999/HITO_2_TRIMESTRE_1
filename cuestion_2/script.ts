class Animal {

    private nombreAnimal: string;
    private numeroPatas: number;
    private carnivoro: boolean;
    private edad: number;

    constructor(nombreAnimal: string, numeroPatas: number, carnivoro: boolean, edad: number) {
        this.nombreAnimal = nombreAnimal;
        this.numeroPatas = numeroPatas;
        this.carnivoro = carnivoro;
        this.edad = edad;

    }

    public getNombreAnimal(): string {
        return this.nombreAnimal;
    }

    public getNumeroPatas(): number {
        return this.numeroPatas;
    }

    public getCarnivoro(): boolean {
        return this.carnivoro;
    }

    public getEdad(): number {
        return this.edad;
    }

    public setNombreAnimal(nombreAnimal: string) {
        this.nombreAnimal = nombreAnimal;
    }

    public setNumeroPatas(numeroPatas: number) {
        this.numeroPatas = numeroPatas;
    }

    public setCarnivoro(carnivoro: boolean) {
        this.carnivoro = carnivoro;
    }

    public setEdad(edad: number) {
        this.edad = edad;
    }
}


let animales: Animal[] = [
    new Animal("Gato", 4, true, 12),
    new Animal("Perro", 4, true, 8),
    new Animal("Caballo", 4, true, 2)
];

function cargarTextoAnimales() {
    let elemento = document.createElement("textarea");
    elemento.style.width = "515px";
    elemento.style.height = "54px";

    for (let i of animales) {
        elemento.innerHTML += "Nombre: " + i.getNombreAnimal() + " Numero de patas: " + i.getNumeroPatas() + " Carnivoro: " + i.getCarnivoro() + " Edad: " + i.getEdad() + "\n";
    }

    document.body.appendChild(elemento);
}

cargarTextoAnimales();