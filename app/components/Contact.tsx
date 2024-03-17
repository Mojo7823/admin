export const Contact = () => {
	return (
		<div className="py-5 bg-light">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<form>
							<div className="mb-3">
								<input
									type="text"
									className="form-control form-control-lg"
									placeholder="Name"
								/>
							</div>
							<div className="mb-3">
								<input
									type="email"
									className="form-control form-control-lg"
									placeholder="Email"
								/>
							</div>
							<div className="mb-3">
								<textarea
									className="form-control form-control-lg"
									name="message"
									rows={6}
									placeholder="Message"
								/>
							</div>
							<div className="d-grid">
								<button className="btn btn-primary text-white mt-3 p-3 rounded-5">
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
