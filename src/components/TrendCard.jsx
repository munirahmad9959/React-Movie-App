import React from 'react'
import './trendCard.css'
import { SlCalender } from "react-icons/sl";

function TrendCard({ slide }) {
    return (
        <div className='trend-card'>
            <img className='img-fluid' src={slide.previewImg} alt="Preview Img" />
            <a href="#">Add to Calender <SlCalender /></a>
        </div>
    )
}

export default TrendCard
