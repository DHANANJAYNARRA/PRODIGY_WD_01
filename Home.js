window.onscroll = function() {
    myFunction();
};

function myFunction() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = "peech";
        navbar.style.color = "#pale brown";
    } else {
        navbar.style.backgroundColor = "rgb(137, 134, 139";
        navbar.style.color = "#fff";
    }
}

var myCarousel = document.querySelector('collection-section')
var carousel = new bootstrap.Carousel(myCarousel)