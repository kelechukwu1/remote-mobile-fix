"use client";

import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

const page = () => {
	//CREATE ALL STATES BELOW
	//set state for firestore
	const [initialRepairers, setInitialRepairers] = useState([]);
	//get initial form values from firestore collection
	const initialRepairersRef = collection(db, "repairers");

	//this hook gets all the repairers in the repairer's collection and stores them in a state
	useEffect(() => {
		const getInitialRepairers = async () => {
			//read firestore data
			try {
				const data = await getDocs(initialRepairersRef);
				const filteredData = data.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}));
				//set firestore data to a state
				setInitialRepairers(filteredData);
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
						professionals can stop contacting you.
					</div>
				</div>
				{/* contact card display */}

				<div className="font-semibold text-2xl mb-5">
					Some repairers around your location
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
					{initialRepairers.map((info, index) => (
						<div key={index} className="bg-gray-50 rounded py-5 shadow px-4">
							<div className="flex flex-col items-center">
								<div className="mb-3">
									<img
										className="h-[100px] w-[100px] rounded-full"
										src={info.profileImage}
										alt="Profile picture"
									/>
								</div>
								<div className="font-semibold text-xl">{info.firstName}</div>
								<div className="text-gray-500">
									{info.businessName}, <br /> {info.businessAddress},{" "}
									{info.businessCity}.
								</div>
								<div className="text-gray-500 mt-2">{info.phone}</div>
							</div>
							<hr className="my-3" />
							<div className="text-center text-gray-500 text-sm">
								{info.email}
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default page;
