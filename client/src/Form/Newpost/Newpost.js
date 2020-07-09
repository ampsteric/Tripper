import React from "react";
import "./style.css";

var email = 0;
var name = 0;
var age = 0;
var phone = 0;
var photo = 0;
var password = 0;

var form = document.getElementById("example");

function validateName(e) {
    let inputName = e.target.value;
    console.log(inputName);
    let nameValidationMsg = document.getElementById("nameValidationMsg");

    if (inputName) {
        if (
            /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(inputName)
        ) {
            nameValidationMsg.textContent = "Valid Name";
            nameValidationMsg.classList.remove("text-danger");
            nameValidationMsg.classList.add("text-success");
        } else {
            nameValidationMsg.textContent = "Invalid";

            nameValidationMsg.classList.add("text-danger");
            nameValidationMsg.classList.remove("text-success");
        }
    } else {
        nameValidationMsg.textContent = "Name cannot empty";
    }
}

function validateEmail(e) {
    let inputEmail = e.target.value;
    let emailValidationMsg = document.getElementById("emailValidationMsg");

    if (inputEmail) {
        if (
            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                inputEmail
            )
        ) {
            emailValidationMsg.textContent = "Valid Email";
            emailValidationMsg.classList.remove("text-danger");
            emailValidationMsg.classList.add("text-success");
        } else {
            emailValidationMsg.textContent = "Invalid Name";

            emailValidationMsg.classList.add("text-danger");
            emailValidationMsg.classList.remove("text-success");
        }
    } else {
        emailValidationMsg.textContent = "Email cannot empty";
    }
}

function validateAge(e) {
    let inputAge = e.target.value;
    let ageValidationMsg = document.getElementById("ageValidationMsg");

    if (inputAge) {
        if (inputAge >= 18) {
            ageValidationMsg.textContent = "Valid Age";
            ageValidationMsg.classList.remove("text-danger");
            ageValidationMsg.classList.add("text-success");

            age = 1;
        } else {
            ageValidationMsg.textContent = "You are not eligible";

            ageValidationMsg.classList.add("text-danger");
            ageValidationMsg.classList.remove("text-success");

            age = 0;
        }
    } else {
        ageValidationMsg.textContent = "Age cannot empty";
        ageValidationMsg.classList.add("text-danger");
        ageValidationMsg.classList.remove("text-success");

        age = 0;
    }
}

function validateImage() {
    let image = form.photo.files[0];
    let fileValidationMsg = document.getElementById("fileValidationMsg");

    if (image) {
        if (image.type == "image/jpeg") {
            fileValidationMsg.textContent = "Valid File";
            fileValidationMsg.classList.remove("text-danger");
            fileValidationMsg.classList.add("text-success");

            photo = 1;
        } else {
            fileValidationMsg.textContent = "Invalid Image Format";
            fileValidationMsg.classList.remove("text-success");
            fileValidationMsg.classList.add("text-danger");

            photo = 0;
        }
    } else {
    }
}

function validatePhone(e) {
    let inputPhone = e.target.value;
    let phoneValidationMsg = document.getElementById("phoneValidationMsg");

    if (inputPhone) {
        if (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(inputPhone)) {
            phoneValidationMsg.textContent = "Valid Phone";
            phoneValidationMsg.classList.remove("text-danger");
            phoneValidationMsg.classList.add("text-success");
        } else {
            phoneValidationMsg.textContent = "Invalid Name";

            phoneValidationMsg.classList.add("text-danger");
            phoneValidationMsg.classList.remove("text-success");
        }
    } else {
        phoneValidationMsg.textContent = "Phone cannot empty";
        phoneValidationMsg.classList.add("text-danger");
        phoneValidationMsg.classList.remove("text-success");
    }
}

function validatePassword(e) {
    let inputPassword = e.target.value;
    let passwordValidationMsg = document.getElementById(
        "passwordValidationMsg"
    );

    if (inputPassword) {
        if (
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
                inputPassword
            )
        ) {
            passwordValidationMsg.textContent = "Valid Password";
            passwordValidationMsg.classList.remove("text-danger");
            passwordValidationMsg.classList.add("text-success");
        } else {
            passwordValidationMsg.textContent = "Invalid Password";

            passwordValidationMsg.classList.add("text-danger");
            passwordValidationMsg.classList.remove("text-success");
        }
    } else {
        passwordValidationMsg.textContent = "Password cannot empty";
    }
}

export default function Newpost() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form id="example">
                            <div className="form-group">
                                <label htmlFor="inputName">Name :</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onKeyUp={validateName}
                                    id="inputName"
                                    placeholder="Enter Name"
                                    name="name"
                                    required
                                />
                                <small
                                    id="nameValidationMsg"
                                    className="form-text text-danger"
                                ></small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputEmail">Email :</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    onKeyUp={validateEmail}
                                    id="inputEmail"
                                    placeholder="Enter Email"
                                    name="email"
                                    required
                                />
                                <small
                                    id="emailValidationMsg"
                                    className="form-text text-danger"
                                ></small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputAge">Age :</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onKeyUp={validateAge}
                                    id="inputAge"
                                    placeholder="Enter Age"
                                    name="age"
                                    required
                                />
                                <small
                                    id="ageValidationMsg"
                                    className="form-text text-danger"
                                ></small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputPhone">Phone:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    onKeyUp={validatePhone}
                                    id="inputPhone"
                                    placeholder="Enter mobile"
                                    name="phone"
                                    required
                                />
                                <small
                                    id="phoneValidationMsg"
                                    className="form-text text-danger"
                                ></small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPassword">Password:</label>
                                <br />
                                <span>
                                    Minimum eight characters, at least one
                                    uppercase letter, one lowercase letter and
                                    one number:
                                </span>
                                <input
                                    type="password"
                                    className="form-control"
                                    onKeyUp={validatePassword}
                                    id="inputPassword"
                                    placeholder="Enter password"
                                    name="pswd"
                                    required
                                />
                                <small
                                    id="passwordValidationMsg"
                                    className="form-text text-danger"
                                ></small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="photo">Photo:</label>
                                <input
                                    type="file"
                                    onChange={validateImage}
                                    id="photo"
                                    name="img"
                                    required
                                />
                                <small
                                    id="fileValidationMsg"
                                    className="form-text text-danger"
                                ></small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
