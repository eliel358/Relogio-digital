function display() {
    date = new Date();
    hour = date.getHours();
    minute = date.getMinutes()
    second = date.getSeconds()
    console.log(hour+":"+minute+":"+second)    
    document.getElementById("horas").innerHTML = hour+":"+minute+":"+second
}
setInterval(display,10)
