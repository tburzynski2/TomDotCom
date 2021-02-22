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