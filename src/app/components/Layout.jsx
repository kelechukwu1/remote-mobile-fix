import React from "react";
import SideBarNav from "./SideBarNav";

const Layout = ({ children }) => {
	return (
		<div className="h-[40rem] flex-row justify-start flex">
			<SideBarNav />
			<div className="bg-gray-50 p-4 text-black flex-1 h-[40rem]">
				{children}
			</div>
		</div>
	);
};

export default Layout;
