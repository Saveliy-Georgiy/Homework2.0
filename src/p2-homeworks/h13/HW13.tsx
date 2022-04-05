import React from "react";
import s from "./HW13.module.css";
import MyRequest from "./Request";


const HW13: React.FC = () => {


    return (
        <div >
            <hr/>
            <div className={s.homeworkWrapper}>
                <div>homework 13</div>
                <MyRequest/>
            </div>
            <hr/>
        </div>
    );
}

export default HW13;
