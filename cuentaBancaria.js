
/*1) Crear un archivo llamado cuentaBancaria.js, dentro de este archivo realizar los siguientes métodos.
a) Se desea generar un método para realizar una transferencia y un método para validar el saldo disponible en la cuenta.
b) El método de realizar transferencia no se debe ejecutar hasta no validar el saldo y que haya saldo suficiente.
c) Simular retardos en los métodos de validar saldo y realizar transferencia de 5 segundos y 10 segundos respectivamente.
d) En cualquiera de los casos se debe ejecutar un log en consola que informe que se finalizó la operación. (había un método de la
promesa que le paso un callback que se ejecuta en cualquiera de los dos casos)
e) Ejecutar las promesas y definir como se debe comportar en cada caso (resuelto/rechazado) pasándole las callbacks necesarias.*/

const colors = require('colors');

function validarSaldoCuenta(saldo) {
    return new Promise((resolve, reject) => {
        console.log(`validando saldo de la cuenta...`.yellow)
        setTimeout(() => {
            if (saldo >= 100)
                resolve(`SALDO VALIDADO tienes en la cuenta: ${saldo} pesos`.green)
            else
                reject(`ERROR - no hay saldo disponible en la cuenta`.red)
        }, 5000);
    })
}

function ejecutarTransaccion(saldo) {
    return new Promise((resolve, reject) => {
        console.log("Procesando transferencia bancaria...".yellow);
        setTimeout(() => {
            const montofinal = saldo - 3;
            resolve(montofinal);
        }, 10000);
    });
}

function procesarTransaccion(saldo) {
    validarSaldoCuenta(saldo)
        .then(response => {
            console.log(`La respuesta recibida es: ${response}`)
            return ejecutarTransaccion(saldo)
        })
        .then(response => {
            console.log(`ÉXITO: Transferencia realizada. Saldo Final: ${response}`.green);
        })
        .catch(error => {
            console.log(`ERROR: ${error}`.red)
        })
        .finally(end => {
            console.log(`Transaccion Finalizada`.yellow)
        })
}



module.exports = {validarSaldoCuenta, ejecutarTransaccion, procesarTransaccion}