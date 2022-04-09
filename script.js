var move2
var textBot = document.getElementById("choiceBot")
var block = document.getElementById("img1").getAttribute("src")
var audio
var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var button3 = document.getElementById("button3")
var choiced = false

player1 = ["rock", "paper", "scissors"]
bot = ["rock", "paper", "scissors"]

button2.addEventListener('click', play)

function choice(){
    choiced = true
    selector = document.getElementById("selector").value
    document.getElementById("choiceYou").innerHTML = selector

    if (selector == "Rock"){
        img1 = document.getElementById("img1")
        img1.setAttribute('src', 'Images/Rock.png')
    }
    if (selector == "Paper"){
        img1 = document.getElementById("img1")
        img1.setAttribute('src', 'Images/Paper.png')
    }
    if (selector == "Scissors"){
        img1 = document.getElementById("img1")
        img1.setAttribute('src', 'Images/Scissors.png')
    }
}

function play(){
    if (choiced){

    if(selector == "Rock"){
        move1 = player1[0]
    }
    if(selector == "Paper"){
        move1 = player1[1]
    } 
    if(selector == "Scissors"){
        move1 = player1[2]
    }  

    p2 = Math.floor(Math.random()*3)
    move2 = bot[p2]

    if(move2 == 'rock'){
        img2 = document.getElementById("img2")
        img2.setAttribute('src', 'Images/Rock.png')
        textBot.textContent = "Rock"
    }
    if(move2 == 'paper'){
        img2 = document.getElementById("img2")
        img2.setAttribute('src', 'Images/Paper.png')
        textBot.textContent = "Paper"
    }
    if(move2 == 'scissors'){
        img2 = document.getElementById("img2")
        img2.setAttribute('src', 'Images/Scissors.png')
        textBot.textContent = "Scissors"
    }

    if(move1 == "rock" && move2 == "rock"){
        document.getElementById("result").textContent = "Draw (Empate)!" }
    if(move1 == "paper" && move2 == "paper"){
        document.getElementById("result").textContent = "Draw (Empate)!" }
    if(move1 == "scissors" && move2 == "scissors"){
        document.getElementById("result").textContent = "Draw (Empate)!" }

    if(move1 == "rock" && move2 == "scissors"){
        document.getElementById("result").textContent = "You Win (Você Venceu)!" }
    if(move1 == "paper" && move2 == "rock"){
        document.getElementById("result").textContent = "You Win (Você Venceu)!" }
    if(move1 == "scissors" && move2 == "paper"){
        document.getElementById("result").textContent = "You Win (Você Venceu)!" }

    if(move1 == "rock" && move2 == "paper"){
        document.getElementById("result").textContent = "Defeat (Derrota)!" }
    if(move1 == "paper" && move2 == "scissors"){
        document.getElementById("result").textContent = "Defeat (Derrota)!" }
    if(move1 == "scissors" && move2 == "rock"){
        document.getElementById("result").textContent = "Defeat (Derrota)!" }

        setTimeout(function screenGameOver(){
            document.getElementById("gameover").style.display="flex"
        }, 800)
    }
    
}

function restart(){
    window.location.reload()
}

button1.addEventListener("click", sound)
button2.addEventListener("click", sound)
button3.addEventListener("click", sound)


function sound(){
    audio = document.querySelector('audio')
    audio.volume = 0.07
    audio.play()
}
