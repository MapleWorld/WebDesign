$(document).ready(function() {





/*
jQuery("#wowslider-container").wowSlider({
	effect:"rotate",
	prev:"",
	next:"",
	duration:20*100,
	delay:20*100,
	width:580,
	height:212,
	autoPlay:true,
	stopOnHover:false,
	loop:false,
	bullets:true,
	caption:true,
	captionEffect:"slide",
	controls:true,
	logo:"",images:0
});


*/

	$(".menu-pic-item").fadeTo("slow",0.5);
	
	$(".menu-pic-item").hover(function(){
		$(this).fadeTo("slow",1);
	});
  
	$(".menu-pic-item").mouseout(function(){
		$(this).fadeTo("slow",0.5);
	});
	
	//Modal Trigger Function Call
	$("#modal_trigger").leanModal({top : 200, overlay : 0.6, closeButton: ".modal_close" });
	
	$(function(){
		$("#modal_trigger").click(function(){
			$(".user_contact").load("contact.php");
			return false;
		});
	});
	
	// Gallery Page
	// Categories Desciption 
	$("#landscape").mouseover(function(){
		$("#landscapeTitle").fadeOut(150);
	});
	$("#landscape").mouseout(function(){
		$("#landscapeTitle").fadeIn(150);
	});
	
	$("#portrait").mouseover(function(){
		$("#portraitTitle").fadeOut(150);
	});
	$("#portrait").mouseout(function(){
		$("#portraitTitle").fadeIn(150);
	});
	
	$("#wildlife").mouseover(function(){
		$("#wildlifeTitle").fadeOut(150);
	});
	$("#wildlife").mouseout(function(){
		$("#wildlifeTitle").fadeIn(150);
	});
	
	$("#plant").mouseover(function(){
		$("#plantTitle").fadeOut(150);
	});
	$("#plant").mouseout(function(){
		$("#plantTitle").fadeIn(150);
	});
	
	$("#nightPhotography").mouseover(function(){
		$("#nightPhotographyTitle").fadeOut(150);
	});
	$("#nightPhotography").mouseout(function(){
		$("#nightPhotographyTitle").fadeIn(150);
	});
	
	$("#misc").mouseover(function(){
		$("#miscTitle").fadeOut(150);
	});
	$("#misc").mouseout(function(){
		$("#miscTitle").fadeIn(150);
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

