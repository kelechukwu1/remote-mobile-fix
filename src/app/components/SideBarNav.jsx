import Link from "next/link";
import React from "react";
import { BsTools } from "react-icons/bs";
import { TbMessage2Pin } from "react-icons/tb";
import { IoHomeOutline, IoQrCodeOutline } from "react-icons/io5";

const SideBarNav = () => {
	return (
		<section>
			<div className="bg-slate-900 h-[40rem] lg:w-[11rem] pt-8 md:px-4 justify-between flex-col">
				<div className="text-white">
					<Link href="/dashboard">
						<div className="hover:bg-blue-900 w-ful p-2 rounded items-center md:px-4 flex transition-all duration-300">
							<div className="px-2">
								<IoHomeOutline />
							</div>
							<div className="hidden md:block">Home</div>
						</div>
					</Link>
					<Link href="/dashboard/requests">
						<div className="hover:bg-blue-900 w-full p-2 rounded items-center md:px-4 flex transition-all duration-300">
							<div className="px-2">
								<TbMessage2Pin />
							</div>
							<div className="hidden md:block">Jobs</div>
						</div>
					</Link>

					<Link href="/dashboard/settings">
						<div className="hover:bg-blue-900 w-full p-2 rounded items-center md:px-4 flex transition-all duration-300">
							<div className="px-2">
								<BsTools />
							</div>
							<div className="hidden md:block">Settings</div>
						</div>
					</Link>
					<Link href={"/dashboard/account"}>
						<div className="hover:bg-blue-900 w-full p-2 rounded items-center md:px-4 flex transition-all duration-300">
							<div className="px-2">
								<IoQrCodeOutline />
							</div>
							<div className="hidden md:block">Accounts</div>
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default SideBarNav;
