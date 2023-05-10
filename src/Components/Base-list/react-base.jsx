//// Pirma uzduotis: Sukurti komponentą, kuris užrašytų “LABAS, ZUIKI!”. Raidžių spalva pink. Spalva tekstui nurodoma komponento viduje naudojant style.
function Pirma() {
    return <h2 style={{color: "pink"}}>LABAS, ZUIKI</h2>
}
////

//// Antra uzduotis: Sukurti komponentą, kuris gauną vieną props. Props yra bet koks tekstas, kuris komponente atvaizduojamas h1 tage.

function Antra({tekstas}) {
    return <h1>{tekstas}</h1>
}
////


//// Trecia uzduotis: Sukurti komponentą rodantį tekstą h1 tage- “Zebrai ir Bebrai”, kuris gauna vieną props, kuris lygus 1 arba 2. Jeigu props lygus 1 tekstas nudažomas mėlynai, o jeigu 2 - raudonai.

function Trecia ({number}) {
    let colored = "";
        if (number === 1) {
          colored = "blue"
    } else if (number === 2) {
        colored = "red"
    }
    return <h1 style= {{color: colored}}>Zebrai ir Bebrai</h1>
}
////

//// Ketvirta uzduotis: Sukurti komponentą, kuris gauna du props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage.

function Ketvirta({tekstas1, tekstas2}) {
    return (
    <div>
        <h1>{tekstas1}</h1>
        <h2>{tekstas2}</h2>
    </div>
    )
}

////

//// Penkta uzduotis:Sukurti komponentą, kuris gauna tris props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage, o trečias yra spalva, kuria nudažomi abu tekstai.
function Penkta ({tekstas1, tekstas2, spalva}) {
    return (
    <div>
        <h1 style = {{color:spalva}}>{tekstas1}</h1>
        <h2 style = {{color:spalva}}>{tekstas2}</h2>
    </div>
    )
}
////


export {Pirma, Antra, Trecia, Ketvirta, Penkta}