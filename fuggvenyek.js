export function megjelenitMatrix(lista){
    let s="";
    for(let i = 0; i < lista.length; i++){
        s+=`<div class="card${i}">`
            s+=`<div class="section${1}">${lista[i].szelesseg}</div>`
            s+=`<div class="section${2}">${lista[i].melyseg}</div>`
            s+=`<div class="section${3}">${lista[i].vizalatt}</div>`
        s+=`</div>`
    }
    return s;
}