import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Modal from "./Modal";

const CraftContent = () => {
	return (
		<div className="details my-5">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="image-container">
							<Image
								src={"/images/author.png"}
								alt="author"
								className="img-fluid"
								width={507}
								height={576}
							/>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="text-container d-flex flex-column justify-content-center h-100">
							<h2 className="display-6">Craft Remarkable Content</h2>
							<p>
								Discover techniques for effective storytelling, engaging
								visuals, and compelling calls-to-action. Unlock the secrets of
								creating a consistent and authentic brand voice that sets you
								apart from the competition.
							</p>
							<ul className="list-group list-group-flush lh-lg">
								<li className="list-group-item">
									<FontAwesomeIcon
										className="text-primary me-1"
										icon={faSquare}
									/>
									<strong>Embrace Your Unique Voice:</strong> Learn how to
									harness the power of your unique voice.
								</li>
								<li className="list-group-item">
									<FontAwesomeIcon
										className="text-primary me-1"
										icon={faSquare}
									/>
									<strong>Spark Creativity:</strong> Explore techniques to spark
									creativity and overcome writer's block.
								</li>
								<li className="list-group-item">
									<FontAwesomeIcon
										className="text-primary me-1"
										icon={faSquare}
									/>
									<strong>Engage Your Readers:</strong> Discover strategies for
									creating content that engages your readers on a deeper level.
								</li>
							</ul>
							<button
								className="btn btn-primary text-white p-3 rounded-5 mt-3 align-self-start"
								data-bs-toggle="modal"
								data-bs-target="#modal2"
							>
								Learn More
							</button>
						</div>
					</div>
				</div>
			</div>
			<Modal content="Craft" id="modal2" />
		</div>
	);
};
export default CraftContent;
