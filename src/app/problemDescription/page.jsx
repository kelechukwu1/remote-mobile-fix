"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { IoImageOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addUserInfo } from "../store";
import { storage } from "../config/firebase";
import { ref, uploadBytes } from "firebase/storage";

const page = () => {
	//init nextJs navigation
	const router = useRouter();
	//init rtk dispatch method
	const dispatch = useDispatch();

	//input ref for file upload
	const inputRef = useRef(null);
	const [image, setImage] = useState("");
	//create state for client problem description
	const [description, setDescription] = useState("");
	const [descriptionErr, setDescriptionErr] = useState("");
	//handleImageChange function
	const handleImageChange = (e) => {
		const file = e.target.files[0];
		setImage(file);
	};

	//clear input error function
	useEffect(() => {
		let timeoutId;

		if (descriptionErr) {
			timeoutId = setTimeout(() => {
				setDescriptionErr("");
			}, 3000);
		}

		return () => {
			clearTimeout(timeoutId);
		};
	}, [descriptionErr]);
	//handleSubmit function
	const handleSubmit = (e) => {
		e.preventDefault();
		if (description === "") {
			setDescriptionErr("description field required");
		} else {
			dispatch(addUserInfo({ description }));
			router.push("/thanks");
			const imageRef = ref(storage, `images/${image.name}`);
			uploadBytes(imageRef, image);
		}
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="p-6 justify-center items-center text-xl">
					<div>
						<label>
							Briefly describe what you need in detail
							<span className="text-red-500">*</span>
						</label>

						<textarea
							onChange={(e) => setDescription(e.target.value)}
							placeholder="Enter your text..."
							className="p-2 h-28 w-full md:text-2xl rounded-lg border border-gray-500 text-xl"
						></textarea>
						{descriptionErr && (
							<div className="pt-2 text-red-500">{descriptionErr}</div>
						)}
					</div>
					<div className="text-xl border p-5 bg-gray-50 rounded-lg mt-5">
						<div className="mb-5">Additional file (optional)</div>
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
						<div
							className="text-sm
           mt-4"
						>
							<label>
								Upload additional file that may help professionals better
								understand your need.
							</label>
						</div>

						<div className="flex items-center justify-center mt-5">
							{image ? (
								<img
									src={URL.createObjectURL(image)}
									className="h-[200px] w-[250px] rounded-lg"
								/>
							) : null}
						</div>
					</div>
					<div className="bg-slate-800 hover:bg-slate-950 text-white text-xl cursor-pointer p-2 rounded transition duration-500 flex justify-center mt-5">
						<button type="submit">Continue</button>
					</div>
				</div>
			</form>
		</>
	);
};

export default page;
