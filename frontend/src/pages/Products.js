import React from 'react';

const Products = () => {
  return (
    <main>
      <ul className="productos">
        <li>
          <h2>Plancha de cabello</h2>
          <img src="img/plancha-aguacate.jpg" alt="Plancha de cabello" />
          <p className="productos-descipcion">Plancha Remington aguacate</p>
          <p className="productos-precio"> $220.000</p>
          <button className="boton-agregar-carrito">Agregar al carrito</button>
        </li>
        <li>
          <h2>Plancha de cabello</h2>
          <img src="img/plnacha-keratina.jpg" alt="Plancha de cabello" />
          <p className="productos-descipcion">Plancha Remington Keratina</p>
          <p className="productos-precio"> $250.000</p>
          <button className="boton-agregar-carrito">Agregar al carrito</button>
        </li>
        <li>
          <h2>Plancha de cabello</h2>
          <img src="img/plancha-purple.jpg" alt="Plancha de cabello" />
          <p className="productos-descipcion">Plancha Remington purple</p>
          <p className="productos-precio"> $150.000</p>
          <button className="boton-agregar-carrito">Agregar al carrito</button>
        </li>
        <li>
          <h2>Secadora de cabello</h2>
          <img src="img/secadora-black.jpg" alt="Secadora de cabello" />
          <p className="productos-descipcion">Secadora Black</p>
          <p className="productos-precio"> $90.000</p>
          <button className="boton-agregar-carrito">Agregar al carrito</button>
        </li>
      </ul>
    </main>
  );
};

export default Products;
