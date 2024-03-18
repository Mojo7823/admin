//Location : admin/dashboard/app/page.tsx

import Konten from "../components/Konten";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
	return (
		<>
			<Header>
				<Hero />
			</Header>
			<Konten />
		</>
	);
};
export default Home;