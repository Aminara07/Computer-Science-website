import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
    }

    return (
        <div className="py-6">
            {/* Navbar container */}
            <div className="flex items-center justify-between w-full">

                {/* Navbar items on the left */}
                <ul className="hidden sm:flex gap-5 text-base text-gray-700">
                    <NavLink to="/" className="flex flex-col items-center gap-1">
                        <p>Acceuil</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                    </NavLink>
                    <NavLink to="/collection" className="flex flex-col items-center gap-1">
                        <p>Oeuvres</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                    </NavLink>
                    <NavLink to="/about" className="flex flex-col items-center gap-1">
                        <p>Biography</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                    </NavLink>
                    <NavLink to="/contact" className="flex flex-col items-center gap-1">
                        <p>Contactez moi</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                    </NavLink>
                </ul>

                {/* Centered title and subtitle */}
                <div className="flex flex-col items-center text-center w-full sm:w-auto pr-[200px]">
                    <h1 className="font-bold text-5xl text-gray-700">Lamine Ndiaye</h1>
                    <p className="text-3xl text-gray-700 pt-4">Tapisseries</p>
                </div>

                {/* Icons on the right */}
                <div className="flex items-center gap-6">
                    <img onClick={() => { setShowSearch(true); navigate('/collection') }} src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
                    <div className="group relative">
                        {/* Dropdown Menu */}
                        {token &&
                            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                                    <p className="cursor-pointer hover:text-black">My Profile</p>
                                    <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
                                    <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
                                </div>
                            </div>}
                    </div>
                    <img onClick={() => setVisible(true)} src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden" alt="" />
                </div>
            </div>

            {/* Sidebar menu for small screens */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className="flex flex-col text-gray-600">
                    <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                        <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
                        <p>Retour</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">ACCEUIL</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/collection">OEUVRES</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/about">BIBLIOGRAPHIE</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/contact">CONTACT</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar