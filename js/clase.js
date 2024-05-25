class compra {
    constructor(carritoDeCompras) {
        this.carrito = carritoDeCompras
    }
    calcularSubtotal() {
        if (this.carrito.length > 0) {
            return this.carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
        }
    }
}