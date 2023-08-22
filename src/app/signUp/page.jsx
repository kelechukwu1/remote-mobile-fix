"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "../config/firebase";
import { updateDoc, doc } from "firebase/firestore";
import { auth } from "../config/firebase";
import { useSelector } from "react-redux";
import { createUserWithEmailAndPassword } from "firebase/auth";

const page = () => {
	//init next router
	const router = useRouter();
	//get rtk value
	const userId = useSelector((state) => state.user.value);

	//firestore repairers ref
	const initialRepairersRef = doc(db, "repairers", userId);

	//FUNCTIONS BELOW TAKES CARE OF INPUT VALIDATIONS AND SUBMIT EVENTS
	//get form values
	const [values, setValues] = useState({
		email: "",
		confirmEmail: "",
		firstName: "",
		lastName: "",
		userName: "",
		phone: "",
		confirmPhone: "",
		password: "",
	});
	//seperate checkbox state
	const [checked, setChecked] = useState(false);

	//handleChange function
	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	//error state
	// let error = {};
	const [emailErr, setEmailErr] = useState("");
	const [confirmEmailErr, setConfirmEmailErr] = useState("");
	const [firstNameErr, setFirstNameErr] = useState("");
	const [lastNameErr, setLastNameErr] = useState("");
	const [userNameErr, setUserNameErr] = useState("");
	const [phoneErr, setPhoneErr] = useState("");
	const [confirmPhoneErr, setConfirmPhoneErr] = useState("");
	const [PasswordErr, setPasswordErr] = useState("");
	const [isCheckedErr, setIsCheckedErr] = useState("");

	//clear error function
	useEffect(() => {
		let timeoutId;

		if (
			emailErr ||
			confirmEmailErr ||
			firstNameErr ||
			lastNameErr ||
			userNameErr ||
			phoneErr ||
			confirmPhoneErr ||
			PasswordErr ||
			isCheckedErr
		) {
			timeoutId = setTimeout(() => {
				setEmailErr("");
				setConfirmEmailErr("");
				setFirstNameErr("");
				setLastNameErr("");
				setUserNameErr("");
				setPhoneErr("");
				setConfirmPhoneErr("");
				setPasswordErr("");
				setIsCheckedErr("");
			}, 3000);
		}

		return () => {
			clearTimeout(timeoutId);
		};
	}, [
		emailErr,
		confirmEmailErr,
		firstNameErr,
		lastNameErr,
		userNameErr,
		phoneErr,
		confirmPhoneErr,
		PasswordErr,
		isCheckedErr,
	]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		//email regex
		const emailRegEx =
			/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
		// //name input regEx
		// const nameRe = /^[a-zA-Z]{2,15}$/;
		// //address input regEx
		// const addressRe = /^[a-zA-Z]{2,30}\w$/;
		// //city input regEx
		// const cityRe = /^[a-zA-Z]{2,10}\w$/;

		if (!emailRegEx.test(values.email)) {
			setEmailErr("Input a valid email");
		} else if (values.email != values.confirmEmail) {
			setConfirmEmailErr("Email must match");
		} else if (values.firstName === "") {
			setFirstNameErr("Invalid field");
		} else if (values.lastName === "") {
			setLastNameErr("Invalid field");
		} else if (values.userName === "") {
			setUserNameErr("Username must not be empty");
		} else if (values.userName.length < 5) {
			setUserNameErr("Username must not be less than 5 char");
		} else if (values.phone === "") {
			setPhoneErr("Invalid field");
		} else if (values.confirmPhone === "") {
			setConfirmPhoneErr("Invalid field");
		} else if (values.confirmPhone != values.phone) {
			setConfirmPhoneErr("Phone must match");
		} else if (values.password === "") {
			setPasswordErr("Password must not be empty");
		} else if (values.password < 6) {
			setPasswordErr("Password must be up to 6 characters");
		} else if (values.isChecked === false) {
			setIsCheckedErr("You have not accepted our terms of service");
		} else {
			//redirect the page
			checked && router.push("/dashboard");
			//merge data to firebase id=== rtk id
			await updateDoc(
				initialRepairersRef,
				{
					email: values.email,
					firstName: values.firstName,
					lastName: values.lastName,
					userName: values.userName,
					phone: values.phone,
					password: values.password,
				},
				{ merge: true }
			);
			//implement firebase auth sign up
			try {
				await createUserWithEmailAndPassword(
					auth,
					values.email,
					values.password
				);
			} catch (err) {
				console.error(err.message);
			}
		}
	};
	return (
		<>
			<div className="py-5 bg-gray-100 lg:bg-gray-50 md:px-36 lg:px-80">
				<div className="items-center px-5 py-10 mx-5 bg-white shadow-lg rounded-2xl">
					<div className="text-3xl">The easiest way to find new customers</div>
					<form onSubmit={handleSubmit}>
						<div className="my-5 text-xl text-center">Setup your account</div>
						<div className="mb-5 ">
							<label className="text-md">Email address</label>
							<input
								onChange={handleChange}
								name="email"
								value={values.email}
								type="text"
								className="w-full p-2 border border-gray-500 rounded-lg text-md"
								placeholder="Enter your email address"
							/>
							{emailErr && (
								<div className="text-sm text-red-500">{emailErr}</div>
							)}
						</div>
						<div className="mb-5 ">
							<label className="text-md">Confirm email address</label>
							<input
								onChange={handleChange}
								name="confirmEmail"
								value={values.confirmEmail}
								type="text"
								className="w-full p-2 border border-gray-500 rounded-lg text-md"
								placeholder="Enter your email address"
							/>
							{confirmEmailErr && (
								<div className="text-sm text-red-500">{confirmEmailErr}</div>
							)}
						</div>

						<div className="mb-5 ">
							<label className="text-md">Name</label>
							<div className="flex">
								<div className="mr-1">
									<input
										onChange={handleChange}
										name="firstName"
										value={values.firstName}
										type="text"
										className="w-full p-2 border border-gray-500 rounded-lg text-md"
										placeholder="Firstname"
									/>
									{firstNameErr && (
										<div className="text-sm text-red-500">{firstNameErr}</div>
									)}
								</div>
								<div className="ml-1">
									<input
										onChange={handleChange}
										name="lastName"
										value={values.lastName}
										type="text"
										className="w-full p-2 border border-gray-500 rounded-lg text-md"
										placeholder="Lastname"
									/>
									{lastNameErr && (
										<div className="text-sm text-red-500">{lastNameErr}</div>
									)}
								</div>
							</div>
						</div>

						<div className="mb-5 ">
							<label className="text-md">Username</label>
							<input
								onChange={handleChange}
								name="userName"
								value={values.userName}
								type="text"
								className="w-full p-2 border border-gray-500 rounded-lg text-md"
								placeholder=""
							/>
							{userNameErr && (
								<div className="text-sm text-red-500">{userNameErr}</div>
							)}
						</div>

						<div className="mb-5 ">
							<label className="text-md">Phone</label>
							<div className="flex">
								<div className="mr-1 w-[1/2]">
									<input
										onChange={handleChange}
										name="phone"
										value={values.phone}
										type="text"
										className="w-full p-2 border border-gray-500 rounded-lg text-md"
										placeholder="phone"
									/>
									{phoneErr && (
										<div className="text-sm text-red-500">{phoneErr}</div>
									)}
								</div>
								<div className="ml-1 w-[1/2]">
									<input
										onChange={handleChange}
										name="confirmPhone"
										value={values.confirmPhone}
										type="text"
										className="w-full p-2 border border-gray-500 rounded-lg text-md"
										placeholder="confirm phone"
									/>
									{confirmPhoneErr && (
										<div className="text-sm text-red-500">
											{confirmPhoneErr}
										</div>
									)}
								</div>
							</div>
						</div>
						<div className="mb-5 ">
							<label className="text-md">Password</label>
							<input
								onChange={handleChange}
								name="password"
								value={values.password}
								type="password"
								className="w-full p-2 border border-gray-500 rounded-lg text-md"
								placeholder="Password"
							/>
							{PasswordErr && (
								<div className="text-sm text-red-500">{PasswordErr}</div>
							)}
						</div>

						<div className="flex items-center ">
							<input
								onChange={(e) => {
									setChecked(e.target.checked);
								}}
								type="checkbox"
								name="checkbox"
								className="w-6 h-6 mr-3 border-2 cursor-pointer rounded-3xl"
							/>
							<label className="text-md">
								I agree to the{" "}
								<span className="text-blue-500">Terms of service</span>
							</label>
						</div>
						{isCheckedErr && (
							<div className="text-sm text-red-500">{isCheckedErr}</div>
						)}

						<button
							className="w-full p-3 mt-5 text-white transition duration-500 rounded-lg text-md bg-slate-900 hover:bg-slate-950"
							type="submit"
						>
							Register
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default page;
