"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
	const [open, setOpen] = useState(false);
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
						className={`md:flex md:items-center md:justify-between pb-12 md:pb-0  md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
							!open ? "hidden" : "top-[-490px] md:opacity-100 opacity-100"
						}`}
					>
						<div
							onClick={() => {
								setOpen(!open);
							}}
							className="md:flex"
						>
							<div className="md:px-4 my-5 md:my-0">
								<Link href="/">Home</Link>
							</div>
							<div className="md:px-4 my-5 md:my-0">
								<Link href="/register">Register</Link>
							</div>
							<div className="md:px-4 my-5 md:my-0">
								<Link href="/login">Login</Link>
							</div>
							<div className="md:px-4 my-5 md:my-0">
								<Link href="/about">About</Link>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;
// import { MenuIcon, XIcon } from "@heroicons/react/outline";
// <XIcon className="h-6 w-6" />
// <MenuIcon className="h-6 w-6" />

// import { ReactComponent as CloseOutline } from "../../../public/assets/close-outline.svg";
// import { ReactComponent as MenuOutline } from "../../../public/assets/menu-outline.svg";
/*  <Link className="p-4" href="/about/5">
      AboutID
    </Link> */
// <ion-icon name="menu"></ion-icon>
// <ion-icon name="close"></ion-icon>
