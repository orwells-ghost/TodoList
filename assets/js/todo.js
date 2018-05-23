//Strike through todos
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed")
});

//Click on X span to delete
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(600,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

//Get input from user and add to todo list
$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> " + todoText + "</li>");
  }
});
