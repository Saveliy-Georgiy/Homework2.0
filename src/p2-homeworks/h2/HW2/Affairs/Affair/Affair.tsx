import React from 'react'
import { AffairType } from '../../HW2'
import s from './Affair.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className={s.affairWrapper}>

            {props.affair.name}

            <button className={s.button} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair