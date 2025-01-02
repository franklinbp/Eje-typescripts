//definir claseAutomovil
class claseAutomovil {
 color: string;
 marca: string;
 km : number;

 constructor (color: string, marca: string, km: number){
    this.color = color;
    this.marca = marca;
    this.km = km;
 }
}

const auto: claseAutomovil = new claseAutomovil ("Rojo", "Toyota", 1200);

//Mostrar los valores de claseAutomovil 

console.log(`Color: ${auto.color}, Marca: ${auto.marca}, Kilometraje: ${auto.km}`);
