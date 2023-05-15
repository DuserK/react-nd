/////Sukurti aplikaciją su vienu mygtuku “pridėti”. Paspaudus mygtuką, atsirastų juodas kvadratas su mygtuku “+” ir skaičiumi 0 viduje. Paspaudus kelis kartus mygtuką pridėti atsirastų keli tokie juodi kvadratai, paspaudus 3 - atsirastų 3 ir t.t. Spaudant mygtuką “+” kiekviename iš juodų kvadratų jų viduje esantis skaičius didėtų vienetu (kiekviename kvadrate atskirai).
import { useState } from "react";

function SubState() {
    const [count, setCount] = useState(0);
    const add =_=> setCount(s =>s+1);
    return (
             <div className="substate">
                <button className="btn btn-yellow" onClick={add}>Add</button>
                <div>{count}</div>
             </div>
        )
}
export default function State22 () {
    const [rect, setRect] = useState ([]);
    const add = _=> setRect(r => [...r, <SubState />]);
    return (
        <div className="state-22">
            <button className="btn btn-blue" onClick={_=>add()}>ADD</button>
            <div className="box">
                    {
                rect.map((a,i)=><div className="shape" key={i}>{a}</div>)
                }
            </div>  
        </div>
    )
}