"use client";

import { useEffect, useRef, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { IoImageOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { storage } from "../config/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { setNewDocId } from "../store";

// import validations from "../components/validations";

const page = () => {
	//init next router
	const router = useRouter();
	//init rtk dispatch method
	const dispatch = useDispatch();
	//firestore repairers ref
	const initialRepairersRef = collection(db, "repairers");

	//FUNCTIONS HERE TAKES CARE OF IMAGE FILE UPLOAD
	//input ref for file upload
	const inputRef = useRef(null);
	const [image, setImage] = useState("");

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		setImage(file);
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

	const handleSubmit = async (e) => {
		e.preventDefault();
		//add document to firebase
		const newDocRef = await addDoc(initialRepairersRef, {
			businessName: values.businessName,
			businessAddress: values.businessAddress,
			businessCity: values.businessCity,
			businessDescription: values.businessDescription,
		});
		// const newDocId = newDocRef.id;

		//upload selected profile picture to firebase cloud storage
		const imageRef = await ref(storage, `images/${image.name}`);
		uploadBytes(imageRef, image);
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
			//dispatch to rtk store
			dispatch(setNewDocId(newDocRef.id));
		}
	};

	return (
		<div className="py-5 bg-gray-100 lg:bg-gray-50 md:px-36 lg:px-80">
			<div
				className="py-2 mx-6 mb-5 text-white transition duration-500 rounded-md cursor-pointer w-14 bg-slate-900 hover:bg-slate-950"
				onClick={() => router.push("/")}
			>
				<BsArrowLeft className="w-6 h-6 ml-4" />
			</div>
			<div className="items-center px-5 py-10 mx-5 bg-white shadow-lg rounded-2xl">
				<div>
					<form onSubmit={handleSubmit} className="flex flex-col">
						<div className="text-md">
							<div>
								<label>Business name</label>
								<span className="text-red-500 text-sm">*</span>
							</div>
							<div>
								<input
									onChange={handleChange}
									type="text"
									value={values.businessName}
									name="businessName"
									placeholder="Kelvin's AutoFix"
									className="w-full p-2 border border-gray-500 rounded-lg md:text-2xl text-md"
								/>
							</div>
							{berror && <div className="text-sm text-red-500">{berror}</div>}
						</div>
						<div className="mt-4 text-md">
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
									className="w-full p-2 border border-gray-500 rounded-lg md:text-2xl text-md"
								/>
							</div>
						</div>
						{aerror && <div className="text-sm text-red-500">{aerror}</div>}
						<div className="mt-4 text-md">
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
									className="w-full p-2 border border-gray-500 rounded-lg md:text-2xl text-md"
								/>
							</div>
						</div>
						{cerror && <div className="text-sm text-red-500">{cerror}</div>}
						<div className="mt-4 text-md">
							<div>
								<label>Describe your service</label>
							</div>
							<div className="w-full">
								<textarea
									onChange={handleChange}
									value={values.businessDescription}
									name="businessDescription"
									placeholder="Enter your text..."
									className="w-full p-2 border border-gray-500 rounded-lg h-28 md:text-2xl text-md"
								></textarea>
							</div>
						</div>

						<div className="text-md">
							<div className="flex items-center justify-center w-full h-40 mb-5 border-2 border-gray-500 border-dashed rounded-lg cursor-pointer bg-gray-50">
								<div className="items-center justify-center hover:opacity-80">
									<IoImageOutline className="w-20 h-20 hover:opacity-80" />
								</div>
								<input
									ref={inputRef}
									onChange={handleImageChange}
									type="file"
									// value={""}
									className="absolute w-full h-40 opacity-0 cursor-pointer"
								/>
							</div>
							<div className="mt-4 text-center">
								<label>Upload a profile picture here</label>
							</div>
							<div className="flex items-center justify-center">
								{image ? (
									<img
										src={URL.createObjectURL(image)}
										className="h-[200px] w-[200px] rounded-[100%]"
									/>
								) : null}
							</div>
						</div>
						<button
							className="w-full py-3 my-2 text-center text-white transition duration-500 rounded-md cursor-pointer text-md bg-slate-900 hover:bg-slate-950"
							type="submit"
						>
							Proceed
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default page;
