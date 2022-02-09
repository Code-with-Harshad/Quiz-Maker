Home = () => {
    location.href = "../index.html"
}

let ul = document.getElementById("highscore_list");
highScores = JSON.parse(localStorage.getItem("highScores") || [])
console.log(ul)

ul.innerHTML = highScores.map(score => {
    return `<li class="list_item">${score.name} : ${score.score} :  ${score.topic}</li>`
}).join("");