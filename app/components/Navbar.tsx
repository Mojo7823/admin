"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

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
            <div className="container d-flex justify-content-between">
                <Link href="" className="navbar-brand">
                    <img src="/images/logo.png" alt="Company Logo" style={{ height: '3rem' }} />
                </Link>
                <div className="navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto d-flex align-items-center flex-row">
                        <li className="nav-item">
                            <LogoutLink className="nav-link fw-medium btn btn-outline-light navbar-btn">
                                Keluar
                            </LogoutLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;