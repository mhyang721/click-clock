// intro.js onboarding plugin with delay
setTimeout(function() {
    introJs().start();
    }, 1200);

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


// Toggle Dark Mode Glow Effect
let glowStarted = false;
let glowJS = false;

function glowEffect() {
    var clock = document.querySelector("#clock");
    if (!glowStarted) {
        clock.keyf = [
            { textShadow: '0 0 0.5vw #ffe5f1, 0.2vw 0.2vw 1vw lightPink, 0 0 1vw #202639, 0 0 1.5vw #202639', offset: 0 },
            { textShadow: '0 0 1vw #ffe5f1, 0 0 1.5vw lightPink, 0 0 1.5vw #202639, 0 0 1.8vw #202639', offset: 1 },
        ];
    
        clock.opt = {
            duration: 1000,
            easing:'ease-in-out',
            iterations: Infinity,
            direction: 'alternate',
            fill:'none'
        };
    
        glowJS = clock.animate(clock.keyf, clock.opt);
        glowStarted = true;
        
    } else {
        glowJS.cancel();
        glowStarted = false;
    }   
};


// Jumping Icons Animation
function jumpingIcons() {
    var jumpIcons = document.querySelector('.jumping-icons');
    
    jumpIcons.keyf = [
        { transform: 'translate(0,0)', offset: 0 },
        { transform: 'translate(0,-0.8vw)', offset: 0.5 },
        { transform: 'translate(0,0)', offset: 1 },
    ];

    jumpIcons.opt = {
        duration: 1000,
        easing:'ease-in-out',
        iterations: Infinity,
        direction: 'alternate',
        fill:'none'
    };

    jumpIcons.animate(jumpIcons.keyf, jumpIcons.opt);

}

jumpingIcons();