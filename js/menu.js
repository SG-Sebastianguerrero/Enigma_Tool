
$(document).ready(function(){
$('.fullMenu').hide();
    $('#btnMenu').click(function(){
        $('.menu').toggleClass('close');
        $('.fullMenu').slideToggle(500);
    });
});