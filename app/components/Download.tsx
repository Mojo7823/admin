import Image from "next/image";

const Download = () => {
	return (
		<div className="download">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<div className="image-container mt-n6 mb-3">
							<Image
								alt="download"
								className="img-fluid"
								src={"/images/download-ebook.png"}
								width={404}
								height={554}
							/>
						</div>
					</div>
					<div className="col-lg-7">
						<div className="text-container text-white d-flex flex-column justify-content-center h-100 mb-5">
							<h2 className="fw-bold">Get Your Free Ebook Now</h2>
							<p>
								Unlock the power of knowledge and take your blogging journey to
								the next level. Our ebook, "Blog Mastery: The Ultimate Guide to
								Blogging Success," is your key to success.
							</p>

							{/* <!-- Form --> */}
							<form>
								<div className="input-group mb-3">
									<input
										type="email"
										className="form-control"
										placeholder="Email Address"
									/>
									<button className="btn btn-primary text-white rounded-end">
										Download
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Download;
