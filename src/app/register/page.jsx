"use client";

import { useEffect, useRef, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { IoImageOutline } from "react-icons/io5";
// import validations from "../components/validations";

const page = () => {
	const router = useRouter();
	//FUNCTIONS HERE TAKES CARE OF IMAGE FILE UPLOAD
	//input ref for file upload
	const inputRef = useRef(null);
	const [image, setImage] = useState("");
	const handleImageClick = () => {
		inputRef.current.click();
	};
	const handleImageChange = (e) => {
		const file = e.target.files[0];
		console.log(file);
		setImage(e.target.files[0]);
	};

	//FUNCTIONS BELOW TAKES CARE OF INPUT VALIDATIONS AND SUBMIT EVENTS
	//get form values
	const [values, setValues] = useState({
		businessName: "",
		businessAddress: "",
		businessCity: "",
		businessDescription: "",
	});

	//handleChange function
	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	//error state
	const [berror, setBError] = useState("");
	const [aerror, setAError] = useState("");
	const [cerror, setCError] = useState("");

	// //validation logic wey no gree work for handleSubmit function
	// const validateInput = () => {
	// 	//validate name input
	// 	const nameRe = /^[a-zA-Z]{2,15}$/;
	// 	if (!nameRe.test(values.businessName)) {
	// 		setBError("Name must be between 2 to 15 characters long");
	// 	}
	// 	//validate address input
	// 	const addressRe = /^[a-zA-Z]{2,30}\w$/;
	// 	if (!addressRe.test(values.businessAddress)) {
	// 		setAError("Enter a valid address");
	// 	}
	// 	//validate city input
	// 	const cityRe = /^[a-zA-Z]{2,10}\w$/;
	// 	if (!cityRe.test(values.businessCity)) {
	// 		setCError("Enter a valid city");
	// 	}
	// };

	//clear error function
	useEffect(() => {
		let timeoutId;

		if (aerror || berror || cerror) {
			timeoutId = setTimeout(() => {
				setAError("");
				setBError("");
				setCError("");
			}, 3000);
		}

		return () => {
			clearTimeout(timeoutId);
		};
	}, [aerror, berror, cerror]);

	const handleSubmit = (e) => {
		e.preventDefault();
		//validate name input
		const nameRe = /^[a-zA-Z]{2,15}$/;
		//address regular expresion
		const addressRe = /^[a-zA-Z]{2,30}\w$/;
		//validate city input
		const cityRe = /^[a-zA-Z]{2,10}\w$/;

		if (!nameRe.test(values.businessName)) {
			setBError("Name must be between 2 to 15 characters long");
		} else if (!addressRe.test(values.businessAddress)) {
			setAError("Enter a valid address");
		} else if (!cityRe.test(values.businessCity)) {
			setCError("Enter a valid city");
		} else {
			// setError(validations(values));
			//redirect the page
			router.push("/signUp");
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
					<form onSubmit={handleSubmit} className="flex flex-col">
						<div className="text-md">
							<div>
								<label>Business name</label>
								<span className="text-red-500">*</span>
							</div>
							<div>
								<input
									onChange={handleChange}
									type="text"
									value={values.businessName}
									name="businessName"
									placeholder="Kelvin's AutoFix"
									className="p-2 w-full md:text-2xl rounded-lg border border-gray-500 text-md"
								/>
							</div>
							{berror && <div className="text-red-500 text-sm">{berror}</div>}
						</div>
						<div className="text-md mt-4">
							<div>
								<label>Where's your business?</label>
								<span className="text-red-500">*</span>
							</div>
							<div className="w-full">
								<input
									onChange={handleChange}
									type="text"
									value={values.businessAddress}
									name="businessAddress"
									placeholder="Address"
									className="p-2 w-full md:text-2xl rounded-lg border border-gray-500 text-md"
								/>
							</div>
						</div>
						{aerror && <div className="text-red-500 text-sm">{aerror}</div>}
						<div className="text-md mt-4">
							<div>
								<label>City/Area</label>
								<span className="text-red-500">*</span>
							</div>
							<div className="w-full">
								<input
									onChange={handleChange}
									type="text"
									value={values.businessCity}
									name="businessCity"
									placeholder="City/Area"
									className="p-2 w-full md:text-2xl rounded-lg border border-gray-500 text-md"
								/>
							</div>
						</div>
						{cerror && <div className="text-red-500 text-sm">{cerror}</div>}
						<div className="text-md mt-4">
							<div>
								<label>Describe your service</label>
							</div>
							<div className="w-full">
								<textarea
									onChange={handleChange}
									name="businessService"
									placeholder="Enter your text..."
									className="p-2 h-28 w-full md:text-2xl rounded-lg border border-gray-500 text-md"
								></textarea>
							</div>
						</div>

						<div className="text-md">
							<div
								onClick={handleImageClick}
								className="h-40 mb-5 w-full justify-center items-center cursor-pointer rounded-lg flex bg-gray-50 border-2 border-dashed border-gray-500"
							>
								<div className=" justify-center items-center hover:opacity-80">
									<IoImageOutline className="w-20 h-20 hover:opacity-80" />
								</div>
								<input
									ref={inputRef}
									onChange={handleImageChange}
									type="file"
									// value={""}
									className="opacity-0 absolute w-full cursor-pointer h-40"
								/>
							</div>
							<div className="text-center mt-4">
								<label>Upload a profile picture here</label>
							</div>
							<div className="flex justify-center items-center">
								{image ? (
									<img
										src={URL.createObjectURL(image)}
										className="h-[200px] w-[200px] rounded-[100%]"
									/>
								) : null}
							</div>
						</div>
						<button className="text-white text-md bg-slate-900 hover:bg-slate-950 py-3 my-2 rounded-md text-center transition duration-500 cursor-pointer w-full">
							Proceed
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default page;
