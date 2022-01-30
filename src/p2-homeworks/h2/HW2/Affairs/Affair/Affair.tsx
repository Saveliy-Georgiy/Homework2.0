import React from 'react'
import { AffairType } from '../../HW2'
import s from './Affair.module.css'
import SuperButton from "../../../../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className={s.affairWrapper}>
            {props.affair.name}
            <SuperButton red onClick={deleteCallback}>X</SuperButton>
        </div>
    )
}

export default Affair
