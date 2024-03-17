import Link from "next/link";

const Footer = () => {
	return (
		<footer className="border-top border-primary bg-dark text-white py-4">
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<ul className="nav pb-0">
							<li className="nav-item">
								<Link href="/" className="nav-link link-light py-0">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link href="#details" className="nav-link link-light py-0">
									Deatails
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/contact" className="nav-link link-light py-0">
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div className="col-md-4">
						<p className="text-end mb-0">Copyright &copy; Blog Mastery 2023</p>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
