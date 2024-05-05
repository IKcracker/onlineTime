// Preload background images
let images = [];
for (let j = 1; j <= 9; j++) {
    let img = new Image();
    img.src = `${j}.jpg`;
    images.push(img);
}

let time = document.getElementById('time');
let back = document.querySelector('.main');

let i = 1;

update();
setInterval(update, 1000);

function update() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear()
    if (date.getDay() === 1)
    {
        document.querySelector('.day').textContent = 'Monday';
    }
    else if(date.getDay() === 2){
        document.querySelector('.day').textContent = 'Tuesday';
    }
     else if(date.getDay() === 3){
        document.querySelector('.day').textContent = 'Wednesday';
    }
     else if(date.getDay() === 4){
        document.querySelector('.day').textContent = 'Thursday';
    }
     else if(date.getDay() === 5){
        document.querySelector('.day').textContent = 'Friday';
    }
     else if(date.getDay() === 6){
        document.querySelector('.day').textContent = 'Saturday';
    }
     else if(date.getDay() === 7){
        document.querySelector('.day').textContent = 'Sunday';
    }
    
    time.textContent = displayTime(date);
    
    function toDouble(time) {
        return time.toString().padStart(2, '0');
    }

    function displayTime(date) {
        let sec = toDouble(seconds);
        let hour = toDouble(hours);
        let min = toDouble(minutes);
        let dat = toDouble(day)
        let mon = toDouble(month + 1)
        document.querySelector('.date').textContent = `${dat} : ${mon} : ${year}`
        let amOrpm = hour < 12 ? 'am' : 'pm';
        
        if (sec % 10 === 0) {
            i = (i % 9) + 1; // Loop through images 1 to 9
            back.style.background = `url('${i}.jpg')`;
            back.style.backgroundPosition = 'center';
        back.style.backgroundSize = 'cover';
        back.style.transition = `2s`
        }
        return `${hour}:${min}:${sec} ${amOrpm}`;
    }
}
