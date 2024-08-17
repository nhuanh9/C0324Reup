import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function ListProduct() {
    const [list, setList] = useState([]);
    useEffect(() => {
        // axios.get("http://localhost:3000/students").then(data => {
        //     setList(data.data)
        // })
    },[])
    return (
        <>
           <div className="row">
               <div className="col-12"><h1>List Student</h1></div>
               {list.map(item => (
                   <>
                       <div className="col-4 mt-2">
                           <div className="card">
                               <div className="card-body">
                                   <h5 className="card-title">{item.name}</h5>
                                   <p className="card-text">{item.score}</p>
                                   <Link to={'/detail/'+item.id}>Xem chi tiet</Link>
                               </div>
                           </div>
                       </div>
                   </>
               ))}
           </div>
        </>
    )
}