const guess = document.getElementById("guess-form")


function makeGuess(){
if (guess.value == "Reservoir Dogs") {
    console.log("You Got It!")
}
else {
    console.log("Sorry, try again")
   
}
guess.value = ""
}



const hint = document.getElementById("hint-des")


