/* get form */

const firstname = document.getElementById("firstname");
const lastname= document.getElementById("lastname");
const email= document.getElementById("email");
const password= document.getElementById("password");
const errorResponse = document.getElementsByClassName("error-response");

const formCheck = [firstname, lastname, email, password];

function error(propertie) {
 

    /* Test with Switch.. Doesn't work but is an idea */
    switch(propertie) {

        case 'firstname': 
            console.log("error on firstname");
            firstname.classList.add('error');
            errorResponse[0].innerHTML = "First Name cannot be empty"
            break;
        case 'lastname': 
            console.log("error on lastname");
            lastname.classList.add('error');
            errorResponse[1].innerHTML = "Last Name cannot be empty"
            break;
        case 'email' :
            console.log("error on email");
            email.classList.add('error');
            errorResponse[2].innerHTML = "Looks loke this is not an email"
            break;
        case 'password':
            console.log("error on password");
            password.classList.add('error');
            errorResponse[3].innerHTML = "Password cannot be empty"
            break;
        default:
            console.log(`Sorry we are out of ${propertie}`)
    }
}

function isEmpty(id) {

    if(id !== "") {
        return true;
    } else {
        return false;
    }
}

function checkForm() {
    event.preventDefault();

    for(index = 0; index < formCheck.length; index++) {
        if(!isEmpty(formCheck[index].value)) {
            error(formCheck[index].name)
        } else {
            formCheck[index].classList.remove('error');
            errorResponse[index].innerHTML = "";
            //console.log('Not empty');
        }
    }
}
