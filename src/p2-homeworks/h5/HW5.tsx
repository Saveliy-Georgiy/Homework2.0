import React from 'react'
import Header from './Header'
import HomeworkRoutes from './HomeworkRoutes'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            <HashRouter>
                <Header/>
                <HomeworkRoutes/>
            </HashRouter>
        </div>
    )
}

export default HW5
