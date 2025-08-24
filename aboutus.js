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
