$(document).ready(function () {

  
});

$( "#execute_server" ).click(function() {
	console.log( "Handler for .click() called." );
	    $.get("/api/launchzap");

	});

$( "#execute_test" ).click(function() {
	console.log( "Handler for sel.click() called." );
	    $.get("/api/triggerSileniumDemo");

	});
$( "#execute_test1" ).click(function() {
	console.log( "Handler for sel.click() called." );
	window.open("http://localhost:9000/");

	});

