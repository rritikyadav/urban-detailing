// function openDiv(element){
//     element.classList.add('open')
//     element.removeAttribute('onmouseleave');
//     setTimeout(()=>{
//         element.setAttribute("onmouseleave","closeDiv(this)")
//     },100)
// }

// function closeDiv(element){
//     element.classList.remove('open')
// }
let blurDiv1 = document.getElementById('blurDiv1');
let list = {};
let randoms = document.getElementsByClassName('randomcontainer')
for (let i = 0; i < randoms.length; i++) {
    const random = randoms[i];
    // console.log(random.children[0].innerHTML.split(" ").join(""));
    list[random.children[0].innerHTML.split(" ").join("")] = random.children[0];
}

window.onload = function bro(){
    console.log(window.scrollY);
    document.body.style.overflow = 'scroll'
    blurDiv1.style.height = "0svh"
    blurDiv1.children[0].style.display = 'none'

    checkScroll();
    let homelogo = document.getElementById('homelogo')

    if(window.scrollY>200){
        homelogo.style.top = `-30px`
        homelogo.style.scale = `0.5`
        homelogo.style.left = `0svw`
    }

    window.onscroll = () => {
        if (window.scrollY < 200) {
            homelogo.style.top = `${45 - (45*window.scrollY)/200}px`
            homelogo.style.scale = `${1.1 - (2*window.scrollY)/1000}`
            homelogo.style.left = `${10 - 10*(window.scrollY/200)}svw`
        }else if(window.scrollY>200){
            homelogo.style.top = `-30px`
            homelogo.style.scale = `0.5`
            homelogo.style.left = `0svw`
        }
    }
}

let checkVideo = document.getElementById('checkVideo')

function checkScroll() {
    let url = window.location.href
    if (url.includes('?')) {
        let scrollTo = url.split('?')[1].split("%20").join("")
        console.log(scrollTo);
        if (list[scrollTo]) {
            console.log("Moj ho gyi");
            console.log(list[scrollTo].offsetTop);
            window.scrollTo({
                top: list[scrollTo].offsetTop - 100,
                behavior: 'smooth' // Optional: smooth scrolling effect
            });
        }
    }
}


function playVideo(element) {
    element.play();
    element.parentNode.parentNode.children[0].style.opacity = '0'
}

function pauseVideo(element) {
    element.pause();
    element.parentNode.parentNode.children[0].style.opacity = '1'
}

let nowPlaying;
function openWide(element) {
    // let elemen = document.getElementById('video')
    nowPlaying = element;
    element.children[0].removeAttribute("onmouseleave");
    element.children[0].setAttribute("autoplay", null)
    element.children[0].setAttribute("autoplay", null)
    element.children[0].setAttribute("style", "filter:blur();")
    element.style.zIndex = '101';
    element.style.position = "fixed";
    if(window.innerWidth>450){
        element.style.top = "0svh";
        element.style.left = "35svw";
    } else {
        element.style.top = "10svh";
        element.style.left = '10svw'
    }
    element.classList.add("open");
    document.body.style.overflow = 'hidden'

    if(window.innerWidth>450){
        blurDiv1.style.height = "100svh"
    } else {    
        blurDiv1.style.height = "120svh"
    }
    // blurDiv1.style.height = "600svw"
}

function closeVideo() {
    nowPlaying.children[0].setAttribute('onmouseleave', "pauseVideo(this)")
    nowPlaying.children[0].removeAttribute("style")
    nowPlaying.children[0].removeAttribute('autoplay')
    nowPlaying.style.zIndex = '80';
    nowPlaying.style.position = "static";
    document.body.style.overflow = 'scroll'
    // element.style.top = "0svh";
    // element.style.left = "35svw";
    nowPlaying.classList.remove("open");
    blurDiv1.style.height = "0svw"
}



// window.onloadeddata = setLogo();

// function setLogo(){
//     console.log("Its Working");
//     if(window.scrollY>200){
//             homelogo.style.top = `-30px`
//             homelogo.style.scale = `0.5`
//             homelogo.style.left = `0svw`
//     }
// }