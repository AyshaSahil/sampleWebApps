var numOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i=0; i<numOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonHtml = this.innerHTML;
        makeSound(buttonHtml);
    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
});


function makeSound(key){
    switch(key) {
        case "w": 
            var wTom = new Audio("sounds/tom-1.mp3");
            wTom.play();
            break;
        case "a": 
            var aTom = new Audio("sounds/tom-2.mp3");
            aTom.play();
            break;
        case "s": 
            var sTom = new Audio("sounds/tom-3.mp3");
            sTom.play();
            break;
        case "d": 
            var dTom = new Audio("sounds/tom-4.mp3");
            dTom.play();
            break;
        case "j": 
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k": 
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l": 
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default: break;
    }
}


function buttonAnmation(key){
    var element = document.querySelector("." + key);
    element.classList.add("pressed");

    //Timeout Function
    setTimeout(function() {
        element.classList.remove("pressed");
    }, 100 );
}