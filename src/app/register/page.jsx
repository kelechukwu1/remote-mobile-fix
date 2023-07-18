import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

const page = () => {
	// const navigate =
	// const goBack = () => {

	// }
	return (
		<div className="bg-gray-100 py-5 ">
			<div
				className="mx-10 mb-5 w-14 py-2 rounded-md bg-blue-800 hover:bg-blue-900 transition duration-500 text-white"
				// onClick={goBack}
			>
				<BsArrowLeft className="w-6 h-6 ml-4" />
			</div>
			<div className="card bg-white mx-10 rounded-lg p-5">
				<div className=" justify-center items-center mx-5 md:mx-20 lg:mx-36 ">
					<form>
						<div>
							<label>Enter your business name</label>
						</div>
						<div className="">
							<input
								type="text"
								placeholder="Kelvin's AutoFix"
								className="p-2 w-full bg-gray-50 focus:outline-none rounded-sm my-2 text-black border"
							/>
						</div>
						<div>
							<label>Where's your business?</label>
						</div>
						<div className="w-full">
							<input
								type="text"
								placeholder="Address"
								className="p-2 w-full bg-gray-50 focus:outline-none rounded-sm my-2 text-black border"
							/>
						</div>
						<div>
							<label>City/Area</label>
						</div>
						<div className="w-full">
							<input
								type="text"
								placeholder="City/Area"
								className="p-2 w-full bg-gray-50 focus:outline-none rounded-sm my-2 text-black border"
							/>
						</div>
						<div>
							<label>Describe your service</label>
						</div>
						<div className="w-full">
							<textarea
								placeholder="Enter your text..."
								className="p-2 h-28 w-full bg-gray-50 focus:outline-none rounded-sm my-2 text-black border"
							></textarea>
						</div>
						<div>
							<label>Your qualification(s)</label>
						</div>
						<div className="w-full">
							<textarea
								placeholder="e.g. Member of Phone repairers association"
								className="p-2 h-28 w-full bg-gray-50 focus:outline-none rounded-sm my-2 text-black border"
							></textarea>
						</div>
						<div>
							<label>How many kilometers can you travel for work?</label>
						</div>
						<div className="w-full">
							<input
								type="text"
								placeholder="60"
								className="p-2 w-full bg-gray-50 focus:outline-none rounded-sm my-2 text-black border"
							/>
							<h1>I can travel within 60 kilometers of my business</h1>
						</div>
						<div className="mt-10 text-center">
							<label>Upload a profile picture here</label>
						</div>
						<Link href="/dashboard">
							<div className="text-white bg-blue-600 p-2 my-2 rounded-sm text-center hover:bg-blue-700 transition duration-500 cursor-pointer">
								Proceed
							</div>
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
};

export default page;
