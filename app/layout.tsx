import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar'
import Card from '@/components/Card'





export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html lang="en">
            
            <body>
				<NavBar/>
			
				{children}


			</body>
			
        </html>
    );
}
