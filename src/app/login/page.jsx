"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// import { auth } from "../config/firebase";
// import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const page = () => {
	const navigate = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loginErr, setLoginErr] = useState("");

	const loginWithEmailAndPassword = async () => {
		// try {
		// 	await signInWithEmailAndPassword(auth, email, password);
		// 	navigate("/FlightForm");
		// 	console.log(email, "logged in");
		// } catch (err) {
		// 	setLoginErr(err.message);
		navigate.push("dashboard");
		// }
	};

	// const loginWithGoogle = async () => {
	// 	try {
	// 		await loginWithGoogle(auth, signInWithPopup);
	// 		navigate("/FlightForm");
	// 		console.log(email, "logged in with google");
	// 	} catch (err) {
	// 		setLoginErr(err.message);
	// 	}
	// };

	// useEffect(() => {
	// 	let timeoutId;

	// 	if (loginErr) {
	// 		timeoutId = setTimeout(() => {
	// 			setLoginErr("");
	// 		}, 3000);
	// 	}

	// 	return () => {
	// 		clearTimeout(timeoutId);
	// 	};
	// }, [loginErr]);
	return (
		<section className="bg-gray-100 py-10">
			<div className="bg-white rounded-2xl shadow-lg mx-5 px-5 text-center items-center py-10">
				<div className="font-bold text-3xl md:text-5xl text-slate-900">
					Login
				</div>
				<div className="mt-4 text-slate-900 text-2xl font-bold md:text-2xl">
					We're happy to have you back!
				</div>

				<form className="flex flex-col gap-4">
					<input
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						className="p-3 md:text-2xl mt-8 rounded-lg border border-gray-500 text-xl"
						type="email"
						name="email"
						placeholder="Email"
					/>
					<div>
						<input
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							className="w-full md:text-2xl p-3 rounded-lg border border-gray-500 text-xl"
							type="password"
							name="password"
							placeholder="Password"
						/>
						{/* eye svg logo here */}
					</div>
					<Link href="">
						<div className="bg-slate-900 hover:bg-slate-950 text-white md:text-2xl text-xl font-semibold py-3 rounded md:hover:scale-105 duration-300">
							Login
						</div>
					</Link>
					{/* {loginErr && <div className="text-red-500 text-xl">{loginErr}</div>} */}
				</form>
				<div className="grid grid-cols-3 items-center justify-center mt-10 text-gray-500">
					<hr className="border-gray-500" />
					<div className="text-center text-xl">OR</div>
					<hr className="border-gray-500" />
				</div>
				<div>
					<Link href={""}>
						<div className="w-full py-3 bg-slate-200 text-xl md:text-2xl rounded border justify-center items-center mt-5 hover:scale-105 duration-300">
							Login with Google
						</div>
					</Link>
				</div>
				<Link href={""}>
					<div className="text-xl md:text-2xl mt-3 border-b py-6 border-gray-500">
						forgot your password?
					</div>
				</Link>
				<div className="flex text-xl md:text-2xl justify-between items-center mt-5">
					<div>Don't have an account?</div>
					<Link href={"/register"}>
						<div className="py-2 md:text-2xl px-4 bg-slate-200 border rounded hover:scale-110 duration-300">
							Register
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
};
export default page;

// import React, { useState } from 'react';

// function DateInput() {
//   const [dateString, setDateString] = useState('');
//   const [dateObj, setDateObj] = useState(null);

//   const handleInputChange = (event) => {
//     setDateString(event.target.value);
//   };

//   const handleConvertDate = () => {
//     const parsedDate = new Date(dateString);

//     if (isNaN(parsedDate)) {
//       setDateObj(null); // Parsing failed, set dateObj to null
//     } else {
//       setDateObj(parsedDate); // Parsing successful, update dateObj
//     }
//   };

//   return (
//     <div>
//       <input type="text" value={dateString} onChange={handleInputChange} />
//       <button onClick={handleConvertDate}>Convert</button>
//       {dateObj && <p>Converted Date: {dateObj.toString()}</p>}
//     </div>
//   );
// }

// export default DateInput;

// import React, { useState } from 'react';

// function DateInput() {
//   const [dateString, setDateString] = useState('');
//   const [isValid, setIsValid] = useState(true);

//   const handleInputChange = (event) => {
//     const inputDate = new Date(event.target.value);
//     const currentDate = new Date();

//     if (inputDate > currentDate) {
//       setIsValid(false);
//     } else {
//       setIsValid(true);
//       setDateString(event.target.value);
//     }
//   };

//   return (
//     <div>
//       <input type="date" value={dateString} onChange={handleInputChange} />
//       {!isValid && <p>Date should not be later than today.</p>}
//     </div>
//   );
// }

// export default DateInput;

// import React, { useState } from 'react';

// function DateInput() {
//   const [dateString, setDateString] = useState('');
//   const [isValid, setIsValid] = useState(true);

//   const handleInputChange = (event) => {
//     const inputDate = new Date(event.target.value);
//     const currentDate = new Date();

//     if (inputDate > currentDate) {
//       setIsValid(false);
//     } else {
//       setIsValid(true);
//       setDateString(event.target.value);
//     }
//   };

//   const formatDate = (dateString) => {
//     const options = { weekday: 'long', month: 'long', day: 'numeric' };
//     const date = new Date(dateString);

//     return date.toLocaleDateString('en-US', options);
//   };

//   return (
//     <div>
//       <input type="date" value={dateString} onChange={handleInputChange} />
//       {!isValid && <p>Date should not be later than today.</p>}
//       {dateString && isValid && <p>Selected Date: {formatDate(dateString)}</p>}
//     </div>
//   );
// }

// export default DateInput;
