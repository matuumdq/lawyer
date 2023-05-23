const Services = () => {
	return (
		<div>
			<div className="flex flex-col lg:flex-row w-full gap-4 justify-center items-center px-4 pb-10 mt-10">
				<div className="w-full"></div>
				<div className="w-full flex flex-col justify-center items-center rounded-md py-10 md:py-16 px-5 border bg-backblue-200 shadow-lg">
					<p className="uppercase text-2xl md:text-6xl text-white font-semibold tracking-wider font-mono animate-fade">
						Somos expertos haciendo{" "}
						<span className="text-4xl md:text-7xl text-resalted-50">
							Justicia
						</span>
					</p>
				</div>
			</div>
			<div className="pb-10">
				<div className="flex justify-center items-center">
					<h3 className="font-semibold uppercase text-resalted-50 px-16 py-4 rounded-md text-5xl my-12 bg-backblue-200 shadow-lg text-center">
						Nuestros Servicios
					</h3>
				</div>

				<div className="flex flex-col items-center md:flex-row gap-5 w-full md:justify-around max-w-screen-lg mx-auto mt-6">
					<div className="relative w-80 md:w-80 h-52 md:h-48 bg-resalted-bg z-10 rounded-lg shadow-md shadow-backblue-bg">
						<div className="flex flex-col absolute z-20">
							<p className="text-white p-4 font-bold">
								Derecho Penal:
							</p>
							<p className="text-white font-thin px-4">
								Esto incluye delitos como robos, asesinatos,
								fraudes, narcotráfico, violencia doméstica,
								entre otros.
							</p>
						</div>
						<div className="absolute bottom-1/2 md:bottom-0 left-0 md:left-10 transform translate-y-1/2 md:translate-y-0 md:-translate-x-1/2 w-8 h-8 bg-resalted-bg rotate-45 "></div>
					</div>
					<div className="relative w-80 md:w-80 h-52 md:h-48 bg-resalted-bg z-10 rounded-lg shadow-lg">
						<div className="flex flex-col absolute z-20">
							<p className="text-white p-4 font-bold">
								Derecho Civil:
							</p>
							<p className="text-white font-thin px-4">
								Incluye temas como divorcio, disputas de
								propiedad, contratos, responsabilidad civil,
								herencias, derechos de los consumidores, entre
								otros.
							</p>
						</div>
						<div className="absolute bottom-1/2 md:bottom-0 right-0 md:right-10 transform translate-y-1/2 md:translate-y-0 md:-translate-x-1/2 w-8 h-8 bg-resalted-bg rotate-45 "></div>
					</div>
					<div className="relative w-80 md:w-80 h-52 md:h-48 bg-resalted-bg z-10 rounded-lg shadow-lg">
						<div className="flex flex-col absolute z-20">
							<p className="text-white p-4 font-bold">
								Derecho Laboral:
							</p>
							<p className="text-white font-thin px-4">
								El derecho laboral se enfoca en las relaciones
								entre empleadores y empleados, así como en los
								problemas relacionados con el empleo.
							</p>
						</div>
						<div className="absolute bottom-1/2 md:bottom-0 left-0 md:left-10 transform translate-y-1/2 md:translate-y-0 md:-translate-x-1/2 w-8 h-8 bg-resalted-bg rotate-45 "></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
