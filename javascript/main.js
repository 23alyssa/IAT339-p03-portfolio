'use strict';

console.log("JavaScript is running.");

var width = window.innerWidth;

console.log("Window width: "+width+"px");

var navToggle = document.querySelector("#nav-toggle");

var navItems = document.querySelector("#nav-items");

var navFirstItem = document.querySelector("#nav-items a");



if (width < 610) {
    console.log('nav is closed & show icon on page load');

    navToggle.classList.remove("hidden");
    navToggle.setAttribute("aria-hidden", "false");

    navItems.classList.add("hidden");
    navItems.setAttribute("aria-hidden", "true");
}


window.addEventListener("resize", function() {
	width = window.innerWidth;


    if (width < 610) {

        console.log("Window width is less than 500px, collapsing menu.");

        navToggle.classList.remove("hidden");
        navToggle.setAttribute("aria-hidden", "false");


        navItems.classList.add("hidden");
        navItems.setAttribute("aria-hidden", "true");


        navItems.setAttribute("aria-labelledby", "nav-toggle");

    }

    else {

        console.log("Window width is less than 500px, collapsing menu.");

        navToggle.classList.add("hidden");
        navToggle.setAttribute("aria-hidden", "true");
        navItems.classList.remove("hidden");
        navItems.setAttribute("aria-hidden", "false");

    }
});

navToggle.addEventListener("click",
	/*
		Once the user has clicked on the element, we have - in this case - an anonymous (nameless) function that runs a series of statements for us.
	*/
	function() {
		console.log("#nav-toggle has been clicked.");

		if ( navItems.classList.contains("hidden") ) {
			console.log("#nav-items are hidden, showing them now.");

			navItems.classList.remove("hidden");

			navItems.setAttribute("aria-hidden", "false");
			navToggle.setAttribute("aria-expanded", "true");

			navFirstItem.focus();
		}

		else {
			console.log("#nav-items are showing, hiding them now.");

			navItems.classList.add("hidden");

			navItems.setAttribute("aria-hidden", "true");
			navToggle.setAttribute("aria-expanded", "false");

            navToggle.classList.remove("hidden");
		}
	}
);



//reset contact form
function resetClear() {
    document.getElementById("contactForm").reset();
    document.getElementById("paymentForm").reset();
  }