import {useEffect, useRef, useState, Ref} from "react";
import axios from 'axios';

interface Data {
        id: number,
        title: string,
        body: string,
    }


function HackerNews() {

    const block: Ref<HTMLDivElement> = useRef({})
    const [data, setData] = useState<Array<Data>| null>(null)

    useEffect(()=>{
        axios.get<Array<Data>>('https://jsonplaceholder.typicode.com/todos/')
            .then(response => {
            setData(response.data)
        });
    },[])

    console.log(data)

    function show(id) {
    console.log(block.current[id].innerText)
    }

    return(
        <div>{data ? data.map(item => <div key={item.id} onMouseEnter={() => show(item.id)}
                                           ref={el => block.current[item.id] = el}>{item.title}</div>)
            : <p>...loading</p>}</div>
    )
}

export default HackerNews;