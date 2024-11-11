

'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Modal from "./UnderConstruction";

export default function Header() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const navItems = ['Marketplace', 'Events', 'Discussions' , 'About' , 'Contact'];

    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <header className={`fixed top-6 rounded-2xl left-4 right-4 h-16 p-3 z-50 bg-teal-950 backdrop-blur-lg shadow-lg border border-white/20 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-700 hover:scale-105 transition-transform duration-300">
                           CommuneX
                        </h1>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item}
                                href={`/#${item.toLowerCase()}`}
                                className="relative group text-teal-400 hover:text-teal-200 transition-all duration-300"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    <button
                       onClick={()=>setIsOpen(true)}
                        className="hidden md:block px-6 py-2 text-white rounded-full shadow-lg bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                    >
                        Login
                    </button>

                    <button
                        className="md:hidden text-teal-400 hover:text-teal-200 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 mt-2 p-4 bg-teal-950 rounded-xl border border-white/20 backdrop-blur-lg shadow-lg">
                        <nav className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item}
                                    href={`/#${item.toLowerCase()}`}
                                    className="text-teal-400 hover:text-teal-200 transition-all duration-300 px-4 py-2 hover:bg-teal-900/50 rounded-lg"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                            <Link
                                href="/login"
                                className="w-full text-center px-6 py-2 text-white rounded-full shadow-lg bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Login
                            </Link>
                        </nav>
                    </div>
                )}
            </header>

            {isOpen &&(
<Modal isOpen={isOpen}  setIsOpen={setIsOpen} />

            )}
        </>
    );
}