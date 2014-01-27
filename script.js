$(document).ready(function() {
	
	// Advanced search dropdown when down arrow clicked
	$('.search-arrow').click(function() {
		$('.advanced-search').toggle();
	});

	// logic for "Cancel and Close"
	$('.cc').click(function() {
		$('.advanced-search').hide();
	});

	// Help menu drops down when "Help" clicked
	$('.help p.help').click(function() {
		$('.help-box').toggle();
	});

	// Change row color when checkbox is checked
   $("td :checkbox").on("click", function() {
    $(this).closest("tr").css("background-color", this.checked ? "#fff5d9" : "white");
	});

});