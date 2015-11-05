$(function(){
  $("#language").on('click',function(e){
    $("body").toggleClass("body-background");
    $("body").toggleClass("coding-background");
    e.preventDefault();
    var language = ($(e.target).attr("value"));
    var data = {language: language};

    $.ajax({
    type:"POST",
    url:'/coding-challenges',
    dataType: 'json',
    data: data
    }).done(function(response){
      // console.log(response);
      $(".language_selection").fadeOut(800,function(){
        $(this).css({display:"none"});
        //animation complete
      }); 
      var interval = setTimeout(function(){
        $(HandlebarsTemplates['kata/ace'](response))
        .appendTo("body").hide().fadeIn(5000, function(){});
      }, 800);


    });
  });
  $("body").on("click", "#codesubmit", function(e){
    console.log(editor.getValue());
  });
});