import React from 'react';

const ContactForm = () => {
  return (
    <section className="contact-form">
      <h2 className="titulo-principal">Registro</h2>
      <form id="register-form" action="procesar_registro.php" method="post">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" className="input-padrom" required />

        <label htmlFor="apellido">Apellido</label>
        <input type="text" id="apellido" name="apellido" className="input-padrom" required />

        <label htmlFor="email">Correo electrónico</label>
        <input type="email" id="email" name="email" className="input-padrom" required placeholder="email@dominio.com" />

        <label htmlFor="telefono">Teléfono</label>
        <input type="tel" id="telefono" name="telefono" className="input-padrom" required placeholder="(xx) xxx xxx xx xx" />

        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" className="input-padrom" required />

        <label htmlFor="confirm_password">Confirmar Contraseña</label>
        <input type="password" id="confirm_password" name="confirm_password" className="input-padrom" required />

        <button type="submit" className="boton-enviar">Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;
