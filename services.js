// let nav = document.getElementsByTagName('ul')[0];


// window.onscroll = ()=>{
//     console.log(window.scrollY, window.innerWidth);
//     if(window.scrollY >= window.innerWidth){
//         for (let i = 0; i < nav.children.length; i++) {
//             nav.children[i].style.color = 'black'
//         }
//     }
// }

let list = {};
let randoms = document.getElementsByClassName('flexcontainer')
for (let i = 0; i < randoms.length; i++) {
    const random = randoms[i];
    // console.log(random.children[0].innerHTML.split(" ").join(""));
    list[random.children[0].innerHTML.split(" ").join("")] = random.children[0];
}

console.log(list);
let homelogo = document.getElementById('homelogo')
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
                behavior: 'smooth' 
            });
        }
    }
}


window.onload = ()=>{
    checkScroll();
}
