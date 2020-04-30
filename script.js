// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLESEC = document.querySelector("#second");
const AIGUILLEMIN = document.querySelector("#minute");
 
function demarrerLaMontre() {
    let datActuelle = new Date();
    console.log(datActuelle);

    let seconds = (datActuelle.getSeconds()) / 60;
    let minutes = (datActuelle.getMinutes()) / 60;
    let hours = (datActuelle.getHours()) /12;

    console.log(seconds);
    console.log(minutes);
    console.log(hours);

    AIGUILLESEC.style.transform =`rotate(${seconds * 360}deg)`;
    AIGUILLEMIN.style.transform =`rotate(${minutes * 360}deg)`;
    AIGUILLEHR.style.transform =`rotate(${hours * 360}deg)`;
}

demarrerLaMontre();

// Exercuter la fonction chaque second
setInterval(demarrerLaMontre, 1000);


//Extraire l'heure actuel à l'aide de l'objet Date()
//Ajouter l'heure , minite , seconde  dans des varaiables
// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
// Déplacer les aiguilles










const aiguilleSecondes = document.getElementById('second');
const aiguilleMinutes = document.getElementById('minute');
const aiguilleHours = document.getElementById('hour');

setInterval(demarrerMontre, 1000);

function demarrerMontre() {
	let dateActuelle = new Date();
	console.log(dateActuelle);

	let seconds = dateActuelle.getSeconds() / 60;
	let minutes = (dateActuelle.getMinutes() + seconds) / 60;
	let hours = (dateActuelle.getHours() + minutes) / 12;

	console.log(seconds);
	console.log(minutes);
	console.log(hours);

	aiguilleSecondes.style.transform = `rotate(${seconds * 360}deg)`;
	aiguilleMinutes.style.transform = `rotate(${minutes * 360}deg)`;
	aiguilleHours.style.transform = `rotate(${hours * 360}deg)`;
}

demarrerMontre();