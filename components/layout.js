import { Providers } from './app/providers';
import Footer from './footer/Footer';
import Header from './header/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}