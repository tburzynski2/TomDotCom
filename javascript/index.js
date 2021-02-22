// Hide menu after nav item is clicked
let navLinks = $(".nav-link");
for(let i = 0; i < navLinks.length; ++i) {
    $(navLinks[i]).click(hideMenu);
}

function hideMenu() {
    $("#navbar-toggler-button").click();
}

// Set copyright date in footer to current year
$("#year").text(new Date().getFullYear());


// Center headshot on small viewports
$(window).resize(resizeFunction);
$(document).ready(resizeFunction);

function resizeFunction() {
    if($(window).width() < 750) {
        $("#tom-pic").removeClass("float-right");
        $("#tom-pic").addClass("horizontal-center");
    }
    if($(window).width() >= 750) {
        $("#tom-pic").addClass("float-right");
        $("#tom-pic").removeClass("horizontal-center");
    }
}