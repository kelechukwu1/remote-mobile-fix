"use client";
import Link from "next/link";
import { useState } from "react";

const DashboardNav = () => {
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
									<span className="text-green-600 font-bold">remote</span>
									<span className="text-blue-400 font-bold">MobileFix</span>
								</div>
							</Link>
						</div>
						<div
							className="md:hidden cursor-pointer"
							onClick={() => {
								console.log("clicked");
								setOpen(!open);
							}}
						>
							{!open ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
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
							className="md:flex "
						>
							<div className="md:px-4 my-5 md:my-0">
								<Link href="/">Home</Link>
							</div>
							<div className="md:px-4 my-5 md:my-0">
								<Link href="/register">Jobs</Link>
							</div>
							<div className="md:px-4 my-5 md:my-0">
								<Link href="/login">Logout</Link>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default DashboardNav;
