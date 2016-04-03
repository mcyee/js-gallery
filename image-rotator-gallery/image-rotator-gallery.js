// Reference: http://designm.ag/tutorials/image-rotator-css-jquery/
// Reference: http://michaelsoriano.com/how-to-create-a-jquery-image-rotator/

$(document).ready(function() {
	$("#main_image .desc").show();
	$("#main_image .block").animate({ opacity:0.85 }, 1);
	//Add the active class (highlights the very first list item by default)
	$(".image_thumb ul li:first").addClass('active');

	// click thumbnail
	$(".image_thumb ul li")
		.click(function() {
			var imgAlt        = $(this).find('img').attr("alt");
			var imgTitle      = $(this).find('a').attr("href");
			var imgDesc       = $(this).find('.block').html();
			var imgDescHeight = $("#main_image").find('block').height();

			// Don't click through - prevents repetitive animations on active/selected list-item
			if ($(this).is(".active")) {
				return false;
			}
			else {
				// Animate the description
				// Pull block down (negative bottom margin of its own height)
				$("#main_image .block").animate({
						opacity: 0,
						marginBottom: -imgDescHeight
					},
					250,
					function() {
						//swap the HTML of the block, then pull the block container back up and set opacity
						$("#main_image .block")
							.html(imgDesc)
							.animate({
									opacity: 0.85,
									marginBottom: "0"
								},
								250
							);
						// Switch the main image (URL + alt tag)
						$("#main_image img").attr({
							src: imgTitle,
							alt: imgAlt
						});
				});
			}

			//Show active list-item
			$(".image_thumb ul li").removeClass('active');
			$(this).addClass('active');

			return false;
		})
		.hover(function() { $(this).addClass('hover'); },
		       function() { $(this).removeClass('hover'); }
		);

	// Toggle description visibility
	$("a.collapse").click(function() {
		$("#main_image .block").slideToggle();
		$("a.collapse").toggleClass("show");
	});
});
