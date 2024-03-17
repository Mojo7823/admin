import Image from "next/image";

const Hero = () => {
	return (
		<div className="hero text-white pt-7">
			<div className="container-xl">
				<div className="row">
					<div className="col-md-6">
						<div className="image-container d-flex justify-content-center d-md-block">
							<Image
								src={"/images/header-ebook.png"}
								alt="e-book"
								width={520}
								height={700}
								className="img-fluid"
								priority
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="text-container d-flex p-4 flex-column text-center text-md-start justify-content-center h-100">
							<h1 className="display-3 fw-bold">Welcome to Blog Mastery</h1>
							<p className="lead">
								Are you ready to take your blogging journey to new heights? Blog
								Mastery is your ultimate guide to creating and managing a
								successful blog that captivates your audience and drives
								engagement.
							</p>
							<div className="form-container text-center">
								<form>
									<div className="my-4">
										<input
											type="email"
											className="form-control form-control-lg rounded-5 py-3"
											placeholder="Email address"
										/>
									</div>
									<div className="d-grid">
										<button className="btn btn-primary btn-lg text-white py-3 rounded-5">
											Free Download
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Hero;
