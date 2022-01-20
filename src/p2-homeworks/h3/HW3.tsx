import React, {useState} from 'react'
import {v1} from 'uuid'
import GreetingContainer from './GreetingContainer'

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
            homework 3
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
        </div>
    )
}

export default HW3
