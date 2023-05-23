import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	return (
		<div className="h-20 mx-auto flex justify-between items-center p-4">
			{/* Left */}

			<div className="hidden md:flex items-center font-medium gap-10 p-1">
				<Link
					to="/nosotros"
					className="border-b-2 border-transparent text-resalted-bg uppercase font-thin hover:scale-105 hover:border hover:border-y-resalted-100 p-1 ease-in duration-300"
				>
					Nosotros
				</Link>
				<Link
					to="/tienda"
					className="border-b-2 border-transparent text-resalted-bg uppercase font-thin hover:scale-105 hover:border hover:border-y-resalted-100 p-1 ease-in duration-300"
				>
					Casos
				</Link>
				<Link
					to="/contactanos"
					className="border-b-2 border-transparent text-resalted-bg uppercase font-thin hover:scale-105 hover:border hover:border-y-resalted-100 p-1 ease-in duration-300"
				>
					Contactanos
				</Link>
			</div>
			<div
				className="cursor-pointer md:hidden ml-8"
				onClick={() => setNav(!nav)}
			>
				<AiOutlineMenu
					size={30}
					className="hover:scale-110 ease-in duration-300 text-resalted-bg "
				/>
			</div>
			<Link to="/" className="flex items-center gap-6">
				<img
					src="https://res.cloudinary.com/dnqmez68n/image/upload/v1684852196/logodorado_bizsdr.png"
					alt="logo"
					className="h-16 w-auto"
				/>
			</Link>
			{/* Mobile Menu */}
			{/* Overlay */}
			{nav ? (
				<div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
			) : (
				""
			)}

			{/* Side menu */}
			<div
				className={
					nav
						? "fixed top-0 left-0 w-full sm:w-[300px] h-screen bg-backblue-100 z-20 duration-300"
						: "fixed top-0 left-[-120%] w-[300px] h-screen bg-white z-10 duration-300"
				}
			>
				<AiOutlineClose
					size={30}
					className="absolute right-4 top-4 cursor-pointer hover:scale-110 ease-in duration-300 text-resalted-bg"
					onClick={() => setNav(!nav)}
				/>
				<div className="flex items-center justify-center w-full">
					<Link to="/" onClick={() => setNav(false)}>
						<img
							src="https://res.cloudinary.com/dnqmez68n/image/upload/v1684852196/logodorado_bizsdr.png"
							alt="logo"
							className="h-32 w-auto mx-auto mt-4"
						/>
						<p className="text-center">Abogados</p>
					</Link>
				</div>
				<nav className="my-44">
					<ul className="flex flex-col px-4 py-8 gap-10 justify-center items-center text-xl text-gray-800">
						<Link
							to="/nosotros"
							onClick={() => setNav(false)}
							className="hover:scale-105 hover:border-y-2 border-resalted-100 py-2 ease-in duration-300 flex text-resalted-bg uppercase font-semibold text-2xl w-56"
						>
							Nosotros
						</Link>
						<Link
							to="#casos"
							onClick={() => setNav(false)}
							className="hover:scale-105 hover:border-y-2 border-resalted-100 py-2 ease-in duration-300 flex text-resalted-bg uppercase font-semibold text-2xl w-56"
						>
							Casos
						</Link>
						<Link
							to="/contactanos"
							onClick={() => setNav(false)}
							className="hover:scale-105 hover:border-y-2 border-resalted-100 py-2 ease-in duration-300 flex text-resalted-bg uppercase font-semibold text-2xl w-56"
						>
							<GrMail size={25} className="mr-4" />
							Contactanos
						</Link>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
