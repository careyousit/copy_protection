$("html").on("contextmenu",function(e){
   return false;
});
$('html').bind('cut copy', function (event) {
 event.preventDefault();
	});
$(document).on("contextmenu", function (event) { event.preventDefault(); });