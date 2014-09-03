<script type="text/javascript">

function notice(data, ms) {
    new jBox('Notice', {
        content: data,
        autoClose: ms
    });
}

$(document).ready(function() {
	
    $("#submit_btn").click(function(event) { 
        //get input field values
        var user_email      = $('input[name=email]').val();
        var user_subject    = $('input[name=subject]').val();
        var user_message    = $('textarea[name=message]').val();
        
        //simple validation at client's end
        //we simply change border color to red if empty field using .css()
        var proceed = true;
        if(user_email==""){ 
            $('input[name=email]').css('border-color','red'); 
            proceed = false;
        }
        if(user_subject=="") {    
            $('input[name=subject]').css('border-color','red'); 
            proceed = false;
        }
        if(user_message=="") {  
            $('textarea[name=message]').css('border-color','red'); 
            proceed = false;
        }

        //everything looks good! proceed...
        if(proceed){
            //data to be sent to server
            post_data = {'userEmail':user_email, 'userSubject':user_subject, 'userMessage':user_message};
            
            //Ajax post data to server
            $.post("contact_me.php", post_data, function(response){  
                
                //load json data from server and output message     
                if(response.type == 'error') {
                    output = '<div class="error">'+response.text+'</div>';
                } else {
                    output = '<div class="success">'+response.text+'</div>';
                    //reset values in all input fields
                    $('#contact_form input').val(''); 
                    $('#contact_form textarea').val(''); 
                }
             
                $("#result").hide().html(output).slideDown();
                  
                //Close the form and show the notice
				if(response.type == "message"){
					$("#lean_overlay").fadeOut(200);
					$(".popupContainer").css({
                        "display": "none"
                    });
                    
                    // Show notice for second then close it.
					notice(output, "2000");
                }

            }, 'json');
            
        } else {
        	event.preventDefault();
        }

    });
	
    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form input, #contact_form textarea").keyup(function() { 
        $("#contact_form input, #contact_form textarea").css('border-color',''); 
        $("#result").slideUp();
    });
    
});
</script>

<!-- Register Form -->
<fieldset id="contact_form"></fieldset>

<div id="result"></div>
<label>Email Address</label>
<input type="text" name="email" id="email">
<br />

<label>Subject</label>
<input type="text" name="subject" id="subject"/>
<br />

<label>Message</label>
<textarea type="text" rows="4" cols="33" name="message"  id="message"></textarea>
<br />

<div class="action_btns">
	<form>
		<button class="cancel_btn" id="cancel_btn">Cancel</button>
	</form>
	<button class="submit_btn" id="submit_btn">Submit</button>
</div>










