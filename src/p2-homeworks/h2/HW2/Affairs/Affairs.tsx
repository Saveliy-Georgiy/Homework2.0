import React, {Dispatch, SetStateAction} from 'react'
import Affair from './Affair/Affair'
import {AffairType, FilterType} from '../HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter("all")}
    const setHigh = () => {props.setFilter("high")}
    const setMiddle = () => {props.setFilter("middle")}
    const setLow = () => {props.setFilter("low")}

    return (
        <div>
            {mappedAffairs}
            <div className={s.buttonWrapper}>
            <button className={s.button} onClick={setAll}>All</button>
            <button className={s.button} onClick={setHigh}>High</button>
            <button className={s.button} onClick={setMiddle}>Middle</button>
            <button className={s.button} onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
