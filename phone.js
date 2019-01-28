$(document).ready(function() {
	$("#content_dialer").show();
	$("#content_contacts").hide();
	$("#content_addContact").hide();
});

$("#dialer").click(function() {
	$("#content_dialer").show();
	$("#content_contacts").hide();
	$("#content_addContact").hide();
});

$("#contacts").click(function() {
	$("#content_dialer").hide();
	$("#content_contacts").show();
	$("#content_addContact").hide();
});

$("#addContact").click(function() {
	$("#content_dialer").hide();
	$("#content_contacts").hide();
	$("#content_addContact").show();
});