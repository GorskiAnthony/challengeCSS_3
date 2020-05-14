/* get form */
const firstname = document.getElementById("firstname");
const lastname= document.getElementById("lastname");
const email= document.getElementById("email");
const password= document.getElementById("password");
/* get error response */
const errorResponse = document.getElementsByClassName("error-response");

/* create regex for check email on form */
const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

/* add all input of form on new array */
const formCheck = [firstname, lastname, email, password];

/** Function error is here for push an error on dom */
function error(propertie, id) {
 
    /* Test with Switch.. */
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

/** Function isEmpty is boolean if empty return false else true*/
function isEmpty(id, value) {

    //console.log(id + " : " + regex.test(value));
    
    if(value !== "") {
        /** If value different of empty i test id === email and check my regex */
        if(id === "email") {
            return regex.test(value);
        }
        return true;
    } else {
        return false;
    }
}


/** I call the function from the index.html */
function checkForm() {

    /** allows not to refresh the page */
    event.preventDefault();

    /** a for loop to test each entry in the form */
    for(index = 0; index < formCheck.length; index++) {
        if(!isEmpty(formCheck[index].name, formCheck[index].value)) {
            error(formCheck[index].name, index)
        } else {
            formCheck[index].classList.remove('error');
            errorResponse[index].innerHTML = "";
            //console.log('Not empty');
        }
    }
}
