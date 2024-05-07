var all_buttons = document.querySelectorAll(".drum");


for (item = 0; item < all_buttons.length; item++){
    all_buttons[item].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });   
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        
        case "a":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        
        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        default:console.log(this.innerHTML);
    }
}


function buttonAnimation(currentKey){
    var active_button = document.querySelector("." + currentKey);
    active_button.classList.add("pressed");
    setTimeout(function (){
        active_button.classList.remove("pressed");
    }, 100);
}