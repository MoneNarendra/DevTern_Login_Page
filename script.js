let LoginEl = document.getElementById("Login");

let userNameEl = document.getElementById("userName");
let passwordEl = document.getElementById("password");

let userErrorEl = document.getElementById("userError");
let passwordErrorEl = document.getElementById("passwordError");

let myPopupEl = document.getElementById("myPopup");
let closePopupEl = document.getElementById("closePopup");

userNameEl.addEventListener("blur", function(event){
    if (event.target.value === ""){
        userErrorEl.textContent = "Required *"
    }else{
        userErrorEl.textContent = ""
    }
})

passwordEl.addEventListener("blur", function(event){
    if (event.target.value === ""){
        passwordErrorEl.textContent = "Required *"
    }else{
        passwordErrorEl.textContent = ""
    }
})

LoginEl.addEventListener("click", function() {

    if (userNameEl.value === "narendramone" && passwordEl.value === "narendramone"){
        myPopupEl.classList.add("show");

    }else if (userNameEl.value !== "narendramone"){
        userErrorEl.textContent = "Wrong UserName";
    }
    else if (passwordEl.value !== "narendramone"){
        passwordErrorEl.textContent = "Wrong Password";
    }

});

closePopupEl.addEventListener("click", function () {
    myPopupEl.classList.remove("show");
});


// const CryptoJS = require("crypto-js");


// const encrypted = CryptoJS.AES.encrypt("Hello World!", "my-secret-key");

// const decrypted = CryptoJS.AES.decrypt(encrypted, "my-secret-key");

// const planeText = decrypted.toString(cryptoJs.enc.Utf8);

// console.log("Decrypted:", planeText);
