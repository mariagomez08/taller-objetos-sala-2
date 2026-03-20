// Clase Empleado
//
class Empleado {
  constructor(nombre, cargo, salario) {
    this.nombre = nombre;
    this.cargo = cargo;
    this.salario = salario;

    this.activo = true;
  }
  presentarse() {
    return `Hola, mi nombre es ${this.nombre} y soy ${this.cargo}`;
  }
  calcularSalarioAnual() {
    let salarioAnual = this.salario * 12;
    // console.log(`Salario anual es ${salarioAnual}`);
    return salarioAnual;
  }
  desactivar() {
    this.activo = false;
    return `Su estado es inactivo `;
  }
  info() {
    return `El empleado es:  ${this.nombre}\n Su cargo actual es: ${this.cargo}\n Su Sueldo es: ${this.salario}\n Su estado es ${this.activo}\n`;
  }
}
let empleado1 = new Empleado("Camilo", "Contador", 200000);
empleado1.calcularSalarioAnual();

// console.log(empleado1.desactivar() )
console.log(empleado1.info());
let empleado2 = new Empleado("Maria", "Auditor", 3500000);
empleado2.calcularSalarioAnual();

//console.log(empleado2.desactivar() )
console.log(empleado2.info());
let empleado3 = new Empleado("Jurany", "Director", 5000000);
empleado3.calcularSalarioAnual();
console.log(empleado3.desactivar());
console.log(empleado3.info());

//Clase extendida: Lider
//

class Lider extends Empleado {
  constructor(nombre, salario, equipo) {
    super(nombre, salario);
    this.equipo = equipo;
    this.salario = salario;
    this.cargo = "Lider de equipo";
  }
  presentarEquipo() {
    return this.equipo.join(" ");
  }
  agregarMiembro(nombreNuevo) {
    this.equipo.push(nombreNuevo);
    return `Bienvenido al equipo ${nombreNuevo}`;
  }
  info() {
    return ` El lider es:  ${this.nombre}\n Su cargo actual es: ${this.cargo}\n Su Sueldo es: ${this.salario}\n Su estado es ${this.activo}\n el número de personas en el equipo son: ${this.equipo.length}`;
  }
}
let lider1 = new Lider("Cesar", 200, ["Camilo", "Maria", "Jurany"]);
console.log(lider1.calcularSalarioAnual());
lider1.desactivar();

lider1.agregarMiembro("Marcia");
console.log(lider1.presentarEquipo());
console.log(lider1.info());

let lider2 = new Lider("Juan", 200, ["Camilo", "Maria", "Jurany"]);
lider2.agregarMiembro("Sandra");
console.log(lider2.presentarEquipo());
console.log(lider2.info());
