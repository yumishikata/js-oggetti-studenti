$(function() {
var studenteSingolo = {
    "nome": 'Yumi',
    "cognome": 'Shikata',
    "età": 25
}

for(var key in studenteSingolo){
    console.log(key + ': ' + studenteSingolo[key]);
}

var studenti = 
[
    {
        "nome": 'Nami',
        "cognome": 'Shikata',
        "età": '4'

    },
    {
        "nome": 'Sissi',
        "cognome": 'Shikata',
        "età": '14'

    },
    {
        "nome": 'Kenta',
        "cognome": 'Shikata',
        "età": '20'

    },
    {
        "nome": 'Norio',
        "cognome": 'Shikata',
        "età": '59'

    }
]

for(var key in studenti){
    console.log(studenti[key]['nome'] + ' ' + studenti[key]['cognome']);

}

var nuovoStudente = {
    "nome": prompt('Inserisci il tuo nome: '),
    "cognome": prompt('Inserisci il tuo cognome: '),
    "età": prompt('Inserisci la tua età: ')
}

studenti.push(nuovoStudente);

for (var key in studenti){
    console.log(studenti[key]['nome'] + ' ' + studenti[key]['cognome']);
}

});