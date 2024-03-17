"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
	const [colorChange, setColorchange] = useState(false);
	const changeNavbarColor = () => {
		if (window.scrollY >= 20) {
			setColorchange(true);
		} else {
			setColorchange(false);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", changeNavbarColor);
	}, []);
	return (
		<nav
			className={`navbar navbar-expand-lg fixed-top navbar-dark py-3 ${
				colorChange ? "bg-dark" : ""
			}`}
		>
			<div className="container">
				<Link href="/" className="navbar-brand">
					<Image
						src={"/images/logo.png"}
						alt="logo"
						width={225}
						height={25}
						priority
					/>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav ms-auto d-flex align-items-center">
						<li className="nav-item">
							<Link href={"/"} className="nav-link fw-medium">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link href={"#details"} className="nav-link fw-medium">
								Details
							</Link>
						</li>
						<li className="nav-item">
							<Link href={"/contact"} className="nav-link fw-medium">
								<button
									type="button"
									className="btn btn-outline-light navbar-btn"
								>
									Contact
								</button>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
