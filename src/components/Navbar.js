import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <div>
        <nav className="navbar navbar-expand-lg bg-purple">
            <div className="container">
                <a className="navbar-brand text-white" href="/#">
                    QRScanner
                </a>
                <button
                    className="navbar-toggler text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-link text-white"
                                aria-current="page"
                                href="/#"
                            >
                                Generator
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/scanner"
                                className="nav-link text-white"
                                aria-current="page"
                                href="/#"
                            >
                                Scanner
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);

export default Navbar;
