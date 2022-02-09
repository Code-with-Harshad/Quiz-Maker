// let date = new Date(new Date().setTime(0))
// let time = date.getTime()
// let seconds = Math.floor((time % (100 * 60)) / 1000);
// let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
// let myTime = setInterval(() => {
//     if (seconds < 59) {
//         seconds++
//     } else {
//         minutes++
//         seconds = 0;
//     }
//     let format_sec = seconds < 10 ? `0${seconds}` : `${seconds}`
//     let format_min = minutes < 10 ? `0${minutes}` : `${seconds}`
//     document.getElementById("timer").textContent = `${format_min} : ${format_sec}`
// }, 1000);


let date = new Date(new Date().setTime(0))
let time = date.getTime();
let seconds = 1000;
let minutes = seconds * 60;

let textMinutes = Math.floor((time % (minutes * 60)) / minutes)
let textSeconds = Math.floor((time % minutes) / seconds)

let myTime = setInterval(() => {
    if (textSeconds < 59) {
        textSeconds++
    } else {
        textMinutes++
        textSeconds = 0;
    }
    let format_sec = textSeconds < 10 ? `0${textSeconds}` : `${textSeconds}`
    let format_min = textMinutes < 10 ? `0${textMinutes}` : `${textMinutes}`
    document.getElementById("timer").textContent = `${format_min} : ${format_sec}`
}, 1000);


