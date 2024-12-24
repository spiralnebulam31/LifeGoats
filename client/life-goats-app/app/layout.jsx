import { Navbar, Footer } from './components/index';
import PreLoaderWrapper from './components/Loaders/PreLoaderWrapper';
import { StateProvider } from '../providers/StateProvider';
import './globals.css';
import { Catamaran, Cinzel, Open_Sans, Rubik } from 'next/font/google';
import PropTypes from 'prop-types';

// Configure fonts
const catamaran = Catamaran({ 
  subsets: ['latin'],
  variable: '--font-catamaran',
  display: 'swap',
});

const cinzel = Cinzel({ 
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-cinzel',
  display: 'swap',
});

const openSans = Open_Sans({ 
  subsets: ['latin'],
  weight: ['800'],
  variable: '--font-open-sans',
  display: 'swap',
});

const rubik = Rubik({ 
  subsets: ['latin'],
  weight: ['900'],
  variable: '--font-rubik',
  display: 'swap',
});

// Metadata configuration
export const metadata = {
  title: 'Life Goats',
  description: 'A community and event series for people centered professionals who value relationship building and spending quality time together in the great outdoors.',
  keywords: 'Life Goats, life goats, outdoor events, community, relationship building, people centered professionals, great outdoors, Mount Olympus',
  metadataBase: new URL('https://www.lifegoats.com'),
  openGraph: {
    title: 'Life Goats: A community and event series for people centered professionals who value relationship building and spending quality time together in the great outdoors',
    description: 'Our goal is to help each other press pause on the momentum of daily life, come together, connect, brainstorm, recharge and enjoy reinventing ourselves. As people-centered professionals, our performance depends on that.',
    images: [
      {
        url: '/herd.JPG',
        width: 1200,
        height: 630,
        alt: 'Life Goats Community',
      },
    ],
    url: 'https://www.lifegoats.com/',
    type: 'website',
  },
  icons: {
    icon: '/life-goats-icon.svg',
  },
};

// Viewport configuration (moved themeColor here)
export const viewport = {
  themeColor: '#e6ecf0',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${catamaran.variable} ${cinzel.variable} ${openSans.variable} ${rubik.variable}`}>
      <head>
        {/* Load remaining fonts via CSS for those not available in next/font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Luckiest+Guy&family=Neucha&family=Road+Rage&display=swap"
          rel="stylesheet"
        />
        
        {/* Add the scroll behavior styles */}
        <style>
          {`
            html {
              scroll-behavior: smooth;
              scroll-padding-top: 60px;
            }
          `}
        </style>

        {/* Add schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Life Goats",
              "url": "https://www.lifegoats.com/",
              "logo": "https://www.lifegoats.com/life-goats-icon.svg",
              "description": "A community and event series for people centered professionals who value relationship building and spending quality time together in the great outdoors. Our goal is to help each other press pause on the momentum of daily life, come together, connect, brainstorm, recharge and enjoy reinventing ourselves. As people-centered professionals, our performance depends on that."
            })
          }}
        />
      </head>
      <body>
        <StateProvider>
          <PreLoaderWrapper>
            <Navbar />
            {children}
            <Footer />
          </PreLoaderWrapper>
        </StateProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};