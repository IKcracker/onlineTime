let time = document.getElementById('time')
let back = document.querySelector('.main')

let i = 1;







update();
setInterval(update, 1000)



function update() {
let date = new Date()
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
    time.textContent = displayTime(date);
    function toDouble(time) {
        time = time.toString();
        if (time.length < 2) {
            time = '0' + time;
        }
        
        return time;
    }

    function displayTime(date) {

        let sec = toDouble(seconds);
        let hour = toDouble(hours);
        let min = toDouble(minutes);
        let amOrpm = 0;
        if (hour <= 12) {
            amOrpm = 'am'
        }
        else {
            amOrpm = 'pm'
        }

       
        if (sec % 10 == 0)
        {
            i = i + 1;
            if (i === 10)
            {
                i = 1;
                }
            console.log(i);
            }
    back.style.background = `url('${i}.jpg')`;
back.style.backgroundPosition = 'center';
        back.style.backgroundSize = 'cover';
        back.style.transition = `2s`
 


        
                return `${hour}:${min}:${sec} ${amOrpm}`;
    }
}