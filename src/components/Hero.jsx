const Hero = () => {
	return (
		<div className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center w-full gap-5 animate-fade px-5">
			<div className="md:ml-5 md:-mt-44 font-semibold text-resalted-50 md:px-16 py-4 rounded-md text-3xl md:text-5xl my-12 bg-backblue-200 shadow-[0px_0px_20px_5px_#00000024] text-center md:w-1/2 w-full">
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
