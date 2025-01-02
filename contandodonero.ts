let suma: number = 0;

while(true){
    let input : string | null = prompt("Ingrese un numero negtivo")    
    if (input === null)break;
    let numero; number + parseFloat(input);
    
    if (numero < 0){
        break;
    }
    suma += numero;
}
console.log("La suma total es : " + suma)
