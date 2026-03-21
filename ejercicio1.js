//! Clase empleado
class Empleado {
    constructor(nombre, cargo, salario) {
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
        this.activo = true;
    }
    //! Creación de métodos
    //? Método para presentarse
    presentarse() {
        console.log(`Hola, mi nombre es ${this.nombre} y soy ${this.cargo}`);
    }
    //? Método para calcular el salario anual
    calcularSalarioAnual() {
        console.log(`Salario anual es ${this.salario * 12}`);
        return this.salario * 12;
    }
    //? Método para desactivar al empleado
    desactivar() {
        this.activo = false;
        console.log(`${this.nombre} ha sido desactivado`);
        return this.activo;
    }
    //? Método para mostrar la información del empleado
    info() {
        console.log(`    Información de empleado:
    Nombre: ${this.nombre}
    Su cargo actual es: ${this.cargo}
    Su Sueldo es: ${this.salario}
    Su estado activdo es: ${this.activo}\n`)
    }

}

//! Clase extendida: Lider
class Lider extends Empleado {
    constructor(nombre, salario, equipo) {
        super(nombre, salario)
        this.nombre = nombre
        this.salario = salario
        this.equipo = equipo
        this.cargo = "Lider de equipo"
    }
    //? Método para presentar el equipo
    presentarEquipo() {
        console.log(`    Mi equipo está conformado por: ${this.equipo.join(", ")}\n`)
        return this.equipo.join(" ")
    }
    //? Método para agregar un nuevo miembro al equipo
    agregarMiembro(nombreNuevo) {
        this.equipo.push(nombreNuevo)
        console.log(`Bienvenido al equipo, ${nombreNuevo}`)
    }
    //? Sobre escribir el método info para mostrar la información del lider
    info() {
        console.log(`    El lider es:  ${this.nombre}
    Su cargo actual es: ${this.cargo}
    Su Sueldo es: ${this.salario}
    Su estado es ${this.activo}
    El número de personas en el equipo son: ${this.equipo.length}`)
    }
}

//! CHECKPOINT 1:
//? Creamos 3 instancias de Empleado.
// let empleado1 = new Empleado("Juan", "Desarrollador", 1000000)
// let empleado2 = new Empleado("Camilo", "Backend", 2000000)
// let empleado3 = new Empleado("Quevedo", "Java", 3000000)

// empleado1.presentarse();
// empleado1.calcularSalarioAnual();
// empleado1.desactivar();
// empleado1.info();

// empleado2.presentarse();
// empleado2.calcularSalarioAnual();
// empleado2.info();

// empleado3.presentarse();
// empleado3.calcularSalarioAnual();
// empleado3.desactivar();
// empleado3.info();

//! CHECKPOINT 2:
//? Creamos 2 instancias de Lider.
// let lider1 = new Lider("Juan", 1000000, ["Camilo", "Quev", "Jaim"])
// let lider2 = new Lider("Yis", 2000000, ["Zam", "San", "Orl"])

// lider1.presentarse()
// lider1.calcularSalarioAnual()
// lider1.desactivar()
// lider1.agregarMiembro("Rocket")
// lider1.presentarEquipo()
// lider1.info()

// lider2.presentarse()
// lider2.calcularSalarioAnual()
// lider2.agregarMiembro("Dinamita")
// lider2.presentarEquipo()
// lider2.info()

//! CHECKPOINT 3:
//? Crear 4 empleados y 2 lideres.
let empleado1 = new Empleado("Juan", "Desarrollador", 1000000)
let empleado2 = new Empleado("Camilo", "Backend", 2000000)
let empleado3 = new Empleado("Quevedo", "Java", 3000000)
let empleado4 = new Empleado("Jaim", "Frontend", 4000000)

let lider1 = new Lider("Fulano", 5000000, ["Pepito", "Perez", "Pereira"])
let lider2 = new Lider("Sultano", 5000000, ["Flor", "Campo", "Sierra"])

//? Calculo de nomina, extrayendo el salario de cada empleado y lider, sumandolos para obtener la nómina mensual.
let nominaMensual = (empleado1.salario) + (empleado2.salario) + (empleado3.salario) + (empleado4.salario) + (lider1.salario) + (lider2.salario)
console.log(`La nómina mensual es: ${nominaMensual}`)

//? Calculo de nómina anual, multiplicando la nómina mensual por 12 meses.
let nominaAnual = nominaMensual * 12
console.log(`La nómina anual es: ${nominaAnual}`)

//? Desactivar a un empleado y mostrar su información para verificar el cambio de estado.
empleado1.desactivar()
empleado1.info()

//? Imprimir Infor() y presentarEquipo() de cada lider para mostrar la información del lider y su equipo.
lider1.info()
lider1.presentarEquipo()

lider2.info()
lider2.presentarEquipo()