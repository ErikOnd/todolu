import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { Inder } from "next/font/google";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["200", "400", "600"],
	display: "swap",
	variable: "--font-montserrat",
});

const inter = Inder({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
	variable: "--font-inter",
});

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable}  ${inter.variable}`}>
				{children}
			</body>
		</html>
	);
}
