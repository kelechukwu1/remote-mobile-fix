"use client";

import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoImageOutline } from "react-icons/io5";

const page = () => {
	const router = useRouter();
	const [businessName, setBusinessName] = useState("");
	const [businessAddress, setBusinessAddress] = useState("");
	const [city, setCity] = useState("");
	const [service, setService] = useState("");

	const handleSubmit = (e) => {
		if (
			businessName === "" ||
			businessAddress === "" ||
			city === "" ||
			service === ""
		) {
			//validate the input fields here
			window.alert("fill all fields");
		} else {
			//submit form
			e.preventDefault();
			router.push("/dashboard");
		}
	};

	return (
		<div className="bg-gray-100 lg:bg-gray-50 py-5 md:px-36 lg:px-80">
			<div
				className="mx-6 mb-5 w-14 py-2 rounded-md cursor-pointer bg-slate-900 hover:bg-slate-950 transition duration-500 text-white"
				onClick={() => router.push("/")}
			>
				<BsArrowLeft className="w-6 h-6 ml-4" />
			</div>
			<div className="bg-white rounded-2xl shadow-lg mx-5 px-5 items-center py-10">
				<div>
					<form onSubmit={handleSubmit} className="flex flex-col gap-4">
						<div className="text-xl">
							<div>
								<label>Business name</label>
								<span className="text-red-500">*</span>
							</div>
							<div>
								<input
									onChange={(e) => setBusinessName(e.target.value)}
									type="text"
									placeholder="Kelvin's AutoFix"
									className="p-2 w-full md:text-2xl rounded-lg border border-gray-500 text-xl"
								/>
							</div>
						</div>
						<div className="text-xl">
							<div>
								<label>Where's your business?</label>
								<span className="text-red-500">*</span>
							</div>
							<div className="w-full">
								<input
									onChange={(e) => setBusinessAddress(e.target.value)}
									type="text"
									placeholder="Address"
									className="p-2 w-full md:text-2xl rounded-lg border border-gray-500 text-xl"
								/>
							</div>
						</div>
						<div className="text-xl">
							<div>
								<label>City/Area</label>
								<span className="text-red-500">*</span>
							</div>
							<div className="w-full">
								<input
									onChange={(e) => setCity(e.target.value)}
									type="text"
									placeholder="City/Area"
									className="p-2 w-full md:text-2xl rounded-lg border border-gray-500 text-xl"
								/>
							</div>
						</div>
						<div className="text-xl">
							<div>
								<label>Describe your service</label>
								<span className="text-red-500">*</span>
							</div>
							<div className="w-full">
								<textarea
									onChange={(e) => setService(e.target.value)}
									placeholder="Enter your text..."
									className="p-2 h-28 w-full md:text-2xl rounded-lg border border-gray-500 text-xl"
								></textarea>
							</div>
						</div>
						<div className="text-xl">
							<div>
								<label>Your qualification(s)</label>
							</div>
							<div className="w-full">
								<textarea
									placeholder="e.g. Member of Phone repairers association"
									className="p-2 h-28 w-full md:text-2xl rounded-lg border border-gray-500 text-xl"
								></textarea>
							</div>
						</div>

						<div className="text-xl">
							<div className="h-40 w-full justify-center items-center cursor-pointer rounded-lg flex bg-gray-50">
								<div className=" justify-center items-center">
									<IoImageOutline className="w-20 h-20" />
								</div>
							</div>
							<div className="text-center mt-4">
								<label>Upload a profile picture here</label>
							</div>
						</div>
						<button className="text-white text-xl bg-slate-900 hover:bg-slate-950 py-3 my-2 rounded-md text-center transition duration-500 cursor-pointer w-full">
							Proceed
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default page;
