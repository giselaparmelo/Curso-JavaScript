const tableBody = document.querySelector("table tbody")
const importeTotalCarrito = document.querySelector("td#importeTotalCarrito")

const carrito = JSON.parse(localStorage.getItem("carritoCompras")) || []

function calcularTotalCarrito () {
    if(carrito.length > 0) {
        let montoTotalCarrito = carrito.reduce((acc, prod) => acc + prod.precio, 0)
        importeTotalCarrito.textContent = `$ ${montoTotalCarrito}`
    }
}

function armarTablaCarrito(carrito) {
    return `<tr>
                <td class="imagen-carrito">${carrito.imagen}</td>
                <td>${carrito.nombre}</td>
                <td>${carrito.precio}</td>
                <td class="quitar-carrito" title="click para quitar del carrito">❌</td>
            </tr>`
}

function cargarProductosDelCarrito() {
    tableBody.innerHTML = ""
    if(carrito.length > 0) {
        carrito.forEach((producto) => tableBody.innerHTML += armarTablaCarrito(producto))
        calcularTotalCarrito()
    }
}


cargarProductosDelCarrito()