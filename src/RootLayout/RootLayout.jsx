import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">

            <header className="lg:px-8 py-2 md:px-4 px-2">
                <Navbar/>
            </header>

            <main  className="bg-[#E5E7EB] flex-1">
                <Outlet/>
            </main>

            <Footer/>
        </div>
    );
};

export default RootLayout;