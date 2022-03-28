import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {changeTheme, selectTheme, ThemeReducerActionsType} from "./bll/themeReducer";
import {Dispatch} from "redux";

const themes = ['dark', 'red', 'some'];

const HW12: React.FC = () => {

    const {
        theme,
    } = useSelector(selectTheme)

    const dispatch = useDispatch<Dispatch<ThemeReducerActionsType>>()

    const onChangeCallback = (theme: string) => {
        dispatch(changeTheme(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <div className={s.homeworkWrapper}>
                <SuperRadio
                    name={'radio'}
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeCallback}
                />
                <span className={s[theme + '-text']}>
                <div>homework 12</div>
            </span>
            </div>
            <hr/>
        </div>
    );
}

export default HW12;
