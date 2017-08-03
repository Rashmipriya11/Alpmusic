$(document).ready(function() {
	$('.ham').click(function() {
		$('.site-nav > ul').slideToggle();
	});	
});
$(document).ready(function() {
	$('#submit').click(function() {
		if($('#f_name').val()=="")
		{
			alert('Please enter a valid name');
			return;
		}
		if($('#f_number').val()=="")
		{
			alert('Please enter a valid Number');
			return;
		}
		if($('#f_email').val()=="")
		{
			alert('Please enter a valid Email ID');
			return;
		}
		if($('#f_message').val()=="")
		{
			alert('Please enter a valid message');
			return;
		}
		var formData={
            name:$('#f_name').val().toString(),
            number:$('#f_number').val().toString(),
            email:$('#f_email').val().toString(),
            message:$('#f_message').val().toString()
        };
	    console.log(formData);
		$.ajax({
    url : "send.php",
    type: "POST",
    data : formData,
    success: function(data, textStatus, jqXHR)
    {
        console.log(data);
        alert('Thank you for contacting us!We received your message, we will get back to you within 24 hours.');
    },
    error: function (jqXHR, textStatus, errorThrown)
    {
 	console.log(errorThrown);
    }
});

	});	
});
