/////Sukurti aplikaciją, kuri turi mygtuką add, kurį paspaudus vieną kartą atsiranda mėlynas kvadratas, paspaudus dar kartą- dar vienas ir t.t.
import { useState } from "react";

export default function State04 () {
    const [squareList, setSquareList] = useState([])
    const addSquare =_=> {
        setSquareList([...squareList, <div className="btn-blue"></div>]);
    }
    
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 30}}>
            <button className="button" onClick={addSquare}>ADD</button>
            <div style={{display: "flex"}}>
                {squareList}
            </div>
        </div>
    )
}