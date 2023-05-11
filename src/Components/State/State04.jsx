/////Sukurti aplikaciją, kuri turi mygtuką add, kurį paspaudus vieną kartą atsiranda mėlynas kvadratas, paspaudus dar kartą- dar vienas ir t.t.
import { useState } from "react";

export default function State04 () {
    const [squareList, setSquareList] = useState([])
    // const addSquare =_=> {
    //     setSquareList([...squareList, <div className="btn-blue"></div>]);
    // } go to jail
    
    const addSquare =_=> {
        const item = <div className="shape btn-blue" style={{margin: "10px"}}></div>;
        setSquareList(s =>[...s,item]);
    }
    return (
        <>
        <div style={{display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    gap: 30, 
                    maxWidth:"80%"}}>
            <button className="btn btn-blue" onClick={addSquare}>ADD</button>

            <div style={{display: "flex", 
                        flexWrap: "wrap",
                        justifyContent:"center"}}>
                {squareList}
            </div>
        </div>
        </>
    )
}