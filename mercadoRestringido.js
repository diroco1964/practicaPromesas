/*3) Crear un archivo llamado mercadoRestringido.js, dentro de este archivo generar cinco objetos de tipo producto, deben tener las 
propiedades: id, nombreProducto, precio, stock. Guardar los cinco objetos en un array llamado productos. 
a) Se desea generar un método para realizar venta, validar stock y generar etiqueta de envío. 
El método validarStock recibe como parámetros de entrada un nombre de producto a buscar y el array 
productos, debe buscar el producto, en el array de productos, en caso de que lo encuentre, debe validar el stock disponible. El 
método realizarVenta, debe recibir como parámetro de entrada un objeto producto, y en caso de que se ejecute la venta, descontar 
la cantidad vendida del producto. El método imprimirEtiqueta, recibe como parámetro de entrada el nombre del producto. 
b) El método para realizar venta no se debe ejecutar hasta no validar si hay stock suficiente. 
c) El método generar etiqueta solo se debe ejecutar si se realizó la venta correctamente. 
d) Simular retardos en los métodos de validar correlativas y realizar inscripción de 2 segundos y 1 segundos y 4 segundos 
respectivamente. 
e) En cualquiera de los casos se debe ejecutar un log en consola que informe que se finalizó la operación. 
f) Ejecutar las promesas y definir como se debe comportar en cada caso (resuelto/rechazado)*/

const colors = require('colors');



function validarStock(nombreProducto, productos,cantidadSolicitada) {
    return new Promise((resolve, reject) => {
        console.log(`validando stock del producto: ${nombreProducto}`.yellow)
        setTimeout(() => {
            const producto = productos.find(prodructoBuscado => prodructoBuscado.nombreProducto === nombreProducto);
            if (producto && producto.stock >= cantidadSolicitada) {
                console.log(`STOCK VALIDADO: ${nombreProducto} tiene ${producto.stock} unidades disponibles`.green)
                resolve(producto);
            } else {
                reject(`STOCK INSUFICIENTE O PRODUCTO NO ENCONTRADO`.red);
            }
        }, 2000);
    })
}

function realizarVenta(producto,cantidadSolicitada) {
    return new Promise((resolve, reject) => {
        console.log(`Procesando venta de: ${producto.nombreProducto}...`.yellow);
        setTimeout(() => {
              producto.stock >= cantidadSolicitada
                const cantProducto= producto.stock -= cantidadSolicitada;
                console.log(`ÉXITO: Venta realizada. Stock Actual de ${producto.nombreProducto}: ${cantProducto}`.green);
                resolve(producto);
        }, 1000);
    })
}
function imprimirEtiqueta(producto) {
    return new Promise((resolve, reject) => {
        console.log(`Generando etiqueta para: ${producto.nombreProducto}...`.yellow);
        setTimeout(() => {
            resolve(`ETIQUETA: Producto: ${producto.nombreProducto} - Precio: $${producto.precio}`.green);
        }, 4000);
    })
}

async function procesarVenta(nombreProducto, productos, cantidadSolicitada) {
    try {
        const validacionStock = await validarStock(nombreProducto, productos, cantidadSolicitada);
        const productoVendido = await realizarVenta(validacionStock, cantidadSolicitada);
        const generarEtiqueta = await imprimirEtiqueta(productoVendido);
        console.log(generarEtiqueta);
    } catch (error) {
        console.log(`ERROR: ${error}`.red);
    } finally {
        console.log(`Transaccion Finalizada`.yellow);
    }
}

module.exports = {validarStock, realizarVenta, imprimirEtiqueta, procesarVenta}