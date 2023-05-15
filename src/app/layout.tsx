import Head from "next/head";
import "./styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Mujeres por México",
	description: "Mujeres por México en Chihuahua, A.C.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<div className={inter.className}>{children}</div>
		</html>
	);
}
