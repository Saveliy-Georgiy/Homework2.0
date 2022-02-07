import React from 'react'
import {Route, Routes} from 'react-router-dom'
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/Junior+";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior+',
}

function HomeworkRoutes() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<PreJunior/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                <Route element={<Error404/>}/> //не работает (видимо потому что exact убрали)
                // /Homework2.0#/ начальный путь лежит такой, может из-за этого?...
            </Routes>
        </div>
    )
}

export default HomeworkRoutes
