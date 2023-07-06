function display() {
    date = new Date();
    hour = date.getHours();
    minute = date.getMinutes()
    second = date.getSeconds()  
    document.getElementById("horas").innerHTML = hour+":"+minute+":"+second
}
setInterval(display,10)