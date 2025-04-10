// Recupero gli elementi del DOM che mi occorrono
const listEmails = document.getElementById('emailsList');

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

for(let i=0; i<10; i++){
    // Questo ciclo for ripete 10 volte una richiesta all’API.
    // Sto dicendo:"Fammi 10 richieste e per ognuna, prendi l'email e mettila nella lista."
    axios.get(endpoint).then((resp) => {
        // Con Axios faccio una richiesta HTTP GET verso l’API.
        // Quando il server risponde, entro dentro la funzione .then().
        const li = `<li>${resp.data.response}</li>`
        listEmails.innerHTML += li
    })
}