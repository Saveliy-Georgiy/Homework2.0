import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    onKeyPressAddUser: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, onKeyPressAddUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.correct

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onKeyPressAddUser}/>
            <span>{error}</span>
            <button onClick={addUser} className={s.button}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
