
let ticTacs = document.getElementsByClassName("ticTac")
let isPlayer1 = true
let isAvailableFill = true

function showPlayer(isStartedAgain) {
    if (!isStartedAgain) {
        let player = document.getElementById("player")
        player.innerHTML = isPlayer1 ? "Vez do jogador 1" : "Vez do jogador 2"
    } else {
        player.innerHTML = "Vez do jogador 1"
    }
}
function getIndex(index) {
    fillField(index)
}

function fillField(index) {
    if (isAvailableFill) {
        if (verifyfield(index)) {
            ticTacs[index].innerHTML = getPlayer()
            swapPlayer()
            verifyTable()

        } else {
            alert("Campo já preenchido")
        }
    }
}
function verifyfield(index) {

    if (ticTacs[index].innerHTML == '') {
        return true
    } else {
        return false
    }
}

function swapPlayer() {
    isPlayer1 = !isPlayer1
    showPlayer(isStartedAgain = false)
}

function closeTable() {
    isAvailableFill = !isAvailableFill
}
function showWinner(message) {
    alert(message)
}

function getPlayer() {
    return isPlayer1 ? "X" : "O"
}


function verifyTable() {

    if (verifyRows() != "") {
        showWinner(verifyRows())
        resetGame()
        return
    }

    if (verifyColumns() != "") {
        showWinner(verifyColumns())
        resetGame()
        return
    }

    if (verifyDiagonals() != "") {
        showWinner(verifyDiagonals())
        resetGame()
        return
    }

    if(verifyATie()){
        showWinner("Velha")
        resetGame()
        return
    }


}

function resetGame(){
    closeTable()
    setTimeout(function () {
        resetTable()
    }, 1000);
}


function verifyRows() {
    for (let i = 0; i < ticTacs.length; i += 3) {
        if (ticTacs[i].innerHTML == "X" && ticTacs[i + 1].innerHTML == "X" && ticTacs[i + 2].innerHTML == "X") {
            return "Jogador 1 ganhou"
        }
        if (ticTacs[i].innerHTML == "O" && ticTacs[i + 1].innerHTML == "O" && ticTacs[i + 2].innerHTML == "O") {
            return "Jogador 2 ganhou"

        }
    }
    return ""
}

function verifyColumns() {
    for (let i = 0; i < 3; i++) {
        let aux = i + 3

        if (ticTacs[i].innerHTML == "X" && ticTacs[aux].innerHTML == "X" && ticTacs[aux + 3].innerHTML == "X") {
            return "Jogador 1 ganhou"
        }
        if (ticTacs[i].innerHTML == "O" && ticTacs[aux].innerHTML == "O" && ticTacs[aux + 3].innerHTML == "O") {
            return "Jogador 2 ganhou"
        }
    }
    return ""
}


function verifyDiagonals() {
    if (ticTacs[0].innerHTML == "X" && ticTacs[4].innerHTML == "X" && ticTacs[8].innerHTML == "X") {
        return "Jogador 1 ganhou"
    }
    if (ticTacs[2].innerHTML == "X" && ticTacs[4].innerHTML == "X" && ticTacs[6].innerHTML == "X") {
        return "Jogador 1 ganhou"
    }
    if (ticTacs[0].innerHTML == "O" && ticTacs[4].innerHTML == "O" && ticTacs[8].innerHTML == "O") {
        return "Jogador 2 ganhou"
    }
    if (ticTacs[2].innerHTML == "O" && ticTacs[4].innerHTML == "O" && ticTacs[6].innerHTML == "O") {
        return "Jogador 2 ganhou"
    }

    return ""
}

function resetTable() {
    for (let i = 0; i < ticTacs.length; i++) {
        ticTacs[i].innerHTML = ""
    }
    closeTable()
    showPlayer(isStartedAgain = true)
    isPlayer1 = true
}

function verifyATie() {
    let count = 0
    for (let i = 0; i < ticTacs.length; i++) {
        if (ticTacs[i].innerHTML != "") {
            count++
        }
    }

    return count === (ticTacs.length)
}

showPlayer(isStartedAgain = false)