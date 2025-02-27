import React from 'react';

const Header = () => {
    return (
        <header className="w-full bg-gray-800 shadow-md p-4">
            <nav className="flex justify-between items-center max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold text-green-400">내 포트폴리오</h1>
                <ul className="flex space-x-6">
                    <li><a href="#about" className="text-gray-300 hover:text-green-400 transition">소개</a></li>
                    <li><a href="#projects" className="text-gray-300 hover:text-green-400 transition">프로젝트1////</a></li>
                    <li><a href="#contact" className="text-gray-300 hover:text-green-400 transition">연락처</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header; 