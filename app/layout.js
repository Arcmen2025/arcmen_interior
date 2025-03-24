import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/responsive.scss';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer.jsx';
import Script from 'next/script';

export const metadata = {
    title: 'Interior designers in chennai | Home interior designer in chennai',
    description: ['Premium Best interior designer Chennai, Award winner', 'We Assure 100% Desing & work satisfy', '15yr Warranty, 3500+ Complete Project'],
    keywords: [
        'Interior designer',
        'Best Interior Designers in Chennai',
        'No.1 Interior Designers in Chennai',
        'Interior Decorators in Chennai',
        'Interior Design Packages in Chennai',
        'Best Interior Designers in Chennai With Price',
        'List of Interior Designers in Chennai',
        'Home Interior Designers in Chennai',
        'Interior Designers in Chennai for Flats',
        'Interior Designers near me',
        'interior designers chennai',
        'best interior designers chennai',
        'interiors in chennai',
        'best interiors in chennai',
        'top interior designers in chennai',
        'best home interiors in chennai',
        'best home interior designers in chennai',
        'home interiors in chennai',
        'interior decorators in chennai ',
        'best home interior decorators in chennai'
    ]
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <Script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-KM4FGMCH'); `}</Script>

                <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16699501737"></Script>

                <Script id="google-analytics">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-16699501737');
                    `}
                </Script>

                <Script id="clarity-script" type="text/javascript">
                    {`
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "qmef31ybn0");
    `}
                </Script>
                <meta name="google-site-verification" content="ZD66ucWU0I3F252vjV3PMyMHn4gLa3PvTRMNXJyGdcI" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link rel="icon" href="https://res.cloudinary.com/dpflidsbg/image/upload/v1735293696/arcmen/fav-icon.jpg" type="image/x-icon" sizes="any" />
            </head>
            <body>
                <noscript>
                    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KM4FGMCH" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
                </noscript>

                {/* <Header /> */}
                <div>{children}</div>
                {/* <Footer /> */}
            </body>
        </html>
    );
}
