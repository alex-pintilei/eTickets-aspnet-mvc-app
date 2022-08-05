// function to add multiple classes
var superAdd = function (element, class0, class1, class2, class3) {
    element.classList.add(class0);
    element.classList.add(class1);
    element.classList.add(class2);
    element.classList.add(class3);
}

var superRemove = function (element, class0, class1, class2, class3) {
    element.classList.remove(class0);
    element.classList.remove(class1);
    element.classList.remove(class2);
    element.classList.remove(class3);
}

// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.getElementById("dark-mode-toggle");
//console.log(darkModeToggle);

const enableDarkMode = () => {
    // 1. Add the class to the body
    var body = document.body;
    body.classList.add("bg-dark");

    var elementMovies = document.getElementById("nav-movies");
    elementMovies.classList.add("text-white");
    elementMovies.classList.remove("text-dark");

    var elementFooter = document.getElementById("myFooter");
    elementFooter.classList.add("bg-secondary");

    var myFooterDiv = document.getElementById("myFooterDiv");
    myFooterDiv.classList.add("text-white");
    

    const DarkModeCollection = document.getElementsByClassName("DarkMode");
    for (let i = 0; i < DarkModeCollection.length; i++) {
        superAdd(DarkModeCollection[i], "bg-dark", "border", "border-white", "text-white");
    }

    const DMTextCollection = document.getElementsByClassName("DMText");
    for (let i = 0; i < DMTextCollection.length; i++) {
        DMTextCollection[i].classList.add("text-white");
    }

    var elementNav = document.getElementById("myNav");
    elementNav.classList.add("bg-secondary");

    var logoutBtn = document.getElementsByClassName("DarkModeLogout");
    for (let i = 0; i < logoutBtn.length; i++) {
        superAdd(logoutBtn[i], "bg-dark", "border", "border-white", "text-red");
    }

    var miniCart = document.getElementsByClassName("DMTextMiniCart");
    for (let i = 0; i < miniCart.length; i++) {
        superAdd(miniCart[i], "text-success", "text-dark");
    }

    // Button DarkMode
    var moonLogo = document.getElementById("moonLogo");
    moonLogo.toggleAttribute("hidden");

    var sunLogo = document.getElementById("sunLogo");
    sunLogo.toggleAttribute("hidden");

    var btnDarkMode = document.getElementById("dark-mode-toggle");
    superAdd(btnDarkMode, "border", "border-white", "bg-dark");

    // 2. Update darkMode in localStorage
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    // 1. Remove the class from the body
    var body = document.body;
    body.classList.remove("bg-dark");

    var elementMovies = document.getElementById("nav-movies");
    elementMovies.classList.add("text-dark");
    elementMovies.classList.remove("text-white");

    var elementFooter = document.getElementById("myFooter");
    elementFooter.classList.remove("bg-secondary");

    var myFooterDiv = document.getElementById("myFooterDiv");
    myFooterDiv.classList.remove("text-white");

    const DarkModeCollection = document.getElementsByClassName("DarkMode");
    for (let i = 0; i < DarkModeCollection.length; i++) {
        superRemove(DarkModeCollection[i], "bg-dark", "border", "border-white", "text-white");
    }

    const DMTextCollection = document.getElementsByClassName("DMText");
    for (let i = 0; i < DMTextCollection.length; i++) {
        DMTextCollection[i].classList.remove("text-white");
    }

    var elementNav = document.getElementById("myNav");
    elementNav.classList.remove("bg-secondary");

    var logoutBtn = document.getElementsByClassName("DarkModeLogout");
    for (let i = 0; i < logoutBtn.length; i++) {
        superRemove(logoutBtn[i], "bg-dark", "border", "border-white", "text-red");
    }

    var miniCart = document.getElementsByClassName("DMTextMiniCart");
    for (let i = 0; i < miniCart.length; i++) {
        superRemove(miniCart[i], "text-success", "text-dark");
    }

    // Button DarkMode
    var moonLogo = document.getElementById("moonLogo");
    moonLogo.toggleAttribute("hidden");

    var sunLogo = document.getElementById("sunLogo");
    sunLogo.toggleAttribute("hidden");

    var btnDarkMode = document.getElementById("dark-mode-toggle");
    superRemove(btnDarkMode, "border", "border-white", "bg-dark");

    // 2. Update darkMode in localStorage 
    localStorage.setItem('darkMode', null);
}

// If the user already visited and enabled darkMode start things off with it on
if (darkMode === 'enabled') {
    enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
    // get their darkMode setting
    darkMode = localStorage.getItem('darkMode');

    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});