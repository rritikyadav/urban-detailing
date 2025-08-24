
let quotes = ["show your car some love", "If you got the time, we got the shine", "Bring your ride back to life"]

let textbox = document.getElementById('textbox');

let dropdown = document.getElementById('dropdown')

let navitems = document.getElementsByClassName('navitem')

let index = 0;

function rollQuote() {
    textbox.classList.add('hide');
    setTimeout(() => {
        textbox.children[0].textContent = quotes[index]
        textbox.classList.remove('hide');
    }, 1500)

    if (index == quotes.length - 1) {
        index = 0;
    } else {
        index++;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('backgroundvideo');
    video.playbackRate = 1.25; // Set the default playback speed to 1.5x
});

let previous = null
function triggerDropdown(element) {
    if (element.textContent != previous) {
        // setTimeout(()=>{
        previous = element.textContent;
        dropdown.classList.add('show');

        dropdown.innerHTML = element.textContent;
        //Aage ka kaam yha krna h ki dropdown me display kya hoga
        // },0)

    }
}

function closeDropdown() {
    dropdown.classList.remove('show');
    dropdown.innerHTML = ''
    previous = null;
}
setInterval(rollQuote, 4000);


function goToService(element) {
    window.location.href = "./ourwork.html?" + element.children[1].children[0].innerHTML;
    console.log(element.children[1].children[0].innerHTML);
}

let homelogo = document.getElementById('homelogo')
window.onscroll = () => {
    if (window.scrollY < 200) {
        homelogo.style.top = `${45 - (45 * window.scrollY) / 200}px`
        homelogo.style.scale = `${1.1 - (2 * window.scrollY) / 1000}`
        homelogo.style.left = `${10 - 10 * (window.scrollY / 200)}svw`
    } else if (window.scrollY > 200) {
        homelogo.style.top = `-30px`
        homelogo.style.scale = `0.5`
        homelogo.style.left = `0svw`
    }
}


