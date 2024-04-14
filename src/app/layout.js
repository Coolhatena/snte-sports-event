import { Inter } from "next/font/google";
import "./globals.css";

import Header from '@/components/header/Header.jsx';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Evento Nacional Cultural y Deportivo Sección 61",
  description: "X Evento Nacional Cultural y Deportivo de la Sección 61 del SNTE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    	<body className={inter.className}>
			<Header />	
			{children}
		</body>
    </html>
  );
}
