// const dogs = ['avigalvis', 'Bobikas', 'šuo', 'šunius', 'kudlius', 'Šarikas'];
const dogs = [
    {id:1, name:'avigalvis'},
    {id:2, name:'Bobikas'},
    {id:3, name:'šuo'},
    {id:4, name:'šunius'},
    {id:5, name:'kudlius'},
    {id:6, name:'Šarikas'}
]
//// Pirma uzduotis: Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame kvadrate.
function DogsInSquare () {
    let style = {
        width: 100,
        height: 50,
        border: "5px solid green",
        margin: 5
    }
    const dogsList = dogs.map(dog => <p key={dog.id} style={{...style}}>{dog.name}</p>);
    return <ul>{dogsList}</ul>
}
////// Antra  uzduotis: Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame apskritime. Šunys turi būti išrūšiuoti nuo ilgiausio žodžio iki trumpiausio, o apskritimai sunumeruoti nuo 1 iki galo.

function DogsInCircle() {
    let style2 = {
        width: 100,
        height: 50,
        border: "5px solid red",
        borderRadius: "50%",
        margin: 5,
    }
    const dogsList = dogs.sort((a,b) => a.length - b.length).map(dog => <li key={dog.id}style={{...style2}}>{dog.name}</li>);
    return <ol>{dogsList}</ol>
}
/////Trecia uzduotis: Atvaizduoti masyvą dogs. Poriniuose indeksuose esančius šunis atvaizduoti kvadratuose, neporinius apskritime.
function DogsInFigures() {
    let style = {
        width: 100,
        height: 50,
        border: "5px solid green",
        margin: 5
    }
    let style2 = {
        width: 100,
        height: 50,
        border: "5px solid red",
        borderRadius: "50%",
        margin: 5,
    }
    const dogsList = dogs.map((dog,i) => {
        if (i % 2 ===0) {
          return  <li key={dog.id} style={{...style}}>{dog.name}</li>
        } else {
            return <li key={dog.id} style={{...style2}}>{dog.name}</li>
        }
    })
    return <div>{dogsList}</div>
}
/////

///// Ketvirta uzduotis: Atvaizduoti masyvą dogs. Šunis, kurie prasideda didžiąja raide praleisti (neatvaizduoti).
function DogsCapi() {
    const dogsList = dogs.filter(dog => dog.name[0] === dog.name[0].toLowerCase()).map(dog => <li key={dog.id}>{dog.name}</li>)
        return  <div>{dogsList}</div>
}

/////

///// Penkta uzduotis: Naudojant masyvą dogs atvaizduoti skaičius, kurie yra lygūs žodžių masyve ilgiui. Skaičius, didesnius nei 6 atvaizduoti žaliai, kitus raudonai.
function DogsColor (params) {
    const dogsList = dogs.map(dog => {
        if (dog.name.length > 6) {
          return  <li key={dog.id} style={{color:'green'}}>{dog.name.length}</li>
        } else {
            return <li key={dog.id} style={{color:'red'}}>{dog.name.length}</li>
        }
    })
    return <div>{dogsList}</div>
}
/////
export {DogsInSquare,DogsInCircle, DogsInFigures, DogsCapi, DogsColor}