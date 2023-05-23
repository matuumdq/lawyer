const Doctors = () => {
	const lawyer = [
		{
			id: 0,
			imagen: "https://img.freepik.com/foto-gratis/hombre-negocios-exitoso-firmando-documentos-oficina-moderna_158595-5380.jpg?w=740&t=st=1684869891~exp=1684870491~hmac=da1363cf22681c05bc8d71e44831c9bde367d2c2fe65058f06bca18eaf7802f6",
			name: "Haure",
			speciality: "Derecho Civil",
		},
		{
			id: 1,
			imagen: "https://img.freepik.com/foto-gratis/hombre-negocios-exitoso-firmando-documentos-oficina-moderna_158595-5380.jpg?w=740&t=st=1684869891~exp=1684870491~hmac=da1363cf22681c05bc8d71e44831c9bde367d2c2fe65058f06bca18eaf7802f6",
			name: "Astudillo Andres",
			speciality: "Derecho Penal",
		},
		{
			id: 2,
			imagen: "https://img.freepik.com/foto-gratis/hombre-negocios-exitoso-firmando-documentos-oficina-moderna_158595-5380.jpg?w=740&t=st=1684869891~exp=1684870491~hmac=da1363cf22681c05bc8d71e44831c9bde367d2c2fe65058f06bca18eaf7802f6",
			name: "Pedro",
			speciality: "Derecho Familiar",
		},
	];
	return (
		<div className="py-24">
			<div className="flex justify-center items-center">
				<h3 className="font-semibold uppercase text-resalted-50 md:px-16 py-4 rounded-md text-3xl md:text-5xl my-12 bg-backblue-200 shadow-lg text-center md:w-1/2 mx-auto">
					Conoce tus futuros abogados
				</h3>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-8 content-center max-w-screen-lg mx-auto">
				{lawyer &&
					lawyer.map((law) => (
						<div
							key={law.id}
							className="flex max-w-full relative justify-center mx-5 md:mx-auto"
						>
							<img
								src={law.imagen}
								alt={law.name}
								className="grayscale rounded-md relative z-0 "
							/>
							<div className="absolute -bottom-8 w-2/3 bg-resalted-100 shadow-md p-4 rounded-lg z-10 flex flex-col justify-center items-center text-white">
								<h4 className="whitespace-nowrap overflow-hidden ">
									{law.name}
								</h4>
								<p className="italic whitespace-nowrap overflow-hidden">
									{law.speciality}
								</p>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Doctors;
