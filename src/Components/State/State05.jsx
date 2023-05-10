/////Sukurti aplikaciją, kuri turi mygtukus add red, add blue ir reset. Paspaudus add red, prisideda raudonas kvadratas, paspaudus add blue - mėlynas ir t.t. Spaudinėjant prisideda vis daygiau kvadratų. Paspaudus reset viskas išsitrina
import { useState } from "react";

export default function State05 () {
    const [squareList, setSquareList] = useState([])
    const addSquareRed =_=> {
        setSquareList([...squareList, <div className="btn-red"></div>]);
    }
    const addSquareBlue =_=> {
        setSquareList([...squareList, <div className="btn-blue"></div>]);
    }
    const addSquareReset =_=> {
        setSquareList([]);
    }
    
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 30, maxWidth:"80%"}}>
            <button className="button" style={{backgroundColor: "red"}} onClick={addSquareRed}>Add red</button>
            <button className="button " style={{backgroundColor: "blue"}} onClick={addSquareBlue}>Add blue</button>
            <button className="button" onClick={addSquareReset}>Reset</button>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {squareList}
            </div>
        </div>
    )
}