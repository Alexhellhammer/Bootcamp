import React from 'react';
import Link from 'next/link';

const Header = () => (
  <header>
    <div className="caja">
      <img src="/img/logo.png" alt="Logo" />
      <nav>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/contact"><a>Contact</a></Link></li>
          <li><Link href="/products"><a>Products</a></Link></li>
          <li><Link href="/login"><a>Login</a></Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;

