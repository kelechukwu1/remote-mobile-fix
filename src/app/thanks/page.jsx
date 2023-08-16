"use client";
import { useState, useEffect } from "react";
import { storage, db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const page = () => {
	//set state for firestore
	const [initialRepairers, setInitialRepairers] = useState([]);
	//get initial form values from firestore collection
	const initialRepairersRef = collection(db, "repairers");
	//firebase storage image ref
	const imageRef = ref(storage, "images/");
	//firebase image list state
	const [imageList, setImageList] = useState([]);

	useEffect(() => {
		const getInitialRepairers = async () => {
			//read firestore data
			try {
				const data = await getDocs(initialRepairersRef);
				const filteredData = data.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}));
				//set firestore data
				setInitialRepairers(filteredData);
				listAll(imageRef).then((res) => {
					res.items.forEach((item) => {
						getDownloadURL(item).then((url) => {
							setImageList((prev) => [...prev, url]);
						});
					});
				});
			} catch (err) {
				console.error(err.message);
			}
		};
		getInitialRepairers();
	}, []);
	return (
		<>
			<div className="pb-10 m-10">
				<div className="px-4 py-8 text-3xl bg-gray-50">
					<div className="border-b-8 borer-w">Thank you!</div>
				</div>
				<div className="mt-10 text-lg">
					<div>What happens next?</div>
					<div>
						We will inform suitable professionals about your and interested
						professionals will call you.
					</div>
					<div className="mt-10">
						Professionals take their time to call you. Please acknowledge and
						respond to thier calls, they will appreciate it.
					</div>
					<div className="my-10">
						Kindly let us know immediately you hire someone so that
						professionals cans top contacting you.
					</div>
				</div>
				{/* contact card display */}
				<div className="font-semibold text-2xl mb-5">
					Some repairers around your location
				</div>
				<div className="md:flex w-full md:justify-between">
					<div className="bg-gray-50 rounded py-5 shadow mb-5 w-full md:w-[1/2] md:mr-5">
						<div className="flex justify-between px-4">
							<div className="mr-5">
								<img
									className="h-[100px] w-[100px] rounded-[100%]"
									src="/./images/showcase.jpg"
									alt="profile picture"
								/>
							</div>

							<div>
								<div className="font-semibold text-xl">Thomas Thompson</div>
								<div className="text-gray-500">
									Spec360 phone repairs, <br /> tetlow, Owerri.
								</div>
							</div>
						</div>
						<hr className="my-3" />
						<div className="flex justify-around px-1">
							<div className="text-gray-500 text-sm">09063646331</div>
							<div className="text-gray-500 text-sm">
								obiefunakelechukwu@gmail.com
							</div>
						</div>
					</div>

					<div className="bg-gray-50 rounded py-5 shadow mb-5 w-full md:w-[1/2] md:mr-5">
						<div className="flex justify-between px-4">
							<div className="mr-5">
								<img
									className="h-[100px] w-[100px] rounded-[100%]"
									src="/./images/OIP.jpg"
									alt="profile picture"
								/>
							</div>

							<div>
								<div className="font-semibold text-xl">Thomas Thompson</div>
								<div className="text-gray-500">
									Spec360 phone repairs, <br /> tetlow, Owerri.
								</div>
							</div>
						</div>
						<hr className="my-3" />
						<div className="flex justify-around px-1">
							<div className="text-gray-500 text-sm">09063646331</div>
							<div className="text-gray-500 text-sm">
								obiefunakelechukwu@gmail.com
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;

{
	/* {initialRepairers.map((info, index) => (
					<div key={index} className="bg-white">
						
						<div>{info.businessName}</div>
						<div>{info.businessAddress}</div>
						<div>{info.businessCity}</div>
					</div>
				))}
				{imageList.map((url, index) => (
					<img key={index} src={url} />
				))} */
}
