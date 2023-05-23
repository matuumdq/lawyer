const Hero = () => {
	return (
		<div className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center w-full gap-5 animate-fade">
			<div className="md:ml-5 md:-mt-44 w-full bg-backblue-200 flex flex-col justify-center items-center rounded-md py-10 md:pt-16 px-5 border border-backblue-bg/50 shadow-md">
				<p className="uppercase text-white font-bold text-4xl">
					Soluciones para cualquier
				</p>
				<p className="text-8xl pt-2 text-resalted-50 font-Tangerine">
					{" "}
					Caso Legal
				</p>
			</div>
			<img
				src="https://res.cloudinary.com/dnqmez68n/image/upload/v1684854189/lawyer_pjvvht.png"
				alt="lawyer"
				className="h-auto md:w-1/2 md:mt-44"
			/>
		</div>
	);
};

export default Hero;
