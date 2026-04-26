/*2) Crear un archivo llamado instituto.js, dentro de este archivo  crear un objeto que se llame alumno con las siguientes 
propiedades: Nombre, Edad, inscriptoAMaterias (un array de strings), debeCorrelativa (un booleano) 
realizar los siguientes métodos. 
a) Se desea generar un método para realizar una inscripción a una  materia (recibe como parámetro de entrada el objeto alumno, y el 
nombre de la materia a inscribirse) y un método para validar si tiene las correlativas aprobadas (recibe como parámetro de 
entrada el objeto alumno) 
b) El método para realizar una inscripción no se debe ejecutar hasta no validar si tiene las correlativas aprobadas. En el 
método validarCorrelativa, utilizar la propiedad “debeCorrelativa” para validarlo, en el método para inscribir, 
en caso de que el alumno no deba la correlativa, agregar la materia al array de materias “inscriptoAMaterias” del objeto. 
c) Simular retardos en los métodos de validar correlativas y realizar inscripción de 2 segundos y 5 segundos respectivamente. 
d) En cualquiera de los dos casos se debe ejecutar un log en consola que informe que se finalizó la operación. 
e) Ejecutar las promesas y definir como se debe comportar en cada caso (resuelto/rechazado)*/

const colors = require('colors');

const alumnno = {
    nombre: "Ana",
    edad: 26,
    inscriptoAMaterias: [],
    debeCorrelativa: false
}

function validarCorrelativa(alumno) {
    return new Promise((resolve, reject) => {
        console.log(`validando correlativas del alumno: ${alumno.nombre}`.yellow)
        setTimeout(() => {
            if (alumno.debeCorrelativa === false)
                resolve(`CORRELATIVA VALIDADA el alumno ${alumno.nombre} no debe correlativas`.green)
            else reject(` - el alumno ${alumno.nombre} debe correlativas`.red)
        }, 2000)
    })
}

function realizarInscripcion(alumno, materia) {
    return new Promise((resolve, reject) => {
        console.log(`Procesando inscripción de: ${materia} para el alumno:${alumno.nombre}...`.yellow);
        setTimeout(() => {
            alumno.inscriptoAMaterias.push(materia)
            resolve(`ÉXITO: Inscripción realizada. Materias Actuales: ${alumno.inscriptoAMaterias}`.green);
        }, 5000);
    })
}

function inscribirMateria(alumno, materia) {
    validarCorrelativa(alumno)
         .then(response => {
            console.log(response);
            return realizarInscripcion(alumno, materia)
        })
         .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(`ERROR:NO SE PUDO REALIZAR LA INSCRIPCION ${error}`.red)
        })
        .finally(end => {
            console.log(`Transaccion Finalizada`.yellow)
        })
}

inscribirMateria(alumnno, "Matematica")