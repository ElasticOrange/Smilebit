$(document).ready(function(){

	$('#request-contact').click(function(){
        $('#modal-background').fadeIn(200, function(){
            $('.modal').css({'display':'block'}).animate({'top':'-450px'}, 200);
        });
        return false;
    });

	$('#boxclose').click(function(){
		$('.modal').animate({'top':'-2900px'}, 500, function(){
            $('#modal-background').fadeOut('fast');
        });
	});

	$('[data-email=true]').click(ajax_email);

	function ajax_email(e)
	{
		var p;
		e.preventDefault();
		p = {
			nume: $('[data-myname=true]').val(),
			email: $('[data-myemail=true]').val(),
			bodyMessage: $('.msg-body').val(),
			};
		return $.ajax(
		{
			url: $('[data-modal=true]').attr('action'),
			type: $('[data-modal=true]').attr('method'),
			data: p,
			content: 'json',
			success: function(s)
            {
                $('.modal').animate({'top':'-900px'}, 500, function(){
		            $('#modal-background').fadeOut('fast');
		        });
                console.log("OK");
            },
            error: function(p)
            {
                if (typeof p.responseJSON.nume != 'undefined')
                {
                    console.log('Nu exista nume');
                }

                if (typeof p.responseJSON.email != 'undefined')
                {
                    console.log('Nu exista email');
                }

                console.log(p);
            }
		});
	};

});