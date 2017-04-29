$(document).ready(function(){
	$('.addbtn').on('click',function(){
		if($('#myinput').val()){
			$('#myul').append("<li class='list'>"+$('#myinput').val()+"<span class='close'>X</span></li>")
			$(".list").unbind();

            $('.list').on('click',function(){
                $(this).toggleClass('check');
            });
            
            $('.close').on('click',function(){
                $(this).parent().remove();
            });

			$('#myinput').val("");
		}
		else{alert("please input do it list.");}
		
});

	});