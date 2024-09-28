document.addEventListener("scroll", function() {
    var logoImg = document.querySelector(".logo-img");
    var navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) { 
        logoImg.classList.add("hidden");
        navbar.classList.add("hidden");
    } else {
        logoImg.classList.remove("hidden");
        navbar.classList.remove("hidden");
    }
});
