import CraftContent from "./components/CraftContent";
//import Details from "./components/Details";
//import Download from "./components/Download";
//import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Icons from "./components/Icons";
import Social from "./components/Social";
import Statement from "./components/Statement";
//import Testimonials from "./components/Testimonials";

const Home = () => {
	return (
		<>
			<Header>
				<Hero />
			</Header>
			<Icons />
			<Statement />
			<CraftContent />

			<Social />

		</>
	);
};
export default Home;

//			<Footer />
//<Testimonials />
//<Download />
//			<Details />