document.addEventListener('DOMContentLoaded', function() {
    const botonesAgregarCarrito = document.querySelectorAll('.boton-agregar-carrito');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');

    botonesAgregarCarrito.forEach(function(boton) {
        boton.addEventListener('click', function() {
            const producto = boton.parentElement;
            const nombreProducto = producto.querySelector('h2').textContent;
            const precioProducto = producto.querySelector('.productos-precio').textContent;

            // Crear elemento de lista para el producto
            const itemCarrito = document.createElement('li');
            itemCarrito.textContent = `${nombreProducto} - ${precioProducto}`;

            // Agregar el elemento al carrito
            listaCarrito.appendChild(itemCarrito);

            // Actualizar total del carrito
            let total = parseFloat(totalCarrito.textContent.replace('Total: $', ''));
            total += parseFloat(precioProducto.replace('$ ', ''));
            totalCarrito.textContent = `Total: $${total}`;
        });
    });
});
