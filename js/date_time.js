function currentDate(){
    let n = new Date();
    let y = n.getFullYear();
    let m = n.getMonth();
    let d = n.getDate();
    document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
}

currentDate();