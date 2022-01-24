import React, {useState} from 'react'
import {v1} from 'uuid'
import GreetingContainer from './GreetingContainer'
import s from './HW3.module.css'

export type UserType = {
    _id: string
    name: string
}

function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: string) => {
        const user = {_id: v1(), name: name}
        setUsers([user, ...users])
    }

    return (
        <div>
            <hr/>
            <div className={s.homeworkWrapper}>
                <div>homework 3</div>
                <div className={s.greetingContainer}>
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default HW3
