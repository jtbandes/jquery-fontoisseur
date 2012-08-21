/* fontoisseur, a jQuery font sampling plugin */
/* By Jacob Bandes-Storch http://github.com/jtbandes */

(function($) {
	$.fn.sampleFonts = function() {
		var fonts = arguments;
		var n = fonts.length;
		if (n == 0) return this;
		
		this.data("defaultFont", fonts[0]);
					
		var setdef = function(e) {
			if (e.which == 32) {
				$(e.data).data("defaultFont", $(e.data).css("font-family"));
				return false;
			}
		};
					
		return this.css("font-family", this.data("defaultFont")).mouseenter(function() {
			$(document).on("keydown", null, this, setdef);
		}).mouseleave(function() {
			$(document).off("keydown", setdef);
			var def = $(this).data("defaultFont");
			$(this).css("font-family", def).attr("title", def);
		}).mousemove(function(e) {
			var x = (e.pageX - $(this).offset().left) / $(this).width();
			$(this).css("font-family", fonts[Math.floor(x*n)]);
		});
	};
})(jQuery);

