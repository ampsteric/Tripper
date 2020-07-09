var email = 0;
var name = 0;
var age = 0;
var phone = 0;
var photo = 0;
var password = 0;

var form = document.getElementById('example');

function validateName() {
    let inputName = form.inputName.value;
    let nameValidationMsg = document.getElementById('nameValidationMsg');

    if(inputName){
        if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(inputName)){

            nameValidationMsg.textContent = "Valid Name";
            nameValidationMsg.classList.remove('text-danger');
            nameValidationMsg.classList.add('text-success');
        }else{
            nameValidationMsg.textContent = "Invalid";

            nameValidationMsg.classList.add('text-danger');
            nameValidationMsg.classList.remove('text-success');
        }
    }else{
        nameValidationMsg.textContent = "Name cannot empty";
    }
}

function validateEmail() {
    let inputEmail = form.inputEmail.value;
    let emailValidationMsg = document.getElementById('emailValidationMsg');

    if(inputEmail){
        if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inputEmail)){

            emailValidationMsg.textContent = "Valid Email";
            emailValidationMsg.classList.remove('text-danger');
            emailValidationMsg.classList.add('text-success');

        }else{
            emailValidationMsg.textContent = "Invalid Name";

            emailValidationMsg.classList.add('text-danger');
            emailValidationMsg.classList.remove('text-success');
        }
    }else{
        emailValidationMsg.textContent = "Email cannot empty";
    }
}


function validateAge() {
    let inputAge = form.inputAge.value;
    let ageValidationMsg = document.getElementById('ageValidationMsg');

    if(inputAge){
        if (inputAge >=18){

            ageValidationMsg.textContent = "Valid Age";
            ageValidationMsg.classList.remove('text-danger');
            ageValidationMsg.classList.add('text-success');

            age = 1;

        }else{
            ageValidationMsg.textContent = "You are not eligible";

            ageValidationMsg.classList.add('text-danger');
            ageValidationMsg.classList.remove('text-success');

            age = 0;
        }
    }else{
        ageValidationMsg.textContent = "Age cannot empty";
        ageValidationMsg.classList.add('text-danger');
        ageValidationMsg.classList.remove('text-success');

        age = 0;
    }
}

function validateImage() {
    let image = form.photo.files[0];
    let fileValidationMsg = document.getElementById('fileValidationMsg');

    if(image){
        if (image.type == 'image/jpeg'){

            fileValidationMsg.textContent = "Valid File";
            fileValidationMsg.classList.remove('text-danger');
            fileValidationMsg.classList.add('text-success');

            photo = 1;

        }else{
            fileValidationMsg.textContent = "Invalid Image Format";
            fileValidationMsg.classList.remove('text-success');
            fileValidationMsg.classList.add('text-danger');

            photo = 0;
        }
    }else{

    }
}

function validatePhone() {
    let inputPhone = form.inputPhone.value;
    let phoneValidationMsg = document.getElementById('phoneValidationMsg');

    if(inputPhone){
        if (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(inputPhone)){

            phoneValidationMsg.textContent = "Valid Phone";
            phoneValidationMsg.classList.remove('text-danger');
            phoneValidationMsg.classList.add('text-success');

        }else{
            phoneValidationMsg.textContent = "Invalid Name";

            phoneValidationMsg.classList.add('text-danger');
            phoneValidationMsg.classList.remove('text-success');
        }
    }else{
        phoneValidationMsg.textContent = "Phone cannot empty";
        phoneValidationMsg.classList.add('text-danger');
        phoneValidationMsg.classList.remove('text-success');
    }
}

function validatePassword() {
    let inputPassword = form.inputPassword.value;
    let passwordValidationMsg = document.getElementById('passwordValidationMsg');

    if(inputPassword){
        if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(inputPassword)){

            passwordValidationMsg.textContent = "Valid Password";
            passwordValidationMsg.classList.remove('text-danger');
            passwordValidationMsg.classList.add('text-success');

        }else{
            passwordValidationMsg.textContent = "Invalid Password";

            passwordValidationMsg.classList.add('text-danger');
            passwordValidationMsg.classList.remove('text-success');
        }
    }else{
        phoneValidationMsg.textContent = "Password cannot empty";
    }
}