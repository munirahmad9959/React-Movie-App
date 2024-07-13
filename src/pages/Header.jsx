import React, { useState } from 'react'
import NavListItem from '../components/NavListItem'
import navListData from '../data/navListData'
import './header.css'
import Search from '../components/Search'
import { SlLogin } from "react-icons/sl";
import Button from '../components/Button'

const Header = ({ scroll }) => {

    const [navList, setNavList] = useState(navListData);

    const handleNavClick = id => {
        const newNavList = navList.map(nav => {
            nav.active = false;
            if (nav._id === id) nav.active = true;
            return nav
        })
        setNavList(newNavList);
    }

    return (
        <header className={`${scroll > 100 ? 'scrolled' : undefined}`}>
            <a href="#" className='logo'>ByteBox</a>
            <ul className="nav">

                {navList.map(nav => (
                    <NavListItem key={nav._id} nav={nav} navOnClick={handleNavClick} />
                ))}
            </ul>
            <Search />
            <Button icon={<SlLogin />} name="Sign in" />
        </header>
    )
}

export default Header
