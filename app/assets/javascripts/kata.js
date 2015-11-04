$(function(){
  console.log("this");
  $("#language").on('click',function(e){
    e.preventDefault();
    var language = ($(e.target).attr("value"));
    var data = {katum:{language: language}};

    $.ajax({
    type:"post",
    url:'/coding-challenges',
    dataType: 'json',
    data: data}
    ).done(function(response)
    { //slide out form for lagnuage
      //change background to normal
      //slide in ACE/response
    });


    });
  });