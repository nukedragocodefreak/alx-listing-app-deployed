// components/layout/Header.tsx
import React from "react";

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow p-4 flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <div className="text-2xl font-bold text-blue-600">StayFinder</div>
                <div className="flex items-center gap-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border rounded px-3 py-1"
                    />
                    <button className="text-sm text-blue-600">Sign In</button>
                    <button className="bg-blue-600 text-white px-4 py-1 rounded">
                        Sign Up
                    </button>
                </div>
            </div>
            <nav className="flex gap-4 text-gray-700 text-sm font-medium">
                <button>Rooms</button>
                <button>Mansion</button>
                <button>Countryside</button>
                <button>Beach</button>
                <button>Luxury</button>
                <button>City</button>
            </nav>
        </header>
    );
};
export default Header;
