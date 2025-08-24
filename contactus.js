
if(window.innerWidth>800){
    const email = document.getElementById('emails');
    email.children[0].setAttribute('href',"https://mail.google.com/mail?view=cm&fs=1&to=urbandetailing29@gmail.com&su=Dikkat%20Hori&body=Boht%20Dikkat")
    email.children[1].children[0].setAttribute('href',"https://mail.google.com/mail?view=cm&fs=1&to=urbandetailing29@gmail.com&su=Dikkat%20Hori&body=Boht%20Dikkat")

    const phones = document.getElementById('phones');
    phones.children[0].removeAttribute('href')
    phones.children[1].children[0].removeAttribute('href')
    phones.children[1].children[2].removeAttribute('href')
}

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
