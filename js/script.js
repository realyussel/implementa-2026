$(document).ready(function() {
	$("#menu").load("plantilla/menu.html", function () {

    	// Obtener el nombre de la página actual
    	let paginaActual = window.location.pathname.split("/").pop();

    	// Si está vacío, significa que estamos en index.html
    	if (paginaActual === "") {
      		paginaActual = "index.html";
    	}

	    // Buscar el enlace del menú que coincida con la página actual
	    $("#menu .nav-link").each(function () {
	      let enlace = $(this).attr("href");

	      if (enlace === paginaActual) {
	        $(this).addClass("active disabled border border-light-subtle");
	      } else {
	        $(this).removeClass("active disabled border border-light-subtle");
	      }
	    });
	});
	$("#pie").load("plantilla/pie.html");
});