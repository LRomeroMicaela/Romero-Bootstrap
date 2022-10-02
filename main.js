// fijo el precio de la unidad y de los envios
let precioLentesPorUnidad = "5000";
let precioEnvioCaba = "600";
let precioEnvioBsAs = "1000";
//fijo en 0 las variables globales a usar dentro del ciclo.
let cantidadLentes= 0;
let eleccionAnteojo = 0;
let acumulador = 0;

/*le pido al usuario que igrese el articulo que le interesa, valido que se encuentre en 
un número correcto de articulo.
si esta en un n° válido, le consulto la cantidad de unidades que desea de
ese lente.
lo derivo dentro del if a la funcion compra, donde retornará el precio a pagar por la cantidad
de lentes que desee.
Le doy la oportunidad al cliente de repetir el proceso para comprar varios articulos.
El acumulador dará el valor final de todos los armazones que el usuario incluirá en el carrito.
*/

while(eleccionAnteojo != "fin"){
    eleccionAnteojo = prompt("Ingrese el artículo del armazón deseado. Ingrese fin para finalizar la compra.");
    if (eleccionAnteojo >= 1 && eleccionAnteojo <= 15){
        cantidadLentes= prompt("Ingrese la cantidad de lentes que desea comprar.");
        let carritoLente = compra(cantidadLentes);
        alert("El valor a abonar por este artículo es de "+ carritoLente);
        acumulador = acumulador + carritoLente;
        alert("El total a abonar es de " + acumulador);
        }else {
        alert("El número ingresado es incorrecto.")
    }
}

//funcion que calcula el precio por las unidades de armazones que desee comprar.
function compra(cantiLentes){
    let compraLente = cantiLentes * precioLentesPorUnidad;
    return compraLente;
}

//envio

let envio = (prompt ("Escriba CABA o Buenos Aires, segun a donde desee que se realice el envío"));

//ciclo for para que introduzca el envio
for (let i=1; i<=3; i++){
    if(envio == "caba"){
        alert("El envío cuesta " + precioEnvioCaba)
        break;
    } else if (envio == "buenos aires"){
        alert("El envío cuesta "+ precioEnvioBsAs)
        break;
    } else {
        envio = prompt("La opción escrita no es válida, ingrese una válida");
    }
}

//datos usuario
    let nombreYApellido= prompt("Ingrese su nombre y apellido.");
    let calleCityYCp= prompt("Ingrese su domicilio completo, ciudad y Código Postal para el envío");


//pago
let pago = "";
for(let i=1; i<=3; i ++){
    pago = prompt("Ingrese el método de pago, escriba efectivo o tarjeta.");
    if (pago == "efectivo"){
        alert("Pague al recibir el producto.");
        break;
    } else if (pago == "tarjeta"){
        let tarjeta= parseInt(prompt("Ingrese su número de tarjeta."));
        let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas, 3 o 6 cuotas."));
            let pagoCantidadCuotas= aPagar(cuotas);
            alert("Cantidad a pagar "+ pagoCantidadCuotas + " en " + cuotas + " cuotas.");
        break;
    } else{
        alert ("Lo ingresado no es correcto");
    }
}
//calculo el monto a pagar según cantidad de cuotas
function aPagar(cantidadCuota){
    let pagarPorCuota = acumulador / cantidadCuota;
    return pagarPorCuota;
}

let finalizar = alert("Los datos ingresados son "+ nombreYApellido + " domicilio " + calleCityYCp +" a pagar con " + pago);