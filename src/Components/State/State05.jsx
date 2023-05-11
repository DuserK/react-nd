/////Sukurti aplikaciją, kuri turi mygtukus add red, add blue ir reset. Paspaudus add red, prisideda raudonas kvadratas, paspaudus add blue - mėlynas ir t.t. Spaudinėjant prisideda vis daygiau kvadratų. Paspaudus reset viskas išsitrina
import { useState } from "react";

export default function State05 () {
    const [squareList, setSquareList] = useState([]);

    const addSquare = s => setSquareList(sq =>[...sq,s]);
    return (
        <>
        <div style={{display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    gap: 30, 
                    maxWidth:"80%"}}>
            <button className="btn btn-blue" onClick={_ =>addSquare('B')}>ADD</button>
            <button className="btn btn-red" onClick={_=>addSquare('R')}>ADD</button>

            <div style={{display: "flex", 
                        flexWrap: "wrap",
                        justifyContent:"center"}}>
                {squareList.map((a, i) => 
                <div className="shape btn-blue" style={{
                    backgroundColor: a === "R"? "#e74c3c" : "#3498db",
                    margin: "10px"
                }} key={i}></div>
                )}
            </div>
        </div>
        </>
    )
}