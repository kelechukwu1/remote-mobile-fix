import React from "react";
import SideBarNav from "./SideBarNav";

const Layout = ({ children }) => {
	return (
		<div className="md:h-[40rem] md:flex-row md:justify-start md:flex">
			<div className="sm:hidden">
				<SideBarNav />
			</div>
			<div className="bg-gray-50 p-4 text-black flex-1 h-[40rem]">
				{children}
			</div>
		</div>
	);
};

export default Layout;
