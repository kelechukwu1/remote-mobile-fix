import Link from "next/link";
import SideBarNav from "../components/SideBarNav";

const page = () => {
	return (
		<div className="flex">
			<div>
				<SideBarNav />
			</div>
			<div className="mx-5">welcome to ur dashboard</div>
		</div>
	);
};
export default page;
