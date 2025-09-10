// components/layout/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white text-center py-4 mt-8">
            <p>&copy; {new Date().getFullYear()} StayFinder. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
