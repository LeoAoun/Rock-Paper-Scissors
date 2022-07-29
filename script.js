var textBot = document.getElementById("choiceBot")
var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var button3 = document.getElementById("button3")

// VERIFY IF THE PLAYER CHOSE ANY OPTION
var choiced = false

// PLAYER MOVES
player = ["rock", "paper", "scissors"]

// BOT MOVES
bot = ["rock", "paper", "scissors"]

button2.addEventListener('click', play)

// GET THE INPUT VALUE THAT THE PLAYER CHOSE
function choice(){
    
    choiced = true
    selector = document.getElementById("selector").value
    document.getElementById("choiceYou").innerHTML = selector

    switch(selector){
        case "Rock": 
            img1 = document.getElementById("img1")
            img1.setAttribute('src', 'Images/Rock.png')
            break

        case "Paper":
            img1 = document.getElementById("img1")
            img1.setAttribute('src', 'Images/Paper.png')
            break

        case "Scissors":
            img1 = document.getElementById("img1")
            img1.setAttribute('src', 'Images/Scissors.png')
            break
    }
}

// PLAY THE GAME
function play(){

    // CHECK THE PLAYER CHOICE
    if (choiced){

    if(selector == "Rock"){
        movePlayer = player[0]
    }
    if(selector == "Paper"){
        movePlayer = player[1]
    } 
    if(selector == "Scissors"){
        movePlayer = player[2]
    }  

    // GENERATES A RANDOM NUMBER FROM 1 TO 3
    p2 = Math.floor(Math.random()*3)
    moveBot = bot[p2]

    // INPUT AN IMAGE OF THE BOT PLAY ON THE SCREEN
    switch(moveBot){
        case "rock": 
            img2 = document.getElementById("img2")
            img2.setAttribute('src', 'Images/Rock.png')
            textBot.textContent = "Rock"
            break

        case "paper":
            img2 = document.getElementById("img2")
            img2.setAttribute('src', 'Images/Paper.png')
            textBot.textContent = "Paper"
            break

        case "scissors":
            img2 = document.getElementById("img2")
            img2.setAttribute('src', 'Images/Scissors.png')
            textBot.textContent = "Scissors"
            break
    }

    // VERIFY THE WINNER
    if(movePlayer == "rock" && moveBot == "rock"){
        document.getElementById("result").textContent = "Draw (Empate)!" }
    if(movePlayer == "paper" && moveBot == "paper"){
        document.getElementById("result").textContent = "Draw (Empate)!" }
    if(movePlayer == "scissors" && moveBot == "scissors"){
        document.getElementById("result").textContent = "Draw (Empate)!" }

    if(movePlayer == "rock" && moveBot == "scissors"){
        document.getElementById("result").textContent = "You Win (Você Venceu)!" }
    if(movePlayer == "paper" && moveBot == "rock"){
        document.getElementById("result").textContent = "You Win (Você Venceu)!" }
    if(movePlayer == "scissors" && moveBot == "paper"){
        document.getElementById("result").textContent = "You Win (Você Venceu)!" }

    if(movePlayer == "rock" && moveBot == "paper"){
        document.getElementById("result").textContent = "Defeat (Derrota)!" }
    if(movePlayer == "paper" && moveBot == "scissors"){
        document.getElementById("result").textContent = "Defeat (Derrota)!" }
    if(movePlayer == "scissors" && moveBot == "rock"){
        document.getElementById("result").textContent = "Defeat (Derrota)!" }

        setTimeout(function screenGameOver(){
            document.getElementById("gameover").style.display="flex"
        }, 800)
    }
    
}

// BUTTON SOUND
function buttonSound(){
    audio = document.getElementById("buttonSound")
    audio.volume = 0.7
    audio.play()
}

// RESTART THE GAME
function restart(){
    window.location.reload()
}

button1.addEventListener("click", buttonSound)
button2.addEventListener("click", buttonSound)
button3.addEventListener("click", buttonSound)

button3.addEventListener("click", restart)
