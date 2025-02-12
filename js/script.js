// SCRIPT
// console.log('prova');


// SNACK 1 - Tramite una funzione calcoliamo l'area di un rettangolo moltiplicando base per altezza

// Definizione della funzione dove vado a calcolare la moltiplicazione base * altezza
function calcoloArea(b, h) { // parametro della funzione al momento non ha nessun valore
    return b * h;
}


// Dichiarazione delle variabili che fanno riferimento agli elementi del DOM 

// recupero il bottone
let btn_area = document.getElementById('btn-area');
// recupero l'elemento che restituisce un input a video
let msg_area = document.getElementById('msg-area');


// Evento click al bottone
btn_area.addEventListener('click', function () {
    // nell'evento recupeo gli elementi di input e ne catturo il valore (converto il dato in valore numerico con la funzione parseInt);
    let input_base = parseInt(document.getElementById('input-base').value, 10);
    let input_altezza = parseInt(document.getElementById('input-altezza').value, 10);

    // nell'evento chiamo la funzione calcoloArea e le passo un valore reale ovvero i dati inseriti negli input
    let risultatoArea = calcoloArea(input_base, input_altezza);

    // Inietto tramite la proprietà innerText il riusltato dell'operazione all'elemento che mostrerà un messaggio a video
    msg_area.innerText = risultatoArea;
});