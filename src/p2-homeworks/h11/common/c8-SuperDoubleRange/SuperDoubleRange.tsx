import React from 'react'
import {Slider} from "@mui/material";
import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    setValue1?: (value: number) => void
    setValue2?: (value: number) => void
    min?: number
    max?: number
    step?: number

}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
        min, max, step,
        ...restProps
    }
) => {

    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as [number, number])
    }

    return (
        <div className={s.slider}>
            <Slider
                min={min}
                max={max}
                step={step}
                onChange={handleChange}
                valueLabelDisplay="auto"
                disableSwap
                sx={{ width: 250}}
                {...restProps}
            />
        </div>
    )
}

export default SuperDoubleRange
