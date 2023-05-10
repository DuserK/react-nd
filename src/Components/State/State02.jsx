////Sukurti aplikaciją, kuri turi mygtukus change ir random bei atvaizduoja apskritimą su random skaičiumi viduje. Paspaudus change mygtuką apskritimas keičiasi į stačiakampį kaip pirmame uždavinyje, o paspaudus random mygtuką, skaičius pasikeičia į rand 5 - 25

import { useState } from "react";

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
  
export default function State02() {
    const [number, setNumber] = useState(rand(5, 25));
    const randNumber =_=> {
        setNumber(rand(5, 25));
    }

    const [shape, setShape] = useState("0");
    const changeShape =_=> {
        setShape(shape === "0" ? "50%" : "0");
    } 
    
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 30}}>
            <div style={{display: "flex", gap: 30}}>
                <button className="button" onClick={changeShape}>CHANGE</button>
                <button className="button" onClick={randNumber}>RANDOM</button>
            </div>

            <div className="btn" style={{borderRadius: shape}}>
                <h2>{number}</h2>
            </div>
        </div>
    )
}