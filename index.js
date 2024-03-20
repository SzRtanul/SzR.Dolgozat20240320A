import { megjelenitMatrix } from "./fuggvenyek.js"

let array = [
    {
        szelesseg: 13,
        melyseg: 5000,
        vizalatt: true
    },
    {
        szelesseg: 550,
        melyseg: 400,
        vizalatt: false
    },
    {
        szelesseg: 47,
        melyseg: 49,
        vizalatt: false
    },
    {
        szelesseg: 1300,
        melyseg: 23000,
        vizalatt: true
    },
    {
        szelesseg: 1300,
        melyseg: 19000,
        vizalatt: true
    }
];


document.getElementsByClassName("adatok")[0].innerHTML = megjelenitMatrix(array);