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

// Dichiarazione della funzione che stabilisce se il numero è pari o dispari

function pariDispari(number) {
    // condizione per stabilire se il numero è pari o dispari
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
};




// Definizione delle variabili che fanno riferimento agli elementi del DOM
let btn_pariDispari = document.getElementById('btn-pari-dispari');
let msg_pariDispari = document.getElementById('msg-pari-dispari');

// Evento click al bottone
btn_pariDispari.addEventListener('click', function () {
    // recupero l'input dal DOM e catturo il suo valore
    let input_pariDispari = parseInt(document.getElementById('input-pari-dispari').value, 10);

    // svuoto le classi del messaggio per evitare conflitti
    msg_pariDispari.classList = '';

    // faccio un controllo sul dato inserito 
    if (isNaN(input_pariDispari)) {
        msg_pariDispari.innerText = 'Inserire un dato valido';
        msg_pariDispari.classList.add('text-danger');
        return;
    };

    // Richiamo la funzione e le assegno un valore reale
    let result_pariDispari = pariDispari(input_pariDispari);

    // controllo in base alla condizione restituisco un messaggio
    if (result_pariDispari) {
        msg_pariDispari.innerText = `Il numero ${input_pariDispari} è pari`;
        msg_pariDispari.classList.add('text-success');
    } else {
        msg_pariDispari.innerText = `Il numero ${input_pariDispari} è dispari`;
        msg_pariDispari.classList.add('text-primary');
    }
});


// Dichiara una funzione che prenda un parametro (valore numerico) e calcola il suo fattoriale

// Dichiarazione della funzione
function calcoloFattoriale(fattoriale) {
    // inizializzata variabile contatore a 1
    let count = 1;

    // ciclo for 
    for (let i = fattoriale; i >= 2; i--) { // moltiplico il numero 5 per la variabile contatore
        count *= i;
        // per ogni iterazione creo un elemento li
        let li_fattoriale = document.createElement('li');
        li_fattoriale.innerText = `${i} x ${count / i} = ${count}`;

        // appendo alla lista i list item
        ul_fattoriale.appendChild(li_fattoriale);

        ul_fattoriale.classList.add('list-unstyled');

    }

    return count;
};



// Dichiarazione delle variabili che recuperano gli elementi dal DOM
let btn_fattoriale = document.getElementById('btn-fattoriale');
let msg_fattoriale = document.getElementById('msg-fattoriale');
let ul_fattoriale = document.getElementById('ul-fattoriale');

btn_fattoriale.addEventListener('click', function () {
    // campo input e valore 
    let input_fattoriale = parseInt(document.getElementById('input-fattoriale').value, 10);

    // svuoto le classi del messaggio
    msg_fattoriale.classList = '';

    // controllo sul dato inserito
    if (isNaN(input_fattoriale) || input_fattoriale <= 0 || input_fattoriale > 10) {
        msg_fattoriale.innerText = `Inserire un dato valido`;
        ul_fattoriale.innerText = '';
        msg_fattoriale.classList.add('text-danger');
        return;
    }

    // richiamo la funzione e le passo un valore reale
    let risultatoFattoriale = calcoloFattoriale(input_fattoriale);

    msg_fattoriale.innerText = `Il fattoriale del numero ${input_fattoriale} è ${risultatoFattoriale};`;
    msg_fattoriale.classList.add('text-success');
});


// Scrivi una funzione che prenda una stringa come parametro e restituisca il numero di vocali presenti nella stringa filtrando le doppie


// Dichiarazione della funzione per tenere traccia delle vocali uniche in una parola
function countVocals(vocali) {
    // definisco un array di vocali
    let array_vocali = ["a", "e", "i", "o", "u"];
    // definisco un array vuoto che salva le vocali
    let unique_vocale = [];
    // converto la stringa in minuscolo per non distinguere tra maiuscole e minuscole
    vocali = vocali.toLowerCase();

    // ciclo il parametro della funzione (parola ricevuta dall'input)
    for (let i = 0; i < vocali.length; i++) {
        // controllo se l'array delle vocali contiene il valore i-esimo della parola passata dall'input
        if (array_vocali.includes(vocali[i]) && !unique_vocale.includes(vocali[i])) {
            // se la vocale è nell'array e non è già stata aggiunta, la metto nell'array delle vocali uniche
            unique_vocale.push(vocali[i]);
        }
    }

    // restituisco il numero di vocali uniche
    return unique_vocale.length;
}

// Dichiarazione delle variabili
let btn_vocali = document.getElementById('btn-vocali');
let msg_vocali = document.getElementById('msg-vocali');

// evento click al bottone
btn_vocali.addEventListener('click', function () {
    let input_vocali = document.getElementById('input-vocali').value;

    // chiamo la funzione e le passo un valore reale
    let funzioneVocali = countVocals(input_vocali);

    msg_vocali.innerText = `La parola "${input_vocali}" contiene ${funzioneVocali} vocali uniche.`;
});


// L'utente inserisce prima 'pari' o dispari, poi inserisce un numero da 1 a 5, generiamo un numero random per il computer (sempre da 1 a 5), sommiamo e stabiliamo se la somma e pari o dispari

// Definisco una funzione che genera un numero random per il pc
function pcRandomNumber() {
    return Math.floor(Math.random() * 5 + 1);
}

console.log(pcRandomNumber());



