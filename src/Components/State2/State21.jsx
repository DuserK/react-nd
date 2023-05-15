////Sukurti aplikaciją, atvaizduojančią žalią stačiakampį (laukas) padalinta į tris stulpelius (stačiakampius) ir tris mygtukus “ąžuolas”, “beržas” ir “uosis”. Paspaudus vieną iš mygtukų žaliame kvadrate atsiranda mažesnis kvadratas su medžio pavadinimu viduje. Svarbu, kad visi medžiai žaliame kvadrate būtų suskirstyti į tris stulpelius pagal medžio pavadinimą.

import { useState } from "react"

export default function State21 () {
    const [azuolas, setAzuolas] = useState([]);
    const [berzas, setBerzas] = useState([]);
    const [uosis, setUosis] = useState([]);

    const azuolas1 =_=>setAzuolas(a =>[...a,"t"]);
    const berzas1 =_=>setBerzas(a =>[...a,"t"]);
    const uosis1 =_=>setUosis(a =>[...a,"t"]);

    return(
            <div className="state-21">
                <div>
                    <button className="btn btn-yellow" onClick={azuolas1}>Ąžuolas</button>
                    <div>
                        {azuolas.map((_,i)=><div className="shape" key={i}>Ąžuolas</div>)}
                    </div>
                </div>
                <div>
                    <button className="btn btn-yellow" onClick={berzas1} >Beržas</button>
                    <div>
                        {berzas.map((_,i)=><div className="shape" key={i}>Beržas</div>)}
                    </div>
                </div>
                <div>
                    <button className="btn btn-yellow" onClick={uosis1}>Uosis</button>
                    <div>
                        {uosis.map((_,i)=><div className="shape" key={i}>Uosis</div>)}
                    </div>
                </div>

            </div>
    )
}