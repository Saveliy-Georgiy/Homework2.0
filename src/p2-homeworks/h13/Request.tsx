import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {RequestsAPI} from "./api/api";

const MyRequest: React.FC = () => {

    const [checked, setChecked] = useState<boolean>(false)
    const [response, setResponse] = useState('')

    const requestHandler = async () => {
        try {
            const data  = await RequestsAPI.testPostRequest(checked)
            setResponse(JSON.stringify(data))
        }
        catch (error: any) {
            console.log({...error});
            console.log(error.response ? error.response.data.errorText : error.message);
            setResponse(JSON.stringify(error))
        }
    }

    return (
        <div>
            <SuperButton onClick={requestHandler} children={"Request"}/>
            <SuperCheckbox checked={checked} onChangeChecked={setChecked}/>
            <div>{response}</div>
        </div>
    );
}

export default MyRequest;
