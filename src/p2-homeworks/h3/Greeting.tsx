import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

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

    return (
        <div className={s.greetingWrapper}>
            <SuperInputText
                error={error}
                value={name}
                onChange={setNameCallback}
                onKeyPress={onKeyPressAddUser}
                placeholder="enter your name..."/>
            <SuperButton onClick={addUser}>
                add
            </SuperButton>
            <span className={s.counter}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
