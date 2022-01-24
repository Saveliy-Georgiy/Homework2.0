import React from 'react'
import Message from "./Message";
import s from './HW1.module.css'

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            <div className={s.homeworkWrapper}>
                <div>homework 1</div>
                <div className={s.messageWrapper}>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
                </div>
            </div>
            <hr/>
            <hr/>
        </div>
    )
}

export default HW1
