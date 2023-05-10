///// Pirma uzduotis: Sukurti aplikaciją, kuri turi mygtuką change ir atvaizduoja apskritimą. Paspaudus mygtuką change apskritimas turi pavirsti į kvadratą, o paspaudus dar kartą vėl pavirsti apskritimu.
import { useState } from "react";
export default function State01() {

    const [radius, setRadius] = useState("0%");

    const buttonToggle = _ => {
       setRadius(radius === "50%" ? "0%": "50%");
    }
    return (
         <button className="btn" style = {{borderRadius: radius}} onClick={buttonToggle}> Change</button>  
    );
}

