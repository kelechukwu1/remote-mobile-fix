"use client";
import Link from "next/link";
import Navbar from "./components/navbar";
import DashboardNav from "./components/dashboardNav";
import "./globals.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	const pathname = usePathname();
	return (
		<html lang="en">
			<body className={inter.className}>
				{pathname === "/dashboard" ? <DashboardNav /> : <Navbar />}
				{children}
				<footer className="my-10 items-center justify-center">
					<div className="text-center">Copyright &copy;Kelechukwu 2023</div>
					<div className="text-center text-green-500">
						<Link href="/about">About this project</Link>
					</div>
				</footer>
			</body>
		</html>
	);
}
