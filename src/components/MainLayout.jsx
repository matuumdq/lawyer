import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navbar from "./Nabvar";

const MainLayout = () => {
	const location = useLocation();

	return (
		<div className="bg-[url('https://res.cloudinary.com/dnqmez68n/image/upload/v1684869303/bg_k4ioga.png')] md:bg-contain min-h-screen">
			<Navbar />
			<TransitionGroup>
				<CSSTransition
					key={location.key}
					timeout={300}
					classNames="page"
				>
					<main className="w-full h-auto">
						<Outlet />
					</main>
				</CSSTransition>
			</TransitionGroup>
		</div>
	);
};

export default MainLayout;
