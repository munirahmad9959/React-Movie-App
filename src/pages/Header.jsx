import React from 'react'
import NavListItem from '../components/NavListItem'
import navListData from '../data/navListData'
import './header.css'
import Search from '../components/Search'
import { SlLogin } from "react-icons/sl";
import Button from '../components/Button'

const Header = () => {
    return (
        <header>
            <a href="#" className='logo'>ByteBox</a>
            <ul className="nav">

                {navListData.map(nav => (
                    <NavListItem key={nav._id} nav={nav} />
                ))}
            </ul>
            <Search />
            <Button icon={<SlLogin />} name="Sign in"/>
        </header>
    )
}

export default Header
