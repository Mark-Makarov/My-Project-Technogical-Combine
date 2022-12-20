import axios, { AxiosResponse } from "axios";
import {useEffect, useState} from "react";

interface Rates {
    [key: string]: number;
}

interface APIResponse {
    rates: Rates;
}

function CryptoBoard() {

    const [data, setData] = useState<AxiosResponse<APIResponse> | null>(null);

    useEffect(()=>{
    axios.get('https://openexchangerates.org/api/latest.json?app_id=b07e13e8fa9946598b7a2f0564599590')
        .then(response => {setData(response)})
        console.log(data)
    },[])


    return(
        <>
            {data != null ? (
                Object.keys(data.data.rates).map((rate) => (
                    <div key={rate}>{`${rate}: ${data.data.rates[rate]}`}</div>
                ))
            ) : (
                "Loading..."
            )}
        </>
    );
}

export default CryptoBoard;
