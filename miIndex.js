const {validarSaldoCuenta, ejecutarTransaccion, procesarTransaccion} = require('./cuentaBancaria');

let miCuenta = {
    saldo: 600
}
procesarTransaccion(miCuenta.saldo)
