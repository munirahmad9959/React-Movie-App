import React from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";
import './footerNavItem.css'

function FooterNavItem({ name }) {
    return (
        <li>
            <IoChevronForwardOutline className='ion-icon' />{' '}
            <a href="#">{name}</a>
        </li>

    )
}

export default FooterNavItem
