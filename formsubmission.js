
// let apiURL = 'http://127.0.0.1:3000'
const apiURL = "https://detailingserver.onrender.com"
async function submitForm(){
    let nameField = document.getElementById("contactPageName").value
    let emailField = document.getElementById("contactPageEmail").value.toLowerCase();
    let mobileField = document.getElementById("contactPageMobile").value
    let messageField = document.getElementById("contactPageMessage").value
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
            document.getElementById("contactPageName").value = ''
            document.getElementById("contactPageEmail").value = ''
            document.getElementById("contactPageMobile").value = ''
            document.getElementById("contactPageMessage").value = ''
        }
    console.log(responseData);
    }
}


