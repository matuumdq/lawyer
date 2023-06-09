import Contact from "./Contact";
import Doctors from "./Doctors";
import Footer from "./Footer";
import Hero from "./Hero";
import History from "./History";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
	return (
		<div className="">
			<Hero />
			<Services />
			<Doctors />
			<History />
			<Testimonials />
			<Contact />
			<Footer />
		</div>
	);
};

export default Home;
