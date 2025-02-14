// SCRIPT
// console.log('prova');




// SNACK 1 - Tramite una funzione calcoliamo l'area di un rettangolo moltiplicando base per altezza

// Definizione della funzione dove vado a calcolare la moltiplicazione base * altezza
function calcoloArea(b, h) { // parametro della funzione al momento non ha nessun valore
    return b * h;
}


// Dichiarazione delle variabili che fanno riferimento agli elementi del DOM 

// recupero il bottone start
let btn_area = document.getElementById('btn-area');
// recupero il bottone reset
let reset_btn_area = document.getElementById('reset-btn-area');
// recupero l'elemento che restituisce un input a video
let msg_area = document.getElementById('msg-area');


// Evento click al bottone
btn_area.addEventListener('click', function () {
    // nell'evento recupeo gli elementi di input e ne catturo il valore (converto il dato in valore numerico con la funzione parseInt);
    let input_base = parseInt(document.getElementById('input-base').value, 10);
    let input_altezza = parseInt(document.getElementById('input-altezza').value, 10);

    // svuoto le classi assegnate al messaggio per evitare conflitti in base alla condizione
    msg_area.classList = '';

    // Eseguo un controllo sul dato inserito dall'utente
    if (isNaN(input_base) || isNaN(input_altezza)) { // operatore binario OR almeno una delle due condizioni deve essere vera
        msg_area.innerText = 'Inserisci un dato valido';
        msg_area.classList.add('text-danger')
        return;
    };

    // nell'evento chiamo la funzione calcoloArea e le passo un valore reale ovvero i dati inseriti negli input
    let risultatoArea = calcoloArea(input_base, input_altezza);

    // Inietto tramite la proprietà innerText il riusltato dell'operazione all'elemento che mostrerà un messaggio a video (template literal)
    msg_area.innerText = `L'area calcolata è di ${risultatoArea} cm.`;
    msg_area.classList.add('text-success');
});

// Logica per il reset 
reset_btn_area.addEventListener('click', function () {
    // svuoto i campi di input
    document.getElementById('input-base').value = '';
    document.getElementById('input-altezza').value = '';

    // svuoto il messaggio
    msg_area.innerText = '';
    msg_area.classList = '';
});

// ------------------------------------------------------------------------------------

// SNACK 2 - Definire una funzione che prenda un parametro numerico e restiuisca true se il numero è pari, altrimenti false se il numero è dispari