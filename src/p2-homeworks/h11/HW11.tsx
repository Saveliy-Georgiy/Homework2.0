import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from "../h11/HW11.module.css";

function HW11() {
    const min = 0
    const max = 100
    const step = 1
    const [value1, setValue1] = useState(min)
    const [value2, setValue2] = useState(max)
    const value: [number, number] = [value1, value2]
    const setValue = (value: [number, number]) => {
        setValue1(value[0])
        setValue2(value[1])
    }
    return (
        <div>
            <hr/>
            <div className={s.homeworkWrapper}>
                <div>homework 11</div>
                <div className={s.rangeWrapper}>
                    <div className={s.value}>{value1}</div>
                    <SuperRange
                        value={value1}
                        value2={value2}
                        onChangeRange={setValue1}
                        setValue2={setValue2}
                        max={max}
                    />
                </div>
                <div className={s.doubleRangeWrapper}>
                    <div className={s.value}>{value1}</div>
                    <SuperDoubleRange
                        value={value}
                        onChangeRange={setValue}
                        min={min}
                        max={max}
                        step={step}
                    />
                    <div className={s.value}>{value2}</div>
                </div>
            </div>
            <hr/>
            <hr/>
        </div>
    )
}

export default HW11
