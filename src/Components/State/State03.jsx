/////Sukurti aplikaciją, kuri turi mygtukus plus ir minus, bei atvaizduoja skaičių 0. Paspaudus plus mygtuką, skaičius padidėja 1, o paspaudus minus- sumažėja 3
import { useState } from "react";

export default function State03 () {
    const [number, setNumber] = useState(0);
//     const defliacija =_=> {
//         setNumber(count + 1);
//     }
//     const infliacija =_=> {
//         setNumber(count - 3);
//     }kalejimas iki gyvos galvos, uz 6-10 eil
    const count = c =>setNumber(n => n + c);

//     return( 
//     <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 20, maxWidth:"80%"}}>
//         <button className="button" style={{backgroundColor:"yellow", color:"black"}} onClick={defliacija}>Plus 1</button>
//         <div className="button"  style={{backgroundColor:"green", color:"black"}}>{ltBiudzetas}</div>
//         <button className="button"  style={{backgroundColor:"red", color:"black"}} onClick={infliacija}>Minus 3</button>
//     </div>

//     ) kalejimo isvenga, bet atrodo baisiai

    return (
        <>
        <div style={{display:"flex",
                    gap: "40px",
                    flexDirection:"row",
                    alignItems:"center"}}>

            <button className="btn btn-green" onClick={ _ => count(1) }>+1</button>
            <div className="btn">{number}</div>
            <button className="btn btn-red" onClick={ _ => count(-3)}>-3</button>
        </div>
        </>
    )

}