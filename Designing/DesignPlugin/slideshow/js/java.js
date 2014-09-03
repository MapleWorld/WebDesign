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
														{image : './img/Index/a.jpg', title : 'Ou Ye', thumb : './img/Index/a.jpg'},
														{image : './img/Index/b.jpg', title : 'Ou Ye', thumb : './img/Index/b.jpg'},  
														{image : './img/Index/c.jpg', title : 'Ou Ye', thumb : './img/Index/c.jpg'},
														{image : './img/Index/d.jpg', title : 'Ou Ye', thumb :  './img/Index/d.jpg'}
												]
					
				});
	
	
});



/*
	var overlay = $("<div id='lean_overlay'>Test</div>");
	$("body").append(overlay);

	function testModal(htmlPage, formID, triggerID){

		var dlg=$(formID).dialog({
			resizable: false,
			autoOpen: false,
			height: 400,
		});
		
		$(dlg).load(htmlPage, function(){
			 dlg.dialog('open');
		});
	}
	

	$(document).ready(function() { 
		//$("#modal_trigger").leanModal({top : 200, overlay : 0.6, closeButton: ".modal_close" });
		/*
		 var dlg=$('#contactform').dialog();
		 $('#modal_trigger').click(function(e) {
			 dlg.load('contact.html', function(){
				 dlg.dialog('open');
			 });
		  }); 
	}); 
*/

