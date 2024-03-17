import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import Modal from "./Modal";

const Details = () => {
	return (
		<>
			<div id="details" className="my-5">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="text-container d-flex flex-column justify-content-center h-100">
								<h2 className="display-6">Unlock Your Blogging Potential</h2>
								<p>
									Are you ready to unleash your true blogging potential? Our
									ebook, Blog Mastery, provides you with the tools and knowledge
									to take your blog to the next level.
								</p>
								<ul className="list-group list-group-flush lh-3">
									<li className="list-group-item">
										<FontAwesomeIcon
											icon={faSquare}
											className="me-1 text-primary"
										/>
										<span>
											<strong>Unleash Your Creativity</strong> Our ebook
											empowers you to unleash your creativity and express your
											unique voice through your blog.
										</span>
									</li>
									<li className="list-group-item">
										<FontAwesomeIcon
											icon={faSquare}
											className="me-1 text-primary"
										/>
										<span>
											<strong>Maximize Your Reach</strong> Learn how to optimize
											your blog for search engines.
										</span>
									</li>
									<li className="list-group-item">
										<FontAwesomeIcon
											icon={faSquare}
											className="me-1 text-primary"
										/>
										<span>
											<strong>Monetization Strategies</strong> Discover various
											monetization strategies, such as sponsored content &
											affiliate marketing.
										</span>
									</li>
								</ul>
								<button
									className="btn btn-primary text-white p-3 rounded-5 mt-3 align-self-start"
									data-bs-toggle="modal"
									data-bs-target="#modal1"
								>
									Get Your Copy Now
								</button>
							</div>
						</div>
						<div className="col-md-6">
							<div className="p-5">
								<Image
									src="/images/description.png"
									className="img-fluid"
									width={505}
									height={576}
									alt="get ebook copy"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Modal content="Potential" id="modal1" />
		</>
	);
};
export default Details;
