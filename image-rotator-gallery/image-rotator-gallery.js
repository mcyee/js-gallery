// Reference: http://designm.ag/tutorials/image-rotator-css-jquery/
// Reference: http://michaelsoriano.com/how-to-create-a-jquery-image-rotator/

$(document).ready(function() {
	//Show banner
	$("#main_image .desc").show();
	//Set opacity
	$("#main_image .block").animate({ opacity:0.85 }, 1);
	//Add the active class (highlights the very first list item by default)
	$(".image_thumb ul li:first").addClass('active');
	$(".image_thumb ul li").click(function() {
		//Set variables
		var imgAlt = $(this).find('img').attr("alt");
		//Get main image URL
		var imgTitle = $(this).find('a').attr("href");
		//Get HTML of the "block" container
		var imgDesc = $(this).find('.block').html();
		// height of the "block"
		var imgDescHeight = $("#main_image").find('block').height();

		// list item is active/selected
		if ($(this).is(".active")) {
			// Don't click through - prevents repetitive animations on active/selected list-item
			return false;
		}
		else {
			// Animate the description
			// Pull block down (negative bottom margin of its own height)
			$("#main_image .block").animate({ opacity: 0, marginBottom: -imgDescHeight }, 250, function() {
				//swap the HTML of the block, then pull the block container back up and set opacity
				$("#main_image .block").html(imgDesc).animat({ opacity: 0.85, marginBottom: "0" }, 250 );
				// Switch the main image (URL + alt tag)
				$("#main_image img").attr({ src: imgTitle , alt: imgAlt });
			});
		}
		//Show active list-item
		$(".image_thumb ul li").removeClass('active'); //Remove class of 'active' on all list-items
		$(this).addClass('active'); //Add class of 'active' on the selected list
		return false;
	});
	// Hover effects on list-item
	.hover(function() {
		//Add class "hover" on hover
		$(this).addClass('hover');
		},

		// Remove class "hover" on hover out
		function() {
			$(this).removeClass('hover');
		}
	);

	$("a.collapse").click(function() {
		// Toggle the description (slide up and down)
		$("#main_image .block").slideToggle();
		// Toggle the class name of "show" (the hide/show tab)
		$("a.collapse").toggleClass("show");
	});
});