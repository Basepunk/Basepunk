import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";

const sora = Sora({
	subsets: ["latin"],
	style: "normal",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
	title: "Base Punk",
	description:
		"Base Punk is a groundbreaking NFT project that goes beyond mere digital art.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1 maximum-scale=1.0, user-scalable=no"
				/>
			</Head>
			<body className={sora.className}>
				<MobileNavbar />
				{children}
				<Navbar isBottom={true} />
			</body>
		</html>
	);
}
