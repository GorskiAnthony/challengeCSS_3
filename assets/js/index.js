/* get form */

const firstname = document.getElementById("firstname");
const lastname= document.getElementById("lastname");
const email= document.getElementById("email");
const password= document.getElementById("password");
const errorResponse = document.getElementsByClassName("error-response");

const formCheck = [firstname, lastname, email, password];

function error(propertie, id) {
 

    /* Test with Switch.. Doesn't work but is an idea */
    switch(propertie) {

        case 'firstname': 
            //console.log("error on firstname");
            firstname.classList.add('error');
            errorResponse[id].innerHTML = "First Name cannot be empty"
            break;
        case 'lastname': 
            //console.log("error on lastname");
            lastname.classList.add('error');
            errorResponse[id].innerHTML = "Last Name cannot be empty"
            break;
        case 'email' :
            //console.log("error on email");
            email.classList.add('error');
            errorResponse[id].innerHTML = "Looks loke this is not an email"
            break;
        case 'password':
            //console.log("error on password");
            password.classList.add('error');
            errorResponse[id].innerHTML = "Password cannot be empty"
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
            error(formCheck[index].name, index)
        } else {
            formCheck[index].classList.remove('error');
            errorResponse[index].innerHTML = "";
            //console.log('Not empty');
        }
    }
}
