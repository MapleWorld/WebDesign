$(document).ready(function() {

	$(".menu-pic-item").fadeTo(0 ,0.3);
	
	var myTimeout;

	$(".menu-pic-item").hover(function(){
			$(this).fadeTo("slow", 1);
	});
  
	$(".menu-pic-item").mouseout(function(){
		$(this).fadeTo("slow", 0.3);
	});

	//Modal Trigger Function Call
	$("#modal_trigger").leanModal({top : 200, overlay : 0.6, closeButton: ".modal_close" });
	
	$(function(){
		$("#modal_trigger").click(function(){
			$(".user_contact").load("contact.php");
			return false;
		});
	});
	
	$.supersized({
	
		// Functionality
		slide_interval          :   10000,		// Length between transitions
		transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed		:	700,		// Speed of transition
												   
		// Components							
		slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
		slides 					:  	[			// Slideshow Images
											{image : './img/a.jpg', title : 'Ou Ye', thumb : './img/a.jpg'},
											{image : './img/b.jpg', title : 'Ou Ye', thumb : './img/b.jpg'},  
											{image : './img/c.jpg', title : 'Ou Ye', thumb : './img/c.jpg'},
											{image : './img/d.jpg', title : 'Ou Ye', thumb : './img/d.jpg'},
											{image : './img/e.jpg', title : 'Ou Ye', thumb : './img/e.jpg'},
											{image : './img/f.jpg', title : 'Ou Ye', thumb : './img/f.jpg'},
											{image : './img/g.jpg', title : 'Ou Ye', thumb : './img/g.jpg'},
											{image : './img/h.jpg', title : 'Ou Ye', thumb : './img/h.jpg'},
											{image : './img/i.jpg', title : 'Ou Ye', thumb : './img/i.jpg'},
											{image : './img/j.jpg', title : 'Ou Ye', thumb : './img/j.jpg'},
											{image : './img/k.jpg', title : 'Ou Ye', thumb : './img/k.jpg'},
											{image : './img/l.jpg', title : 'Ou Ye', thumb : './img/l.jpg'},
									]
		
	});
	
});


