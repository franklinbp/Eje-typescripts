function filtraryordenar(numeros: number[]): number[] {
let  filtrados = numeros.filter(num=>num % 2 !==0);
return filtrados.sort(a, b) => b-a);
}
let numeros = [10, 3, 5, 6, 8, 10, 5, 5]
let resultados = filtraryordenar(numeros);

console.log("Lista original", numeros);
console.log("Lista filtrada y ordenada", resultados)