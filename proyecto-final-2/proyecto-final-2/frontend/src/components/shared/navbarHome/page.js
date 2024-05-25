import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function NavbarHomeComponent() {
  const [token, setToken] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const tokenBySession = sessionStorage.getItem('token');
    if (tokenBySession) {
      setToken(tokenBySession);
    }
  }, []);

  useEffect(() => {
    if (token) {
      setIsEnabled(true);
    }
  }, [token]);

  return (
    <ul>
      <li>
        <Link href={`users?token=${token}`} className={isEnabled ? '' : styles.disabled}>
          Lista de usuario
        </Link>
      </li>
      <li><Link href="register">Registrarme</Link></li>
      <li><Link href="login">Login</Link></li>
    </ul>
  );
}
