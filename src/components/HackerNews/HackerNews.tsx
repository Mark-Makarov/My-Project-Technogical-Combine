import {useEffect, useState} from "react";
import axios from 'axios';

interface Data {
        id: number,
        title: string,
        body: string
    }


function HackerNews() {

    const [data, setData] = useState<Array<Data>| null>(null)

    useEffect(()=>{
        axios.get<Array<Data>>('https://jsonplaceholder.typicode.com/todos/')
            .then(response => {
            setData(response.data)
        });
    },[])

    setTimeout(() => {console.log(data)}, 1000)

    return(
        <div>{data ? data.map(item => <div key={item.id}>{item.title}</div>)
            : <p>...loading</p>}</div>
    )
}

export default HackerNews;