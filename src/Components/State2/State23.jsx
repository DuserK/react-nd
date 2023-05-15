/////Sukurti aplikaciją su vienu mygtuku “+” ir pradiniu skaičiumi 0. Paspaudus mygtuką skaičius didėtų vienetu. Panaudoti localStorage ir padaryti taip, kad skaičiavimai kiekvieną kartą perkrovus puslapį prasidėtų ne nuo 0, o nuo prieš tai buvusio skaičiaus

import { useState } from "react";


export default function State23 () {

    const init = localStorage.getItem('count') !== null ? JSON.parse(localStorage.getItem('count')) : 0 ;

    const [sum, setSum] = useState(init);
    
    const add = _ => setSum(s => s + 1);

    localStorage.setItem('count', (sum));



    return (
        <>
            <h1>{sum}</h1>

            <button className="btn btn-yellow" onClick={add}>add 1</button>

        </>

    );


}