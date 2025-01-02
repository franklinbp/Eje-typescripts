class ClasePersona {
    private nombre: string = "";
    private edad: number = 0;
  
    inicializar(): void {
      this.nombre = prompt("Ingrese el nombre: ") || "";
      this.edad = parseInt(prompt("Ingrese la edad: ") || "0", 10);
    }
  
    imprimir(): void {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Edad: ${this.edad}`);
    }
  
    esMayorEdad(): void {
      if (this.edad >= 18) {
        console.log(`${this.nombre} es mayor de edad.`);
      } else {
        console.log(`${this.nombre} no es mayor de edad.`);
      }
    }
  }
  
  // Crear y usar un objeto de ClasePersona
  const persona = new ClasePersona();
  persona.inicializar();
  persona.imprimir();
  persona.esMayorEdad();
  