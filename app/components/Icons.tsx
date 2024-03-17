"use client";
import { faDollar, faRocket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Icons = () => {
	return (
		<div className="icons bg-light">
			<div className="container-xl">
				<div className="row">
					<div className="col-md-4 d-flex gap-4">
						<FontAwesomeIcon icon={faUser} size="3x" className="text-primary" />
						<div>
							<h5 className="fw-meduim">Unlock Your Blogging Potential</h5>
							<p className="text-muted">
								Discover the key to unleashing your true blogging potential. Our
								ebook provides expert guidance on creating compelling content
							</p>
						</div>
					</div>
					<div className="col-md-4 d-flex gap-4">
						<FontAwesomeIcon
							icon={faRocket}
							size="3x"
							className="text-secondary"
						/>
						<div>
							<h5 className="fw-meduim">Skyrocket Your Blogs Success</h5>
							<p className="text-muted">
								Take your blog to new heights with our proven strategies for
								driving traffic and increasing your blogs visibility.
							</p>
						</div>
					</div>
					<div className="col-md-4 d-flex gap-4">
						<FontAwesomeIcon
							icon={faDollar}
							size="3x"
							className="text-primary"
						/>
						<div>
							<h5 className="fw-meduim"> Monetize Your Blog</h5>
							<p className="text-muted">
								Turn your passion for blogging into a profitable venture. Our
								ebook reveals tried-and-tested monetization strategies
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Icons;
