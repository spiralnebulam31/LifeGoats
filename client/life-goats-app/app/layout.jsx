import { Navbar, Footer } from './components/index';
import PreloaderWrapper from './components/Loaders/PreloaderWrapper';
import { StateProvider } from '../providers/StateProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/life-goats-icon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A community and event series for people centered professionals who value relationship building and spending quality time together in the great outdoors." />
        <title>Life Goats</title>
      </head>
      <body>
        <StateProvider>
          <PreloaderWrapper>
            <Navbar />
            {children}
            <Footer />
          </PreloaderWrapper>
        </StateProvider>
      </body>
    </html>
  );
}