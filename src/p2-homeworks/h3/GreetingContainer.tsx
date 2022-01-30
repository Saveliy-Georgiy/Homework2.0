import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = (
    {
        users,
        addUserCallback
    }) => {

    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const str = e.currentTarget.value
        setName(str)
        setError('')
    }

    const addUser = () => {
        const rusName = /^[а-я-А-Я]{3,15}$/.test(name);
        const englishName = /^[a-zA-Z]{3,15}$/.test(name); // перенес проверку имени сюда, при нажатии на клавишу add
        if (rusName || englishName) {
            setName('')
            addUserCallback(name)
            alert(`Hello  ${name}!`)
        } else {
            setError('incorrect name')
            setName('')
        }
    }

    const onKeyPressAddUser = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === "Enter" && addUser()
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onKeyPressAddUser={onKeyPressAddUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
