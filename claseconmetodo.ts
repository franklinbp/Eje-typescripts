class persona{
    nombre: string;

    constructor(nombre: string){
        this.nombre = nombre;
    }
    saludar():void{
        console.log("Hola, soy ${this.nombre}");
    }
}
let persona = new persona("Juan");
persona.saludar();