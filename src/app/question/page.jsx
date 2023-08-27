"use client";

import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { db } from "../config/firebase";
import { updateDoc, doc } from "firebase/firestore";
const page = () => {
	//init nextJs router navigation
	const router = useRouter();

	//get LS value
	let id;
	if (typeof window !== "undefined") {
		id = JSON.parse(localStorage.getItem("userInfo"));
	}

	// create state for the input fields
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	// create state for the input field errors
	const [emailErr, setEmailErr] = useState("");
	const [phoneErr, setPhoneErr] = useState("");

	//clear input error function
	useEffect(() => {
		let timeoutId;

		if (setEmailErr || setPhoneErr) {
			timeoutId = setTimeout(() => {
				setEmailErr("");
				setPhoneErr("");
			}, 3000);
		}

		return () => {
			clearTimeout(timeoutId);
		};
	}, [emailErr, phoneErr]);
	//handleSubmit function
	const handleSubmit = async (e) => {
		e.preventDefault();
		const emailRegEx =
			/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
		if (!emailRegEx.test(email)) {
			setEmailErr("Please enter a valid email");
		} else if (phone === "") {
			setPhoneErr("Field must not be empty");
		} else {
			try {
				//add data to firebase
				await updateDoc(
					doc(db, "user", id),
					{
						email: email,
						phone: phone,
					},
					{ merge: true }
				);
				//redirect page
				router.push("/problemDescription");
			} catch (err) {
				console.log(err.message);
			}
		}
	};

	return (
		<div className="bg-gray-100 h-screen lg:bg-gray-50 py-5 md:px-36 lg:px-80 justify-center items-center">
			<div
				className="mx-6 mb-5 w-14 py-2 rounded-md cursor-pointer bg-slate-900 hover:bg-slate-950 transition duration-500 text-white"
				onClick={() => router.push("/")}
			>
				<BsArrowLeft className="w-6 h-6 ml-4" />
			</div>
			<div className="mx-6 gap-4">
				<form onSubmit={handleSubmit}>
					<div className="text-2xl font-semibold mb-5 text-center">
						We would like to contact you
					</div>

					<div className="text-xl mb-3">
						<div>Enter your email</div>
						<input
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							type="text"
							placeholder="test@test.com"
							className="w-full p-3 rounded-lg text-xl"
						/>
						{emailErr && (
							<div className="pt-2 text-red-500 text-sm">{emailErr}</div>
						)}
					</div>
					<div className="text-xl mb-3">
						<div>Enter your phone number</div>
						<input
							onChange={(e) => {
								setPhone(e.target.value);
							}}
							type="text"
							placeholder="+234.........."
							className="w-full p-3 rounded-lg text-xl"
						/>
						{phoneErr && (
							<div className="pt-2 text-red-500 text-sm">{phoneErr}</div>
						)}
					</div>
					<div className="flex justify-between mt-4">
						<div>
							<Link href={"/"}>
								<div className="bg-gray-300 hover:bg-gray-500 text-xl p-2 rounded transition duration-500">
									Go Back
								</div>
							</Link>
						</div>
						<div>
							<div className="bg-slate-800 hover:bg-slate-950 text-white text-xl p-2 rounded transition duration-500">
								<button>Continue</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default page;
