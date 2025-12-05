import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: [ "latin" ],
});

export const metadata: Metadata = {
    title: {
        template: '%s - ePayco',
        default: 'ePayco',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="bg-base-200">
            <body className={ `${geistSans.variable} antialiased flex flex-col min-h-dvh` }>
                { children }
            </body>
        </html>
    );
}
