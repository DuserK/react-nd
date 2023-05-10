/////Sukurti aplikaciją, kuri turi mygtukus plus ir minus, bei atvaizduoja skaičių 0. Paspaudus plus mygtuką, skaičius padidėja 1, o paspaudus minus- sumažėja 3
import { useState } from "react";

export default function State03 () {
    const [ltBiudzetas, setNumber] = useState(0);
    const defliacija =_=> {
        setNumber(ltBiudzetas + 1);
    }
    const infliacija =_=> {
        setNumber(ltBiudzetas - 3);
    }

    return( 
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 20, maxWidth:"80%"}}>
        <button className="button" style={{backgroundColor:"yellow", color:"black"}} onClick={defliacija}>Plus 1</button>
        <div className="button"  style={{backgroundColor:"green", color:"black"}}>{ltBiudzetas}</div>
        <button className="button"  style={{backgroundColor:"red", color:"black"}} onClick={infliacija}>Minus 3</button>
    </div>
    )
}