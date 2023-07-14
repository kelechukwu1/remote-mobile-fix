"use client";
import Link from "next/link";
import { useState } from "react";
// import { MenuIcon } from "react-heroicons-v2";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
	const [open, setOpen] = useState(true);
	return (
		<>
			<header>
				<div className="md:flex md:px-10 md:pr-10 justify-between items-center shadow">
					<div className="flex justify-between md:items-center p-4 ">
						<Link
							href="/"
							onClick={() => {
								!open ? setOpen(!open) : open;
							}}
						>
							<div>
								<span className="text-green-900 font-bold">remote</span>
								<span className="text-blue-900 font-bold">MobileFix</span>
							</div>
						</Link>
						<div
							className="md:hidden cursor-pointer"
							onClick={() => setOpen(!open)}
						>
							{open ? (
								<MenuIcon className="h-6 w-6" />
							) : (
								<XIcon className="h-6 w-6" />
							)}
						</div>
					</div>
					<div
						className={`md:flex md:items-center md:justify-between pb-12 md:pb-0 bg-white md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
							open ? "hidden" : "top-[-490px] md:opacity-100 opacity-100"
						}`}
					>
						<div
							onClick={() => {
								!open ? setOpen(!open) : open;
							}}
							className="md:flex "
						>
							<div className="md:px-4 my-5 md:my-0">
								<Link href="/">Home</Link>
							</div>
							<div className="md:px-4 my-5 md:my-0">
								<Link href="/contact">Contact</Link>
							</div>
							<div className="md:px-4 my-5 md:my-0">
								<Link href="/about">About</Link>
							</div>
							{/* <Link className="p-4" href="/about/5">
					AboutID
				</Link> */}
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;
