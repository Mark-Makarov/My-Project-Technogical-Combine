import axios from "axios";
import {useEffect, useState} from "react";


function CryptoBoard() {

    const [data, setData] = useState<Array>(null)

    useEffect(()=>{
    axios.get<Array>('https://api.coingecko.com/api/v3/ping')
        .then(response => {setData(response)})
    },[])

    console.log(data)

    return(
    <div>Hi</div>
    )
}

export default CryptoBoard;
