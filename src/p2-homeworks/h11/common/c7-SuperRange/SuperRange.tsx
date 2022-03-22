import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    value?: number
    value2?: number
    onChangeRange?: (value: number) => void
    setValue2?: (value: number) => void
    max?: number
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className, value, value2, max, setValue2,
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e) // сохраняем старую функциональность

        if (onChangeRange) {
            if (value && value2 && setValue2) { //если этот ползунок связан с двойным
                if (value < value2) {
                    onChangeRange(+e.currentTarget.value) // обычный случай
                } else { // двигай сразу два ползунка
                    setValue2(+e.currentTarget.value)
                    onChangeRange(+e.currentTarget.value)
                } //правда оно двигает и вперед и назад, пока не переключишься на второй ползунок, но тут задача не стандартная и непонятно как надо
                //и еще- ломается если два ползунка на 0, хотя должно все норамльно быть, не могу понять этого поведения
            } else {
                onChangeRange(+e.currentTarget.value)
            }
        }
    }

    const finalRangeClassName = `${s.range} ${className ? className : ''}`

    return (
        <>
            <input
                type={'range'}
                onChange={onChangeCallback}
                className={finalRangeClassName}
                value={value}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
        </>
    )
}

export default SuperRange
