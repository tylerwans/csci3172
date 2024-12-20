function inFocus(temp){
    temp.classList.add('active');
}

function outFocus(temp){
    temp.classList.remove('active');
}

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");

firstName.addEventListener("focus", function(){inFocus(firstName)}, false);
firstName.addEventListener("blur", function(){outFocus(firstName)}, false);

lastName.addEventListener("focus", function(){inFocus(lastName)}, false);
lastName.addEventListener("blur", function(){outFocus(lastName)}, false);

email.addEventListener("focus", function(){inFocus(email)}, false);
email.addEventListener("blur", function(){outFocus(email)}, false);




function validate() {
    let firstNameReg = /^[a-zA-Z ]+$/;
    let lastNameReg = /^[a-zA-Z ]+$/;
    let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,7})+$/; //check for valid email format including 6 char domain
    let passReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,7})+$/;

    let firstNameVal = document.getElementById("firstName").value;
    let lastNameVal = document.getElementById("lastName").value;
    let emailVal = document.getElementById("email").value;
    let passVal = document.getElementById("password").value;


    if (!firstNameReg.test(firstNameVal)){
        alert("Not a valid first name");
    } else if (!lastNameReg.test(lastNameVal))  {
        alert("Not a valid last name name");
    }
    
    else if (!emailReg.test(emailVal)){
        alert("Not a valid email address");
    }
    else if (!passReg.test(passVal)){
        alert("Not a valid password");
    }
        
    
    else {
        return 0;
    }

}


function printResults() {
    document.getElementById('register').addEventListener('submit', function(event) {
        
        // A) prevents the submission from refreshing the page and going back to the default form submission
        event.preventDefault();

        
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const gender = document.querySelector('input[name="genderClass"]:checked')?.value;
        const country = document.getElementById('countries').value;

        
        const outputDiv = document.getElementById('output');
        //B) we append the data to a refreshed page and the content is displayed in an HTML element
        outputDiv.innerHTML += `<p>First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Gender: ${gender}, Country: ${country}</p>`;
    });
}

printResults();