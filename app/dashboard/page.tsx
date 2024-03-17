//Location : admin/dashboard/app/page.tsx

import CraftContent from "../components/CraftContent";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
	return (
		<>
			<Header>
				<Hero />
			</Header>
			<CraftContent />
		</>
	);
};
export default Home;