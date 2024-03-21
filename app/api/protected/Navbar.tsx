//nextjs/app/components/Navbar.tsx

"use client";
import Link from "next/link";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-dark py-3 header">
            <div className="container d-flex justify-content-between align-items-start">
                <Link href="" className="navbar-brand">
                    <img className="logo" src="/images/logo.png" alt="Company Logo" />
                </Link>
                <div className="d-flex align-items-start justify-content-end">
                    <LogoutLink className="nav-link fw-medium btn btn-outline-light navbar-btn">
                        Keluar
                    </LogoutLink>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;