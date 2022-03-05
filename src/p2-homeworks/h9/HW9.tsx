import React from 'react'
import Clock from './Clock'
import s from './HW9.module.css'

function HW9() {
    return (
        <div>
            <hr/>
            <div className={s.homeworkWrapper}>
                <div>homework 9</div>
                <Clock/>
            </div>
            <hr/>
            <hr/>
        </div>
    )
}

export default HW9
