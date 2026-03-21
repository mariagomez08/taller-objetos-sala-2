class Contenido {
  constructor(titulo, genero, anio) {
    this.titulo = titulo;
    this.genero = genero;
    this.anio = anio;
    this.disponible = true;
  }
  //? Método para mostrar la ficha técnica del contenido
  ficha() {
    console.log(`Título: ${this.titulo}
    Género: ${this.genero}
    Año: ${this.anio}
    Disponible: ${this.disponible}`);
  }
  //? Método para retirar el contenido de la plataforma
  retirar() {
    this.disponible = false;
    console.log(
      `El contenido ${this.titulo} ha sido retirado de la plataforma.`,
    );
  }
  //? Método para mostrar el estado de disponibilidad del contenido
  estado() {
    console.log(
      `El contenido ${this.titulo} está disponible: ${this.disponible}`,
    );
  }
}

//! Clase extendida: Pelicula
class Pelicula extends Contenido {
  constructor(titulo, genero, anio, duracionMinutos) {
    super(titulo, genero, anio);
    this.duracionMinutos = duracionMinutos;
    this.duracion_formateada = ``;
  }
  //? Método para mostrar la duración de la película en horas y minutos
  duracionFormateada() {
    const horas = Math.floor(this.duracionMinutos / 60);
    const minutos = this.duracionMinutos % 60;
    this.duracion_formateada = `${horas} horas y ${minutos} minutos`;
    console.log(
      `La duración de la película ${this.titulo} es: ${this.duracion_formateada}.`,
    );
  }
  //? Sobrescribir el método ficha para incluir la duración formateada en la ficha técnica de la película
  ficha() {
    console.log(`Título: ${this.titulo}
Género: ${this.genero}
Año: ${this.anio}
Disponible: ${this.disponible}
Duración: ${this.duracion_formateada}
`);}
}

//! Clase extendida: Serie
class Serie extends Contenido {
  constructor(titulo, genero, anio, temporadas) {
    super(titulo, genero, anio);
    this.temporadas = temporadas;
    this.episodiosPorTemporada = 0;
  }
  //? Método que asigna cuantos episodios tiene cada temporada
  registrarEpisodios(cantidad) {
    this.episodiosPorTemporada = cantidad;
    console.log(
      `La serie ${this.titulo} tiene ${this.temporadas} temporadas y ${this.episodiosPorTemporada} episodios por temporada.`,
    );
  }
  //? Método que retorna temporadas multiplicado por episodios por temporada.
  totalEpisodios() {
    const total = this.temporadas * this.episodiosPorTemporada;
    console.log(
      `La serie ${this.titulo} tiene un total de ${total} episodios.`,
    );
    return total;
  }
  ficha() {
    console.log(`Título: ${this.titulo}
    Género: ${this.genero}
    Año: ${this.anio}
    Disponible: ${this.disponible}
    Numero de temporadas: ${this.temporadas}
    Total de episodios: ${this.temporadas * this.episodiosPorTemporada}
    `);
  }
}

//! CHECKPOINT 4:
//? Crear 2 peliculas y 2 series.
let pelicula1 = new Pelicula("Inception", "Ciencia ficción", 2010, 148);
let pelicula2 = new Pelicula("The Dark Knight", "Acción", 2008, 152);

let serie1 = new Serie("Breaking Bad", "Drama", 2008, 5);
let serie2 = new Serie("Stranger Things", "Ciencia ficción", 2016, 4);

pelicula1.duracionFormateada();
pelicula1.ficha();
pelicula2.duracionFormateada();
pelicula2.ficha();
serie1.ficha();
serie2.ficha();

pelicula1.retirar();
pelicula1.estado();

serie1.retirar();
serie1.estado();

//! CATALOGO COMPLETO EJERCICIO 2
//? Crear 3 peliculas y 3 series.


let pelicula3 = new Pelicula("BlancaNieves", "Romance", 1995, 110)
let pelicula4 = new Pelicula("IronMan", "Acción", 2009, 130)
let pelicula5 = new Pelicula("ScaryMovie", "Comedia", 2001, 160)

let serie3 = new Serie("CasadePapel", "Drama", 2022, 10)
let serie4 = new Serie("Elite", "Acción", 2022, 8)
let serie5 = new Serie("Bridgerton", "Ciencia ficción", 2016, 4)


pelicula3.duracionFormateada();
pelicula4.duracionFormateada();
pelicula5.duracionFormateada();

serie3.registrarEpisodios(8);
serie4.registrarEpisodios(10);
serie5.registrarEpisodios(9);

catalogo = [pelicula3, pelicula4, pelicula5, serie3, serie4, serie5]
for(let i=0; i< catalogo.length; i++) {
    catalogo[i].ficha();
}


//4. Retiren dos contenidos e impriman su estado() para verificar.

pelicula3.retirar();
pelicula3.estado();


serie3.retirar();
serie3.estado();


/*
5. Cuenten cuantos elementos siguen disponibles e impriman el resultado.
*/
//? CHECKOPINT 5
/*node ejercicio2.js corre sin errores. El catalogo muestra la ficha de cada elemento. El
conteo de disponibles es correcto tras los retiros.*/


let disponibles = 0;

for(let i=0; i< catalogo.length; i++) {
  if(catalogo[i].disponible === true){
    disponibles = disponibles + 1;
  }

}  
console.log(`El conteo del catalogo es igual a ${disponibles}`);
