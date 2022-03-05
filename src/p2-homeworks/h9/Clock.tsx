import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date?.toTimeString().replace(/ .*/, '');
    const stringDate = date && String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear();

    return (
        <div className={s.mainWrapper}>
            <div className={s.clockWrapper}>
                <div className={s.time}
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}
                >
                    {stringTime}
                </div>

                {show && (
                    <div className={s.date}>
                        {stringDate}
                    </div>
                )}
            </div>
            <div className={s.buttonWrapper}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop} red>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
