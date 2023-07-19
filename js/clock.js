// The Name asking stage
let myName = prompt("Lutfen Adinizi Yaziniz")
let info = document.querySelector("#myName")

info.innerHTML = `${myName ? myName : ""};`

// adding date and hours
function time() {
    let date = new Date().toLocaleString();
    document.querySelector('#myClock').innerHTML = date;
}
setInterval(time, 1000);


//  İKİNCİ BİR YÖNTEM 
/*  
    function time () {

        let date = new Date();

        let days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
        let day = date.getDay();

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        hours = formatTime(hours);
        minutes = formatTime(minutes);
        seconds = formatTime(seconds);

        let myClock = document.querySelector('#myClock')
        myClock.innerHTML =`${hours}:${minutes}:${seconds} ${days[day]}` 
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

setInterval(time, 1000);
*/

