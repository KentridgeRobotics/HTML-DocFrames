$(document).ready(function() {
    $('input[type=radio][name=sheet_type]').change(function() {
    	$('body').removeClass('cover');
    	$('body').removeClass('continuation');
    	$('body').addClass(this.value);
    });

	$('#size_opt').on('change', function() {
		$("body").removeClass (function (index, css) {
    		return (css.match (/(^|\s)size_\S+/g) || []).join(' ');
		});
		$('body').addClass(this.value);
	})
});