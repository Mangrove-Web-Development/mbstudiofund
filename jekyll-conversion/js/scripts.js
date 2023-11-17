


$( document ).ready(function() {
    
    
    $("#emailTrigger").click(function(e){
        e.preventDefault();
        $(this).addClass('hidden');
        $('#email').removeClass('hidden');
    });

});