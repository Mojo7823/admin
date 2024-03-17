import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import BootstrapClient from "./components/Bootstrap";
import Navbar from "./components/Navbar";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "500", "700", "900"],
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				{children}
				<BootstrapClient />
			</body>
		</html>
	);
}
