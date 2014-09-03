$(document).ready(function() {
	
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
		$("#landscapeTitleBox").fadeOut(300);
	});
	$("#landscape").mouseout(function(){
		$("#landscapeTitleBox").fadeIn(300);
	});
	
	$("#portrait").mouseover(function(){
		$("#portraitTitleBox").fadeOut(300);
	});
	$("#portrait").mouseout(function(){
		$("#portraitTitleBox").fadeIn(300);
	});
	
	$("#wildlife").mouseover(function(){
		$("#wildlifeTitleBox").fadeOut(300);
	});
	$("#wildlife").mouseout(function(){
		$("#wildlifeTitleBox").fadeIn(300);
	});
	
	$("#plant").mouseover(function(){
		$("#plantTitleBox").fadeOut(300);
	});
	$("#plant").mouseout(function(){
		$("#plantTitleBox").fadeIn(300);
	});
	
	$("#nightPhotography").mouseover(function(){
		$("#nightPhotographyTitleBox").fadeOut(300);
	});
	$("#nightPhotography").mouseout(function(){
		$("#nightPhotographyTitleBox").fadeIn(300);
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

