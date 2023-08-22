"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { db } from "./config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { setNewDocId } from "./store";

export default function Home() {
	//init next router
	const router = useRouter();
	//init rtk dispatch method
	const dispatch = useDispatch();

	//firestore repairers ref
	const initialUserRef = collection(db, "user");
	//search state
	const [input, setInput] = useState("");
	const [inputerr, setInputErr] = useState("");

	//clear input error function
	useEffect(() => {
		let timeoutId;

		if (inputerr) {
			timeoutId = setTimeout(() => {
				setInputErr("");
			}, 3000);
		}

		return () => {
			clearTimeout(timeoutId);
		};
	}, [inputerr]);

	//handle submit function
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (input === "") {
			setInputErr("Field must not be empty");
		} else {
			router.push("question");
			//add document to firebase
			const newDocRef = await addDoc(initialUserRef, {
				userLocation: input,
			});
			//dispatch to rtk store
			dispatch(setNewUserId(newDocRef.id));
		}
	};
	return (
		<main>
			<form onSubmit={handleSubmit}>
				<div className="flex items-center justify-between w-full shadow">
					<div
						style={{
							backgroundImage: `url(/images/phone.webp)`,
						}}
						className="items-center w-full text-center bg-no-repeat bg-cover"
					>
						<div className="bg-black bg-opacity-70 py-20 px-5 md:px-[10rem] lg:px-[15rem]">
							<h1 className="mb-5 text-4xl text-blue-50">
								Find Phone Repairers Around Your Location
							</h1>
							<h1 className="mb-3 text-xl text-blue-50">
								Where do you need the phone repairer?
							</h1>
							<div className="px-10 mt-8 md:flex">
								<div className="w-full mb-3">
									<input
										onChange={(e) => setInput(e.target.value)}
										type="text"
										className="w-full p-3 px-4 text-xl bg-blue-100 rounded-sm"
										placeholder="Enter your area"
									/>
									{inputerr && (
										<div className="pt-2 text-sm text-red-500">{inputerr}</div>
									)}
								</div>
								<div className="sm:w-full md:w-48">
									<button className="w-full py-3 text-xl text-center duration-300 ease-in-out bg-blue-600 rounded-sm cursor-pointer text-blue-50 hover:bg-blue-800">
										Go
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="px-10 py-10 text-center shadow text-md ">
					<h1> Do you provide Phone Repair?</h1>
					<span>
						<Link className="text-blue-600" href="/register">
							Register your business
						</Link>{" "}
						for free to get phone repair jobs near you.
					</span>
				</div>
			</form>
		</main>
	);
}
