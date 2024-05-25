import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import HeaderComponent from 'productWeb/components/shared/header/page';
import FooterComponent from 'productWeb/components/shared/footer/page';
import NavbarComponent from 'productWeb/components/shared/navbar/page';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderComponent />
        <NavbarComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
