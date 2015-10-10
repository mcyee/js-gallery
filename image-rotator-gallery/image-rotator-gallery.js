$(document).ready(function() {
	$(".main_image .desc").show(); //Show banner
	$(".main_image .block").animate({ opacity:0.85 }, 1); //Set opacity
	$(".image_thumb ul li:first").addClass('active'); //Add the active class (highlights the very first list item by default)
	$(".image_thumb ul li").click(function() {
		//Set variables
		var imgAlt = $(this).find('img').attr("alt"); //Get alt tag of image
		var imgTitle = $(this).find('a').attr("href"); //Get main image URL
		var imgDesc = $(this).find('.block').html(); //Get HTML of the "block" container
		var imgDescHeight = $(".main_image");.find('block').height(); //Find the height of the "block"

		if ($(this).is(".active")) { //If the list item is active/selected, then...
			return false; //Don't click through - prevents repetitive animations on active/selected list-item
		}
		else { //If not active then...
			//Animate the description
			$(".main_image .block").animate({ opacity: 0, marginBottom: -imgDescHeight }, 250, function() { //Pull the block down (negative bottom margin of its own height)
				$(".main_image .block").html(imgDesc).animat({ opacity: 0.85, marginBottom: "0" }, 250 ); //swap the HTML of the block, then pull the block container back up and set opacity
				$(".main_image img").attr({ src: imgTitle , alt: imgAlt }); //Switch the main image (URL + alt tag)
			});
			}
			//Show active list-item
			$(".image_thumb ul li").removeClass('active'); //Remove class of 'active' on all list-items
			$(this).addClass('active'); //Add class of 'active' on the selected list
			return false;
	});
	.hover(function() { //Hover effects on list-item
		$(this).addClass('hover'); //Add class "hover" on hover
		}, function() {
		$(this).removeClass('hover'); //Remove class "hover" on hover out
		});

	$("a.collapse").click(function() {
		$(".main_image .block").slideToggle(); //Toggle the description (slide up and down)
		$("a.collapse").toggleClass("show"); //Toggle the class name of "show" (the hide/show tab)
	});
});