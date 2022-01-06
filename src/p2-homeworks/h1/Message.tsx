import React from 'react'
import styles from "./Message.module.css";

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessagePropsType) {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.messageWrapper}>
                <div className={styles.avatarWrapper}><img src={props.avatar} className={styles.avatar}/></div>
                <div className={styles.message}>
                    <div className={styles.name}>{props.name}</div>
                    <div className={styles.text}>{props.message}</div>
                    <div className={styles.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
