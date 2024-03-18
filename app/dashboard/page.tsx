//Location : admin/dashboard/app/page.tsx

import Konten from "../components/Konten";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Home = () => {
	return (
		<>
			<Header>
				<Navbar />
			</Header>
			<Konten />
		</>
	);
};
export default Home;