if (window.innerWidth > 800) {
    const email = document.getElementById('emails');
    email.children[0].setAttribute('href', "https://mail.google.com/mail?view=cm&fs=1&to=urbandetailing29@gmail.com&su=Dikkat%20Hori&body=Boht%20Dikkat")
    // email.children[1].children[0].setAttribute('href',"https://mail.google.com/mail?view=cm&fs=1&to=urbandetailing29@gmail.com&su=Dikkat%20Hori&body=Boht%20Dikkat")

    const phones = document.getElementById('phones');
    phones.children[0].removeAttribute('href')
    // phones.children[1].children[0].removeAttribute('href')
    // phones.children[1].children[2].removeAttribute('href')


}
let mobilediv = true;
let close = document.getElementById('close');
let mobileNav = document.getElementById("nav");
let threedots = document.getElementById('threedots')

if(window.innerWidth<458){
    close.addEventListener('click', () => {
        if (mobilediv) {
            mobilediv = false;
            mobileNav.classList.add('hidden');
            threedots.style.display = "block"
        }
    
    });
    
    threedots.addEventListener("click", ()=>{
        mobilediv = true;
        mobileNav.classList.remove('hidden');
        threedots.style.display = 'none'
    })
}
    
function queryHBhaiKo() {
    let query = document.getElementById('formdiv');

    if(query){
        window.scrollTo({
            top: query.offsetTop - 300,
            behavior: 'smooth' // Optional: smooth scrolling effect
        });
    } else {
        openBlur();
    }

    // query.style.scale = 1.4
}


let blurDiv = document.getElementById('blurDiv');
let contactMethods = document.getElementsByClassName('servicemethods')

for (let i = 0; i < contactMethods.length; i++) {
    const contactMethod = contactMethods[i];
    contactMethod.addEventListener('click', openBlur);
}

blurDiv.style.width = '0svw'
blurDiv.children[0].style.display = "none"

blurDiv.addEventListener('click', closeBlur)


function closeBlur(event) {
    if (event.target == blurDiv) {
        console.log(event.target);
        event.stopPropagation();
        document.body.style.overflow = 'scroll'
        blurDiv.style.width = "0svw"
        blurDiv.style.display = 'none'
        blurDiv.children[0].style.display = "none"
    }
}

function openBlur() {
    document.body.style.overflow = 'hidden'
    blurDiv.style.display = 'flex'
    blurDiv.style.width = "100svw"
    blurDiv.children[0].style.display = "flex"

    document.addEventListener('keydown', (e) => {
        if (e.key == "Enter") {
            submitForms();
        }
    })
}


// const apiURL = "https://detailingserver.onrender.com"
async function submitForms(){
    let nameField = document.getElementById("contactPageName1").value
    let emailField = document.getElementById("contactPageEmail1").value.toLowerCase();
    let mobileField = document.getElementById("contactPageMobile1").value
    let messageField = document.getElementById("contactPageMessage1").value
    if(nameField && emailField && mobileField && messageField){
    const response = await fetch(`${apiURL}/form`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({name:nameField,email:emailField,mobile:mobileField,message:messageField})
    });
    const responseData = await response.json();
        if(response.ok){
            document.getElementById("contactPageName1").value = ''
            document.getElementById("contactPageEmail1").value = ''
            document.getElementById("contactPageMobile1").value = ''
            document.getElementById("contactPageMessage1").value = ''
        }
    console.log(responseData);
    }
}