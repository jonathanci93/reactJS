// src/components/Logo.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => (
    <NavLink to="/" className="navbar-brand d-flex align-items-center">
        {/* Apunta directamente a la carpeta public/images */}
        <img
            src="/images/invictus-logo.png"
            alt="Invictus Logo"
            height="40"
            className="d-inline-block align-text-top me-2"
        />
    </NavLink>
);

export default Logo;