const tableBody = document.querySelector("table tbody")
const importeTotalCarrito = document.querySelector("td#importeTotalCarrito")

const carrito = JSON.parse(localStorage.getItem("carritoCompras")) || []

function calcularTotalCarrito () {
    if(carrito.length > 0) {
        let montoTotalCarrito = carrito.reduce((acc, prod) => acc + prod.precio, 0)
        importeTotalCarrito.textContent = `$ ${montoTotalCarrito.toLocaleString("es-AR")}s`
    }
}

function armarTablaCarrito(imagen, nombre, precio) {
    return `<tr>
                <td class="imagen-carrito">${imagen}</td>
                <td>${nombre}</td>
                <td>${precio.toLocaleString(es-AR)}</td>
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