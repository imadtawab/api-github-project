
/* < > , ?  */

let form = document.querySelector('.container form') ,
    inputText = document.querySelector('.container form input[type="text"]') ,
    button = document.querySelector('.container form input[type="submit"]') ,
    showData = document.querySelector(".show-data");

// Input Focus On load
window.onload=(eo) => {
    inputText.focus()
}
inputText.onblur=(eo) => {
    inputText.setAttribute("placeholder" ,"Github Username")
}
// form
form.onsubmit=(eo) => {
    // delete default
    eo.preventDefault()
    // check empty input
    if (inputText.value==="") {
        inputText.setAttribute("placeholder" ,"Please enter your Username")
    } else {
        fetch(`https://api.github.com/users/${inputText.value}/repos`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            data.forEach(repo => {
                showData.innerHTML+=`<div class="repo">
                                        <div class="name">${repo.name}</div>
                                        <div class="parent">
                                            <a class="file" target="_blank" href="https://github.com/${inputText.value}/${repo.name}">File</a>
                                            <a class="visit" target="_blank" href="https://${inputText.value}.github.io/${repo.name}">Visit</a>
                                        </div>
                                    </div>`
            });
          
        })
        showData.innerHTML=""
    }
    
}