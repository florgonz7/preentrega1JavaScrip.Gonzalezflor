

///PRIMER PRE ENTREGA JAVASCRIPT //// ALUMNO : FLORENCIA GONZALEZ



///MARKET-ONLINE - PET SHOP MARKET///

let subtotal = 0;
let continuar;
let cantidad;
let producto;
const MINIMO = 1;
const MAXIMO = 15;
const BALANCEADO_PERROS = 'BALANCEADO';
const BALANCEADO_GATOS = 'BALANCEADO';
const CARAMELOS = 'CARAMELOS';
const BOX_SORPRESA = 'BOX SORPRESA';

function saludar() {
    alert('BIENVENIDO A PET SHOP MARKET. Haga clic en Aceptar para comenzar con la compra');
}

saludar();

function calcularPrecio(producto, cantidad) {
    switch (producto) {
        case BALANCEADO_PERROS:
            return 500 * cantidad;
        case BALANCEADO_GATOS:
            return 250 * cantidad;
        case CARAMELOS:
            return 2800 * cantidad;
        case BOX_SORPRESA:
            return 3900 * cantidad;
        default:
            alert('En este momento no contamos con stock de este producto');
            return 0;
    }
}

do {
    producto = prompt('Bienvenido a PET SHOP MARKET!\n' +
        '"Balanceado Perros" - 15kg $30000\n' +
        '"Balanceado Gatos" - 15Kg $25500\n' +
        '"Caramelos" - Por Unidad (500g) $2800\n' +
        '"Box Sorpresa" - Por Unidad $3900\n' +
        'Seleccione un producto:').toUpperCase();


    cantidad = parseInt(prompt('Seleccione cuantas unidades desea comprar:'));

    if (cantidad >= MINIMO && cantidad <= MAXIMO) {
        subtotal += calcularPrecio(producto, cantidad);
        continuar = prompt('Total: $ ' + subtotal + ' ¿Desea seguir comprando? si/no');
    } else {
        alert('Supera el máximo de unidades permitidas para este producto');
    }
} while (continuar === 'si');

alert('Su total a pagar es: $ ' + subtotal);
 