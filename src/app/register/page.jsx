import React from "react";
import { Link } from "next/link";

const register = () => {
	return (
		<div className=" justify-center items-center">
			<form>
				<div className="mx-10">
					<div>
						<label>Enter your business name</label>
					</div>
					<div className="">
						<input
							type="text"
							placeholder="Kelvin's AutoFix"
							className="p-2 w-full rounded-sm my-2"
						/>
					</div>
				</div>
				{/* <div className="mx-10">
					<div>
						<label>What is your business type?</label>
					</div>
					<div>
						<select className="p-2 w-full rounded-sm my-2" value={"state"}>
							<option>Registered Company</option>
							<option>Private Person</option>
						</select>
					</div>
				</div> */}
				<div className="mx-10">
					<div>
						<label>Where's your business located?</label>
					</div>
					<div className="w-full">
						<input
							type="text"
							placeholder="Address"
							className="p-2 w-full rounded-sm my-2"
						/>
					</div>
				</div>
				<div className="mx-10">
					<div className="w-full">
						<input
							type="text"
							placeholder="City/Area"
							className="p-2 w-full rounded-sm my-2"
						/>
					</div>
					{/* <div className="w-full">
						<label
							htmlFor="flight-type"
							className=" mb-2 text-white md:text-2xl"
						>
							Select state
						</label>
						<select className="p-2 w-full rounded-sm my-2" value={"state"}>
							<option>Imo state</option>
							<option>Imo state</option>
						</select>
					</div> */}
				</div>
				<Link href={"/"} className="mx-10 my-5 mb-10">
					<div className="bg-blue-600 w-full p-2 rounded-sm">Continue</div>
				</Link>
			</form>

			<hr className="m-4" />
		</div>
	);
};

export default register;
