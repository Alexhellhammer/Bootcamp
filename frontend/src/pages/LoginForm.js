import React from 'react';

const LoginForm = () => {
  return (
    <section className="login-form">
      <h2 className="titulo-principal">Inicio de Sesión</h2>
      <form id="login-form" action="procesar_login.php" method="post">
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" id="email" name="email" className="input-padrom" required placeholder="email@dominio.com" />

        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" className="input-padrom" required />

        <button type="submit" className="boton-enviar">Iniciar Sesión</button>
      </form>
    </section>
  );
};

export default LoginForm;
