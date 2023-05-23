import Doctors from "./Doctors";
import Hero from "./Hero";
import History from "./History";
import Services from "./Services";

const Home = () => {
	return (
		<div className="">
			<Hero />
			<Services />
			<Doctors />
			<History />
		</div>
	);
};

export default Home;
