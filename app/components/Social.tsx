import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faInstagram,
	faLinkedin,
	faPinterest,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
	return (
		<div className="social text-bg-dark py-6 overflow-hidden">
			<div className="container">
				<div className="row">
					<div className="col-md-6 offset-md-3 text-center fs-4">
						<p>
							Stay connected and join our vibrant community. For any inquiries
							or assistance, feel free to reach out to us
						</p>
						<div className="d-flex justify-content-center gap-4">
							<FontAwesomeIcon icon={faFacebookF} size="2x" />
							<FontAwesomeIcon icon={faTwitter} size="2x" />
							<FontAwesomeIcon icon={faLinkedin} size="2x" />
							<FontAwesomeIcon icon={faInstagram} size="2x" />
							<FontAwesomeIcon icon={faPinterest} size="2x" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Social;
