import Link from "next/link";
import React from "react";
import { BsTools } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { TbMessage2Pin } from "react-icons/tb";

const SideBarNav = () => {
	return (
		<section>
			<div className="bg-slate-900 h-screen pt-8 md:px-4 pb-4 justify-between flex-col  md:w-80">
				<div className=" text-white md:w-32 h-[40rem]">
					<Link href="/jobs">
						<div className="hover:bg-blue-900 w-full p-2 rounded md:px-4 flex transition-all duration-300">
							<div className="px-2">
								<BsTools />
							</div>
							<div className="hidden md:block">Jobs</div>
						</div>
					</Link>
					<Link href="/account">
						<div className="hover:bg-blue-900 w-full p-2 rounded md:px-4 flex transition-all duration-300">
							<div className="px-2">
								<TbMessage2Pin />
							</div>
							<div className="hidden md:block">Account</div>
						</div>
					</Link>
					<Link href={"logout"}>
						<div className="hover:bg-blue-900 w-full p-2 rounded md:px-4 flex transition-all duration-300">
							<div className="px-2">
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
							</div>
							<div className="hidden md:block">Logout</div>
						</div>
					</Link>

					<Link href={"/"}>
						<div className="hover:bg-blue-900 w-full p-2 rounded md:px-4 flex transition-all duration-300">
							<div className="px-2">
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
							</div>
							<div className="hidden md:block">Logout</div>
						</div>
					</Link>
					<Link href={"/"}>
						<div className="hover:bg-blue-900 w-full p-2 rounded md:px-4 flex transition-all duration-300">
							<div className="px-2">
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
							</div>
							<div className="hidden md:block">Logout</div>
						</div>
					</Link>
					<Link href={"/"}>
						<div className="hover:bg-blue-900 w-full p-2 rounded md:px-4 flex transition-all duration-300">
							<div className="px-2">
								<BiLogOut />
							</div>
							<div className="hidden md:block">Logout</div>
						</div>
					</Link>
				</div>

				<hr />
			</div>
		</section>
	);
};

export default SideBarNav;
