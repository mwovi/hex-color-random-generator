const hexnumbers = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn = document.querySelector('.btn');
const body = document.querySelector('body');
const hex = document.querySelector('.hex');




btn.addEventListener('click',addHex);

function addHex(){
    let hexCol ="#";

    for(let i=0; i<6; i++){
        let random = Math.floor(Math.random()*hexnumbers.length);
        hexCol += hexnumbers[random];
        //console.log(hexCol);
    }
    body.style.backgroundColor = hexCol;
    hex.innerHTML = hexCol;
}
