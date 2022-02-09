let player = document.getElementById("player");
let gameScore = document.getElementById("score");
gameScore.textContent = `${localStorage.getItem("Game score")}`
player.textContent = `${localStorage.getItem("name")}`
displayTime = document.getElementById("displayTime")
displayTime.textContent = localStorage.getItem("Total Time")
playAgain = () => {
    location.href = "../html/quizPage_s.html"
}

goHome = () => {
    location.href = "../index.html"
}



let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

saveScore = (e) => {
    const score = {
        score: localStorage.getItem("Game score"),
        name: localStorage.getItem("name"),
        time: localStorage.getItem("Total Time"),
        topic:localStorage.getItem("Topic")
    }
    highScores.push(score)

    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    location.href = "../index.html"
}