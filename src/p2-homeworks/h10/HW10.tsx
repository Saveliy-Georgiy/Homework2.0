import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW10.module.css'
import {useDispatch, useSelector} from "react-redux";
import {loading, LoadingType, selectLoading} from "./bll/loadingReducer";
import {Dispatch} from "redux";
import preloader from './images/preloader.svg'

function HW10() {

    const {isLoading,} = useSelector(selectLoading)
    const dispatch = useDispatch<Dispatch<LoadingType>>()

    //const loading = false

    const setLoading = () => {
        dispatch(loading(true))
        setTimeout(() => {
            dispatch(loading(false))
        }, 1000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            <div className={s.homeworkWrapper}>
                <div>homework 10</div>
            {isLoading
                ? (
                    <div className={s.preloader}><img src={preloader} alt={"...loading"}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
            </div>
            <hr/>
            <hr/>
        </div>
    )
}

export default HW10
