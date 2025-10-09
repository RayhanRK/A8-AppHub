import { Outlet, useLocation } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";


const RootLayout = () => {

const location = useLocation();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 100);
    }, [location]);
    return (
        <>
            {loading ? <Spinner /> : 
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <div className="flex-1 bg-neutral-100">
                        <Outlet />
                    </div>

                    <Footer />
                    <ToastContainer />
                </div>
            }
        </>
    );
};

export default RootLayout;
