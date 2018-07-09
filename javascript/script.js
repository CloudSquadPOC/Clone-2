
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});


// click on X to delete todo:
$("ul").on("click", "span", function(event){
 $(this).parent().fadeOut(500, function(){
 $(this).remove();
 });
    event.stopPropagation();
});
// add todo
$("input[type='text']").keypress(function(event){
   if(event.which === 13){
    //    grab new todo from inpput
   var todoText = $(this).val();
//    clear innput:
    $(this).val("");
//    create new li and add to ul with the span:
      $("ul").append("<li><span> x </span> " + todoText + "</li>");
     }
});
$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});





























