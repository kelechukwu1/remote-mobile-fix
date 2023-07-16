import Link from "next/link";

const page = () => {
	return (
		<div className=" justify-center items-center mx-10 md:mx-20 lg:mx-36 my-5">
			<div className="mb-5 ">
				<Link href={"/"} className="bg-blue-600 p-2 rounded hover:bg-blue-700">
					Go Back
				</Link>
			</div>
			<form>
				<div>
					<label>Enter your business name</label>
				</div>
				<div className="">
					<input
						type="text"
						placeholder="Kelvin's AutoFix"
						className="p-2 w-full rounded-sm my-2 text-black"
					/>
				</div>
				<div>
					<label>Where's your business located?</label>
				</div>
				<div className="w-full">
					<input
						type="text"
						placeholder="Address"
						className="p-2 w-full rounded-sm my-2 text-black"
					/>
				</div>
				<div className="w-full">
					<input
						type="text"
						placeholder="City/Area"
						className="p-2 w-full rounded-sm my-2 text-black"
					/>
				</div>
				<div>
					<label>Describe the service you provide</label>
				</div>
				<div className="w-full">
					<textarea className="p-2 w-full rounded-sm my-2	text-black"></textarea>
				</div>
				<div>
					<label>Your qualification(s)</label>
				</div>
				<div className="w-full">
					<textarea className="p-2 w-full rounded-sm my-2	text-black"></textarea>
				</div>
				<div>
					<label>When was your business founded?</label>
				</div>
				<div className="w-full">
					<input
						type="text"
						placeholder="E.g: 1998"
						className="p-2 w-full rounded-sm my-2 text-black"
					/>
				</div>
				<div>
					<label>How many employees do you have?</label>
				</div>
				<div className="w-full">
					<input
						type="text"
						placeholder="E.g: 10"
						className="p-2 w-full rounded-sm my-2 text-black"
					/>
				</div>
				<div>
					<label>How many kilometers can you travel for work?</label>
				</div>
				<div className="w-full">
					<input
						type="text"
						placeholder="60"
						className="p-2 w-full rounded-sm my-2 text-black"
					/>
					<h1>I can travel within 60 kilometers of my business</h1>
				</div>
				<div className="mt-10 text-center">
					<label>Upload a profile picture here</label>
				</div>
				<div className=" bg-blue-600 p-2 my-2 rounded-sm text-center hover:bg-blue-700 transition duration-500 cursor-pointer ">
					<Link href={"/dashboard"}>Proceed</Link>
				</div>
			</form>
		</div>
	);
};

export default page;
/* <div className="mx-10">
					<div>
						<label>What is your business type?</label>
					</div>
					<div>
						<select className="p-2 w-full rounded-sm my-2" value={"state"}>
							<option>Registered Company</option>
							<option>Private Person</option>
						</select>
					</div>
				</div> */
