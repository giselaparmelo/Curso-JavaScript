
const divContenedor = document.getElementById("divContenedor")
const btnCarrito = document.getElementById("carrito")
const spanCarrito = document.getElementById("productosEnCarrito")

const productos = []
const urlProductos = "js/productos.json"


const carrito = JSON.parse(localStorage.getItem("carritoCompras")) || []

function mostrarMensajeToast(mensaje, color) {
    Toastify({
        text: mensaje,
        duration: 3000,
        style: {
          background: color,
        },
      }).showToast();
}

function mostrarMensajeError() {
    Swal.fire({
        title: "Error",
        text: "Seleccione al menos un producto",
        icon: "error",
        confirmButtonText: "Aceptar",
    })
}



function retornarCardHtml(producto) {
    return `<div class="div-card">
                <div class="imagen">${producto.imagen}</div>
                <div class="producto">${producto.nombre}</div>
                <div class="importe">$ ${producto.precio}</div>
                <button id="${producto.id}" class="add-to-cart">Agregar</button>
            </div>`

}

function retornarCardError () {
    return `<div class="div-card-error">
                <h3>Se ha producido un error. Intente nuevamente más tarde</h3>
            </div>`
}

function obtenerProductos() {
    fetch(urlProductos)
    .then((response) => response.json())
    .then((data) => productos.push(...data))
    .then(() => cargarProductos(productos))
    .catch((error) => {
        console.error(error)
        divContenedor.innerHTML = retornarCardError()
    } )
}

function cargarProductos(array) {
    if (array.length > 0) {
        divContenedor.innerHTML = ""
        array.forEach((producto) => divContenedor.innerHTML += retornarCardHtml(producto))
        activarEventosClick()
        if(carrito.length > 0) {
            actualizarTotalCarrito()}
    } 
}

function actualizarTotalCarrito() {
    spanCarrito.textContent = carrito.length
}

function activarEventosClick() {
    const botonesAgregar = document.querySelectorAll("button.add-to-cart")


    if (botonesAgregar.length > 0) {
        botonesAgregar.forEach((boton)=> {
            boton.addEventListener("click", ()=> {
                const productoSeleccionado = productos.find((producto)=> producto.id == boton.id)
                carrito.push(productoSeleccionado)
                actualizarTotalCarrito()
                localStorage.setItem("carritoCompras", JSON.stringify(carrito))
                mostrarMensajeToast("Producto agregado al carrito", "green")
            })
        })
    }
}

// cargarProductos(productos)
obtenerProductos()

//Eventos

btnCarrito.addEventListener("click", () => {
    carrito.length > 0 ? location.href = "checkout.html" : mostrarMensajeError()
})

