import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import logoFull from '../../../assets/images/logo.png'; 
import logoIcon from '../../../assets/icons/movie-open.svg'; 
import avatar from '../../../assets/icons/Avatar.png';
import userIcon from '../../../assets/icons/user.svg';
import premium from '../../../assets/icons/user-star.svg';
import logout from '../../../assets/icons/log-out.svg';

const Navbar = () => {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLogout = () => {
        navigate('/login'); 
    };

    return (
        <nav className="custom-navbar">
            <div className="nav-left">
                <Link to="/" className="logo-container">
                    <img src={logoIcon} alt="Chill" className="logo-mobile d-block d-md-none" />
                    <img src={logoFull} alt="Chill" className="logo-desktop d-none d-md-block" />
                </Link>

                <div className="nav-links-container">
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav-link-item active" : "nav-link-item"}>Beranda</NavLink>
                    <NavLink to="/series" className={({ isActive }) => isActive ? "nav-link-item active" : "nav-link-item"}>Series</NavLink>
                    <NavLink to="/movies" className={({ isActive }) => isActive ? "nav-link-item active" : "nav-link-item"}>Film</NavLink>
                    <NavLink to="/my-list" className={({ isActive }) => isActive ? "nav-link-item active" : "nav-link-item"}>Daftar Saya</NavLink>
                </div>
            </div>

            <div className="nav-right">
                <div className="profile-section">
                    <div className="avatar-wrapper" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <img src={avatar} alt="Profile" className="avatar-img" />
                    </div>

                    {isDropdownOpen && (
                        <div className="custom-dropdown-menu">
                            <div className="dropdown-item-custom">
                                <img src={userIcon} className="drop-icon" alt="" />
                                <span>Profil Saya</span>
                            </div>
                            <div className="dropdown-item-custom">
                                <img src={premium} className="drop-icon" alt="" />
                                <span>Ubah Premium</span>
                            </div>
                            <div className="dropdown-item-custom border-top-custom mt-1" onClick={handleLogout}>
                                <img src={logout} className="drop-icon" alt="" />
                                <span>Keluar</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;