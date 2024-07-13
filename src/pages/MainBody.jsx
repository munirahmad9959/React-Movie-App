import React from 'react'
import './mainBody.css'
import Schedule from "./Schedule"
import Trend from './Trend'
import Blog from './Blog'

function MainBody() {
    return (
        <main>
            <Schedule />
            <Trend />
            <Blog />
        </main>
    )
}

export default MainBody
