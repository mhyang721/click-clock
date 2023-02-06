// Digital Clock
function clock() {

    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    let amPm = hrs >= 12 ? "PM" : "AM";
    hrs > 12 ? hrs -= 12 : hrs;
    hrs == 0 ? hrs = 12 : hrs;

    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    let time = hrs + " : " + mins + " : " + secs + " " + amPm;

    document.querySelector('#clock').innerText = time;
    setTimeout(clock, 1000);
}

clock();


// Light/Dark Mode Toggle
const toggle = document.querySelector("#toggle");

toggle.addEventListener("click", () => {
    changeMode(); 
    glowEffect(); 
});

function changeMode() {
    // Change Toggle Icon
    const icon = document.querySelector('ion-icon');
    const currentName = icon.getAttribute('name');
    const newName = currentName === 'moon' ? 'sunny' : 'moon';
    icon.setAttribute('name', newName);
    // Change Theme
    theme.classList.toggle("dark-mode"); 
};

let animationStarted = false;
let animateJS = false;

function glowEffect() {
    // Toggle Dark Mode Glow Effect
    var clock = document.querySelector("#clock");
    if (!animationStarted) {
        clock.keyf = [
            { textShadow: '0 0 1vw pink, 0.3vw 0.3vw 1vw lightPink, 0 0 3vw midnightBlue, 0 0 5vw midnightBlue', offset: 0 },
            { textShadow: '0 0 4vw pink, 0.5vw 0.5vw 0.3vw lightPink, 0 0 0.5vw midnightBlue, 5 5 2vw midnightBlue', offset: 1 },
        ];
    
        clock.opt = {
            duration: 1000,
            easing:'ease-in-out',
            iterations: Infinity,
            direction: 'alternate',
            fill:'none'
        };
    
        animateJS = clock.animate(clock.keyf, clock.opt);
        animationStarted = true;
        
    } else {
        animateJS.cancel();
        animationStarted = false;
    }   
};