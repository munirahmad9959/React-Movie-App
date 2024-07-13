import React from 'react'
import { IoArrowUpOutline } from "react-icons/io5";
import './backToTopBtn.css'

function BackToTopBtn({ scroll }) {
    const backToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <a
            className={`back-to-top ${scroll > 100 ? 'active' : undefined}`} onClick={backToTop}>
            <IoArrowUpOutline className='ion-icon' />
        </a>
    )
}

export default BackToTopBtn
