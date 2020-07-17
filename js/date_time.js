function currentDate(){
    let n = new Date();
    let y = n.getFullYear();
    let m = n.getMonth();
    let d = n.getDate();
    document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
}
window.onload = displayClock();
function displayClock(){
    let time = new Date().toLocaleTimeString();

    document.getElementById("clock").innerHTML = time;
    setTimeout(displayClock, 1000);
}

currentDate();