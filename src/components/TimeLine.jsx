import React from 'react'
import data from '../assets/data.json'

const TimeLine = () => {
    return (
        <div id='timeline'>
            <div className="timeLineBox">
                {data.projects.map((item, index) => (
                    <TimeLineItem
                        heading={item.title}
                        text={item.date}
                        index={index}
                        key={item.title}
                    />
                ))}
            </div>
        </div>
    )
}

const TimeLineItem = ({ heading, text, index }) => <div className={`timeLineItem ${index % 2 === 0 ? "leftTimeLine" : "rightTimeLine"}`}>
    <div>
        <h2>{heading}</h2>
        <p>{text}</p>
    </div>
</div>

export default TimeLine