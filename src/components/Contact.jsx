import Form from "./Form";

const Contact = () => {
	return (
		<div
			id="contacto"
			className="flex flex-col justify-center items-center -mt-20 md:mt-20 pb-10 w-full max-w-screen-lg px-5 md:mx-auto"
		>
			<h3 className="font-semibold uppercase text-resalted-50 md:px-16 py-4 rounded-md text-3xl md:text-5xl my-12 bg-backblue-200 shadow-[0px_0px_20px_5px_#00000024] text-center md:w-1/2 mx-4 w-full">
				Contactanos
			</h3>
			<Form />
		</div>
	);
};

export default Contact;
