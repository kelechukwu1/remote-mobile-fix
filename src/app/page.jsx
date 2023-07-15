import Link from "next/link";

export default function Home() {
	return (
		<main>
			<div className="flex justify-between items-center shadow">
				<div
					style={{
						backgroundImage: `url(/images/phone.webp)`,
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
					className="showcase"
				>
					<div className="py-20 px-5">
						<h1 className="text-4xl mb-5 text-blue-50">
							Find Phone Repairers Around Your Location
						</h1>
						<h1 className="text-xl mb-3 text-blue-50">
							Where do you need the phone repairer?
						</h1>
						<div className="md:flex px-10 mt-8">
							<div className="mb-3 w-full">
								<input
									type="text"
									className="w-full p-3 px-4 rounded-sm bg-blue-100"
									placeholder="Enter your area"
								/>
							</div>
							<div className="sm:w-full md:w-48">
								<button className="w-full text-blue-50 py-3 text-center bg-blue-600 hover:bg-blue-800 duration-300 ease-in-out rounded-sm cursor-pointer">
									Go
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className=" text-center p-5 shadow">
				Do you provide Phone Repair?
				<Link className="text-blue-600" href={"/"}>
					{" "}
					Register your business
				</Link>{" "}
				for free to get phone repair jobs near you.
			</div>
			<hr className="p-4 mx-2 mt-5" />
		</main>
	);
}
