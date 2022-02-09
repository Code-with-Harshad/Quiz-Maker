let form = document.getElementById("form")

// window.onload = function () {
//     form.addEventListener("submit", (e) => {
//         e.preventDefault()
//         console.log("form Submitted")
//         let user = document.querySelector("#user").value
//         // let email = document.querySelector("#email").value
//         //store details 
//         localStorage.setItem("name", user)
//         location.href = "../html/topics.html"
//     })
// }

function Sub(e) {
    console.log("function running")
    e.preventDefault()
    let user = document.querySelector("#user").value
    localStorage.setItem("name", user)
    location.href = "../html/topics.html"
}


let nameDisplay = document.getElementById("nameDisplay");
let userDisplay = localStorage.getItem("name")
nameDisplay.textContent = `${userDisplay[0].toUpperCase() + userDisplay.slice(1)}`

//questions

space = () => {
    localStorage.setItem("Topic", "space")
    location.href = "../html/quizPage_s.html"
}
vedic = () => {
    localStorage.setItem("Topic", "vedic")
    location.href = "../html/quizPage_s.html"
}

hist = () => {
    localStorage.setItem("Topic", "history")
    location.href = "../html/quizPage_s.html"
}

gs = () => {
    localStorage.setItem("Topic", "gscience")
    location.href = "../html/quizPage_s.html"
}

curra = () => {
    localStorage.setItem("Topic", "currentaffairs")
    location.href = "../html/quizPage_s.html"
}

nature = () => {
    localStorage.setItem("Topic", "nature")
    location.href = "../html/quizPage_s.html"
}

gk = () => {
    localStorage.setItem("Topic", "pyschology")
    location.href = "../html/quizPage_s.html"
}

fitness = () => {
    localStorage.setItem("Topic", "fitness")
    location.href = "../html/quizPage_s.html"
}