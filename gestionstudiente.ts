class Estudiante {
    nombre: string;
    edad: number;
    cursos: string[];
    calificaciones: Record<string, number[]>;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.cursos = [];
        this.calificaciones = {};
    }

    inscribirCurso(curso: string): void {
        if (!this.cursos.includes(curso)) {
            this.cursos.push(curso);
            this.calificaciones[curso] = [];
        }
    }

    agregarCalificacion(curso: string, nota: number): void {
        if (this.calificaciones[curso]) {
            this.calificaciones[curso].push(nota);
        } else {
            console.log(`El estudiante no está inscrito en el curso ${curso}`);
        }
    }

    promedioNotas(): number | string {
        let todasLasNotas = Object.values(this.calificaciones).flat();
        return todasLasNotas.length > 0 ? (todasLasNotas.reduce((a, b) => a + b) / todasLasNotas.length).toFixed(2) : "No hay calificaciones aún";
    }
}

// Crear un estudiante
let estudiante1 = new Estudiante("Carlos", 20);

estudiante1.inscribirCurso("Matemáticas");
estudiante1.inscribirCurso("Historia");

estudiante1.agregarCalificacion("Matemáticas", 90);
estudiante1.agregarCalificacion("Matemáticas", 85);
estudiante1.agregarCalificacion("Historia", 88);

console.log(`Nombre: ${estudiante1.nombre}`);
console.log(`Edad: ${estudiante1.edad}`);
console.log(`Cursos inscritos: ${estudiante1.cursos}`);
console.log(`Promedio de notas: ${estudiante1.promedioNotas()}`);
