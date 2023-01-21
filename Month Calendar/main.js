const monthEl = document.querySelector('.date h1')
const dateEl = document.querySelector('.date p')
const daysEl = document.querySelector('.days')
const monthInx = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate()

const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay()

// create an array of months, so based on it we get the correct one
const months = ['January','February','March','April','may','June','July','August','September','October','November','December'];

monthEl.innerText = months[monthInx]
dateEl.innerText = new Date().toDateString()

let days = '';

for (let i = firstDay; i>0; i--){
    days += `<div class='empty'></div>`
}

for (let i=1; i<=lastDay; i++){
    if (i === new Date().getDate()){
        days += `<div class='active'>${i}</div>`
    }
    days += `<div>${i}</div>`
}

daysEl.innerHTML = days;


