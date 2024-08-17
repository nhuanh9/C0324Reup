import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

export default function DetailProduct() {
    const [data, setData] = useState([]);
    let {x} = useParams();
    useEffect(() => {
        axios.get("http://localhost:3000/students/"+x).then(res => {
            setData(res.data)
        })
    },[])
    return (
        <>
            <h1>Detail Student</h1>
            <h2>Ten: {data.name}</h2>
            <h2>Diem: {data.score}</h2>
            <h2>Mo ta: {data.description}</h2>
            <h2>Hanh dong: {data.action}</h2>
        </>
    )
}