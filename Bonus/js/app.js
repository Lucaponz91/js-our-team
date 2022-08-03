// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. 
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.


const ourTeam = [
    {
        nome : 'Wayne Barnett',
        ruolo : 'Founder & CEO',
        pic : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome : 'Angela Caroll',
        ruolo : 'Chief Editor',
        pic : 'angela-caroll-chief-editor.jpg'
    },
    {
        nome : 'Walter Gordon',
        ruolo : 'Office Manager',
        pic : 'walter-gordon-office-manager.jpg'
    },
    {
        nome : 'Angela Lopez',
        ruolo : 'Social Media Manager',
        pic : 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome : 'Scott Estrada',
        ruolo : 'Developer',
        pic : 'scott-estrada-developer.jpg'
    },
    {
        nome : 'Barbara Ramos',
        ruolo : 'Graphic Designer',
        pic : 'barbara-ramos-graphic-designer.jpg'
    }
]

// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto

console.log(ourTeam)

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

let teamContainer = document.querySelector(".team_container");

for (banane in ourTeam) {
    teamContainer.innerHTML += `
    <div class="team_card">
        <img src="../img/${ourTeam[banane].pic}">
        <h3>${ourTeam[banane].nome}</h3>
        <h4>${ourTeam[banane].ruolo}</h4>
    </div> 
    `;
}