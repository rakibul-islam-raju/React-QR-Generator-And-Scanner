import React from 'react';

const Navbar = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient">
            <div className="container">
                <a className="navbar-brand" href="/#">
                    QRScanner
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/#">
                                Home
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);

export default Navbar;
