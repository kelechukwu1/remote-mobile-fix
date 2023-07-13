export default function Home() {
	return (
		<main>
			<div className="flex justify-between items-center shadow">
				<div
					style={{
						backgroundImage: `url(/images/showcase.jpg)`,
					}}
					className="showcase"
				>
					<div className="py-20 px-5">
						<h1 className="text-4xl mb-5">
							Find Phone Repairers Around Your Location
						</h1>
						<h1 className="text-xl mb-3">
							Where do you need the phone repairer?
						</h1>
						<div className="mb-3">
							<input
								type="text"
								className="w-full p-3 px-4 rounded-sm"
								placeholder="Enter your area"
							/>
						</div>
						<div className="bg-blue-600 hover:bg-blue-800 duration-300 ease-in-out p-2 rounded-sm cursor-pointer">
							<button>Go</button>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
