import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

const Form = () => {
	const form = useRef();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [messages, setMessages] = useState("");
	const sendEmail = (e) => {
		e.preventDefault();

		if (name === "" || email === "" || messages === "") {
			toast.error("Todos los campos son obligatorios");
			return;
		}

		emailjs
			.sendForm(
				import.meta.env.VITE_SERVICE,
				import.meta.env.VITE_TEMPLATE,
				form.current,
				import.meta.env.VITE_USER_API
			)
			.then(
				() => {
					toast.success("Email enviado satisfactoriamente");
					e.target.reset();
					setName("");
					setEmail("");
					setMessages("");
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div
			id="form"
			className=" w-full px-6 border border-resalted-100 bg-backblue-200 shadow-[0px_0px_20px_5px_#00000024] rounded "
		>
			<form ref={form} className="" onSubmit={sendEmail}>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 w-full max-w-screen-lg items-center justify-center p-2 sm:p-4 md:p-8 pt-4">
					<div className="relative my-2 mx-5 group">
						<input
							type="text"
							onChange={(e) => setName(e.target.value)}
							name="floating_name"
							id="floating_name"
							className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-400/50 appearance-none focus:outline-none focus:ring-0 focus:border-resalted-100 peer"
							placeholder=" "
						/>
						<label
							htmlFor="floating_name"
							className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-resalted-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Ingrese su nombre
						</label>
					</div>

					<div className="relative my-2 mx-5 group">
						<input
							type="text"
							onChange={(e) => setEmail(e.target.value)}
							name="floating_email"
							id="floating_email"
							className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-400/50 appearance-none focus:outline-none focus:ring-0 focus:border-resalted-100 peer"
							placeholder=" "
						/>
						<label
							htmlFor="floating_email"
							className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-resalted-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Ingrese su Email
						</label>
					</div>

					<div className="relative my-2 mx-5 group md:col-span-2">
						<input
							type="text"
							onChange={(e) => setMessages(e.target.value)}
							name="floating_message"
							id="floating_message"
							className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-400/50 appearance-none focus:outline-none focus:ring-0 focus:border-resalted-100 peer"
							placeholder=" "
						/>
						<label
							htmlFor="floating_message"
							className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-resalted-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Escriba su Consulta
						</label>
					</div>
					<div className="justify-self-center items-center md:col-span-2 mb-4 md:mb-0">
						<button
							className="hover:scale-105 border-y-2 border-transparent hover:border-y-2 hover:border-resalted-100 py-2 ease-in duration-300 flex text-resalted-bg uppercase font-semibold text-2xl w-auto"
							type="submit"
						>
							Enviar Consulta
						</button>
					</div>
				</div>
			</form>
			<Toaster richColors />
		</div>
	);
};

export default Form;
