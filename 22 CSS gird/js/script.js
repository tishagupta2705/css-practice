// || SELECT ELEMENTS ||

const searchButton = document.querySelector(".search-box button");
const searchField = document.querySelector(".search-box input");

const loginButton = document.querySelector(".login-btn");

const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');

const navLinks = document.querySelectorAll(".menu a");


// || SEARCH FUNCTION ||

function searchFunction() {

    const searchText = searchField.value.trim();

    if(searchText === "") {
        alert("Please type something to search");
    } 
    
    else {
        alert("You searched for: " + searchText);
    }

}

searchButton.addEventListener("click", searchFunction);


// || ENTER KEY SEARCH ||

searchField.addEventListener("keydown", function(event){

    if(event.key === "Enter"){
        searchFunction();
    }

});


// || LOGIN FUNCTION ||

loginButton.addEventListener("click", function(){

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if(email === "" || password === ""){

        alert("Please fill all fields");

    } 
    
    else{

        alert("Login Successful");

    }

});


// || NAV LINK HOVER EFFECT ||

navLinks.forEach(function(link){

    link.addEventListener("mouseenter", function(){

        this.style.color = "orange";
        this.style.transition = "0.3s";

    });

    link.addEventListener("mouseleave", function(){

        this.style.color = "white";

    });

});