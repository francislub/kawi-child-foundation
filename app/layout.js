import './css/globals.css';
import './css/style.css';
import Head from 'next/head';

export const metadata = {
    title: 'NALONGO FOUNDATION',
    description: 'Developed by TroyMoses And Francis',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                { children }
            </body>
        </html>
    )
}