// Consegna
// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

// BONUS
// Facciamo accendi e spegni:
// Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
// Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
// E così via...
// Per fare questo bonus potremmo aver bisogno di del metodo string.includes()

const lampEl = document.getElementById('lamp');
const buttonEl = document.querySelector('.btn');

function toggleLamp(){
        
    if (lampEl.src.includes('white')) {
        lampEl.src = 'assets/img/yellow_lamp.png';
        buttonEl.innerHTML = 'Spegni'
    } else if (lampEl.src.includes('yellow')) {
        lampEl.src = 'assets/img/white_lamp.png';
        buttonEl.innerHTML = 'Accendi'
    }

}

buttonEl.addEventListener('click', toggleLamp);


// const lampEl = document.getElementById('lamp');
// const buttunEl = document.querySelector('.btn');
	
// function onOff(){
	
//    lampEl.src = 'assets/img/yellow_lamp.png';
	
// }
	
// buttunEl.addEventListener('click', onOff);

// console.log(lampEl, buttunEl);
