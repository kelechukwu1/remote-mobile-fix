"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const DashboardNav = () => {
	const [open, setOpen] = useState(false);
	const router = useRouter();

	const navLinks = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "Logout",
			link: "login",
		},
	];
	return (
		<>
			<header>
				<div className="md:flex md:px-10 md:pr-10 justify-between items-center shadow">
					<div className="flex justify-between items-center p-4 ">
						<div>
							<Link
								href="/"
								onClick={() => {
									open ? setOpen(!open) : !open;
								}}
							>
								<div>
									<span className="text-green-800 font-bold">remote</span>
									<span className="text-blue-800 font-bold">MobileFix</span>
								</div>
							</Link>
						</div>
						<div
							className="md:hidden cursor-pointer"
							onClick={() => {
								setOpen(!open);
							}}
						>
							{!open ? (
								<IoMenuOutline className="w-6 h-6" />
							) : (
								<IoCloseOutline className="w-6 h-6" />
							)}
						</div>
					</div>
					<div
						className={`hidden md:flex md:items-center md:justify-between pb-5 md:pb-0  md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
							!open ? "hidden" : "top-[-490px] md:opacity-100 opacity-100"
						}`}
					>
						<div
							onClick={() => {
								setOpen(!open);
							}}
							className="md:flex mx-2"
						>
							{navLinks.map(({ link, name }) => (
								<Link href={link} key={name} className="mx-5">
									<div
										className={`md:px-5 md:py-2 my-5 md:my-0 bg-blue-800 hover:bg-blue-900 text-white rounded-sm transition duration-500 ${
											router.pathname === link ? "text-red-500" : ""
										}`}
									>
										{name}
									</div>
								</Link>
							))}
						</div>
					</div>
					<div className={`${!open ? "hidden" : "mobileNav"}`}>
						<div
							onClick={() => {
								setOpen(!open);
							}}
							className="w-full my-5 transition-all duration-500"
						>
							{navLinks.map(({ link, name }) => (
								<Link href={link} key={name}>
									<div
										className={`md:px-4 md:my-0 hover:bg-gray-50 px-6 py-2 rounded-sm ${
											router.pathname === link ? "text-red-500" : ""
										}`}
									>
										{name}
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default DashboardNav;
