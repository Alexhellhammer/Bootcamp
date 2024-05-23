// pages/index.js
import React from 'react';

const Home = () => {
  return (
    <main>
      <section className="principal">
        <h2 className="titulo-principal">Sobre AP PRODUCTS</h2>
        <img className="carrito" src="/img/carrito.jpg" alt="carrito" />
        <p>Tienda en Internet a precios de remate Colombia encuentra las mejores Ofertas a un clic de tu puerta. Seguridad y Respaldo en todas tus compras. Fundada en 2024, <em><strong>AP PRODUCTS</strong></em> ya es destaque en la ciudad y conquista de nuevos clientes diariamente.</p>
        <p id="mision"><em>Nuestra misión es: <strong>"Proporcionar autoestima y calidad de vida a nuestros clientes".</strong></em></p>
      </section>
      <section className="mapa">
        <h3 className="titulo-principal">Nuestra ubicacion</h3>
        <p>Nuestro establecimiento esta ubicado en el corazon de la ciudad</p>
        <div className="mapa-contenido">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d836.0135746773683!2d-74.15091035628647!3d4.634512951812676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9dd62f230f69%3A0xc476c58b078f3a45!2sMasterclassmyg!5e0!3m2!1ses-419!2sco!4v1710126643535!5m2!1ses-419!2sco" width="100%" height="300" style={{ border:0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
      <section className="diferenciales">
        <h3 className="titulo-principal">Diferenciales</h3>
        <div className="contenido-diferenciales">
          <ul className="lista-diferenciales">
            <li className="items">Manejamos todo tipo de pagos</li>
            <li className="items">Enviamos nacional e internacional</li>
            <li className="items">Tenemos las mejores promociones a su servicio</li>
          </ul>
          <img src="/img/promociones.jpg" className="imagen-promociones" alt="promociones" />
        </div>
        <div className="video">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/Om8qn6bdpDI?si=ylvrkcoRt99acFHC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </section>
    </main>
  );
};

export default Home;

