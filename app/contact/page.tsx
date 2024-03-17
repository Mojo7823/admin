import { Contact } from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Social from "../components/Social";

const ContactPage = () => {
	return (
		<>
			<Header>
				<div className="hero pt-7 text-white">
					<div className="container-xl">
						<div className="row">
							<div className="col-12">
								<h1>Contact Information</h1>
							</div>
						</div>
					</div>
				</div>
			</Header>
			<Contact />
			<Social />
			<Footer />
		</>
	);
};
export default ContactPage;
