window.onscroll = function() {myFunction()};
		
		var navbar = document.getElementById("navbar");
		var stickyNav = navbar.offsetTop;
		
		function myFunction() {
		if (window.pageYOffset >= stickyNav) {
		navbar.classList.add("stickyNav")
		} else {
		navbar.classList.remove("stickyNav");
		}
		}