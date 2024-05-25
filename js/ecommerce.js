const cuotasDisponibles = 12

function mostrarCuotas() { // Uso un ciclo for para mostrarle al usuario cuantas cuotas ofrezco(12).
    for (let i = 1; i <= cuotasDisponibles; i++) {
        console.log("Aprovechá hasta", i, "cuota/s")
    }
}

let cuotasSinInteres = 1

//Creo una función que muestra que hay opciones de 6, 9, y 12 cuotas sin interés.

function mostrarCuotasSinInteres (cuotasDisponibles){
   if (cuotasDisponibles > 1 && cuotasDisponibles <= 4) {
        let cuotasSinInteres = (parseInt(cuotasDisponibles)*3)
        console.log("Estás aprovechando nuestras cuotas sin interés")
    } else {console.warn("Te recomendamos que aproveches nuestras cuotas sin interés")}
}

/*Creo la función "mostrarPrecio" y uso un switch, por ser poco casos que funcionan con igualdad (no son necesarias comparaciones de mayor, menor, etc).
El usuario puede consultar precio gracias a esta función.*/

function mostrarPrecio(productoId) {
    switch (productoId) {
        case 1:
            alert("El precio del producto 1 es $5500")            
            break;
        case 2:
            alert("El  precio del producto 2 es $4500")
            break;

        case 3:
            alert("El  precio del producto 3 es $2100")            
            break;

        case 4:
            alert("El  precio del producto 4 es $2350")
            break;
        default:
            console.warn("Por favor, ingresa un producto válido.")
            break;
    }

}

function mostrarProducto() {
    let respuesta = confirm("Quieres conocer el precio de este producto?")
    if (respuesta === true) {
        let productoId = prompt("Ingresa el Id del producto deseado")
        if (productoId !== "") {
            mostrarPrecio(parseInt(productoId))
        } else {
            console.warn("Ingresa un producto válido, por favor.")
        }
    } else {
        console.log("Esperamos que vuelvas pronto!")
    }

}

const carrito = [] // Inicializo carrito vacío.

// Creo un array con mis productos:

const productos = [
    {nombre: "pizza", id: 1, precio: 5500},
    {nombre: "hamburguesa", id: 2, precio: 4500},
    {nombre: "pancho", id: 3, precio: 4500},
    {nombre: "ensalada", id: 4, precio: 2100},
    {nombre: "hotcakes", id: 5, precio: 2350},
    {nombre: "tazón de fideos", id: 6, precio:4800},
    {nombre: "tamal", id: 7, precio: 3900},
    {nombre: "burrito", id: 8, precio: 2800},
    {nombre: "arroz", id: 9, precio: 5100},
    {nombre: "arroz con curry", id: 10, precio: 3950}
]

function buscarProducto(id) {
    let productoSeleccionado = productos.find((producto) => producto.id === id)
    return productoSeleccionado
}

function comprar () {
    let id = prompt("Ingresa el cógido Id del producto deseado:")
    let productoElegido = buscarProducto(parseInt(id))

    if (productoElegido === undefined) {
        alert("No se encontró el producto indicado.")
    } else {
        carrito.push(productoElegido)
        alert("Se ha añadido " + productoElegido.nombre + " al carrito.")

        let respuesta = confirm("Quiere elegir otro producto?")
        if (respuesta === true) {
            comprar() // Recursividad, para que pueda seguir realizando más compras.
        } else {
            const shop = new compra(carrito)
        let subtotal = shop.calcularSubtotal()
        console.log("El costo total es de $ ", subtotal)
        }        
    }
}

