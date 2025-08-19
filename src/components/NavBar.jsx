import { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger, xmark } from '../assets/icons';
import { navLinks } from '../constants';
import Button from './Button';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false); // default: menu closed

    return (
        <header className="padding-x py-8 bg-white fixed z-50 w-full border-b-2 ">
            <nav className="flex justify-between items-start items-center max-container">
                <a href="/">
                    <img src={headerLogo} alt="Logo" width={130} height={29} />
                </a>

                {/* Desktop Menu */}
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            {item.label === 'Login' ?
                                (
                                    <Link to="/login" className="px-7 py-4 font-montserrat text-lg leading-none border rounded-full bg-coral-red text-white border-coral-red">
                                        {item.label}
                                    </Link>

                                ) :
                                (
                                    <a
                                        href={item.href}
                                        className="font-montserrat leading-normal text-lg text-slate-gray"
                                    >
                                        {item.label}
                                    </a>
                                )}
                        </li>
                    ))}
                </ul>

                {/* Hamburger Icon for Mobile */}
                <div className="hidden max-lg:block">
                    <img
                        src={hamburger}
                        alt="Hamburger"
                        width={25}
                        height={25}
                        onClick={() => setMenuOpen(true)}
                        className="cursor-pointer"
                    />
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed inset-0 bg-white flex flex-col justify-center items-center gap-6 z-50">
                    <Button label="Close" closeMenu={setMenuOpen} iconURL={xmark} />
                    <ul className="flex flex-col gap-6 items-center">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                {link.label === 'Login' ?
                                    (
                                        <Link to="/login" className="px-7 py-4 font-montserrat text-lg leading-none rounded-full">
                                            {link.label}
                                        </Link>

                                    ) :
                                    (
                                        <a
                                            href={link.href}
                                            className="block text-slate-600 hover:text-black text-xl"
                                            onClick={() => setMenuOpen(false)} // close on link click
                                        >
                                            {link.label}
                                        </a>
                                    )
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default NavBar;
