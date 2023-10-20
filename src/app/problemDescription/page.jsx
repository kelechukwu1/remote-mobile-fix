"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { IoImageOutline } from "react-icons/io5";
import { storage } from "../config/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { v4 } from "uuid";

const page = () => {
	//init nextJs navigation
	const router = useRouter();

	//CREATE ALL STATES BELOW
	//image state
	const [image, setImage] = useState("");
	//url state
	const [url, setUrl] = useState("");
	//create state for client/user problem description
	const [description, setDescription] = useState("");
	//description error state
	const [descriptionErr, setDescriptionErr] = useState("");

	//get LS value i.e the ID for manipulating firestore collection
	let id;
	if (typeof window !== "undefined") {
		id = JSON.parse(localStorage.getItem("userInfo"));
	}

	//input ref for file upload
	const inputRef = useRef(null);

	//handleImageChange function
	const handleImageChange = (e) => {
		const file = e.target.files[0];
		setImage(file);
	};

	//clear description input error function
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
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (description === "") {
			setDescriptionErr("description field required");
		} else {
			try {
				//create and get image ref for firebase storage
				const imageRef = ref(storage, `imageDescription/${image.name + v4()}`);
				uploadBytes(imageRef, image);
				// Get the download URL after the upload is complete
				const getUrl = await getDownloadURL(imageRef);
				setUrl(getUrl);
				//add and merge existing and current data to firestore cloud storage
				await updateDoc(
					doc(db, "user", id),
					{
						description: description,
						imageDescription: url,
					},
					{ merge: true }
				);
				//redirect page
				router.push("/thanks");
			} catch (err) {
				console.log(err.message);
			}
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
							<div className="pt-2 text-red-500 text-sm">{descriptionErr}</div>
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
