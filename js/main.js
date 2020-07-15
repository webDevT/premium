$(function(){
$(".premium-modal__close").click(function() {
$(".premium-modal__wrapper").hide();

});



});

$(function(){
	$(".tab").click(function() {
	$(".tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

});
