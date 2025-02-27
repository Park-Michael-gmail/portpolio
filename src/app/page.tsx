import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-navy text-white">
            <Header />
            <main className="flex flex-col gap-16 p-8 max-w-4xl bg-gray-800 rounded-lg shadow-lg border border-green-500">
                <h1 className="text-5xl font-extrabold text-center text-green-400">내 포트폴리오</h1>
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
