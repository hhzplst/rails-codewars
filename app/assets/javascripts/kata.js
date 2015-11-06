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
        $(".language_selection").fadeOut(300,function(){
          $(this).css({display:"none"});
          //animation complete
        }); 
        var interval = setTimeout(function(){
          $(HandlebarsTemplates['kata/ace'](response))
          .appendTo("body").hide().fadeIn(3500, function(){});
        }, 300);


      });
    });
    $("body").on("click", "#cleanup", function(e){
      $("#editor").text("");
    });

    $("body").on("click", "#codesubmit", function(e){
      $("#error").empty();
      var data = {answer: editor.getValue()};
      $.ajax({
        type: "POST",
        url: "/submit-answer",
        dataType: 'json',
        data: data
      }).done(function(response){
        var data2 = {dmid: response["dmid"]};
         var interval = setTimeout(function(response){
          $.ajax({
            type: "POST",
            url:"/check-answer",
            dataType: 'json',
            data: data2
          }).done(function(response){
            console.log(response);
            if(response.errors){
              $(HandlebarsTemplates['kata/errors'](response))
              .appendTo("#error").hide().slideDown("slow", function(){
              });}
         //    else{
         //      // $(HandlebarsTemplates['kata/corrects'](response))
         //      // .appendTo("#error").hide().slideDown("slow", function(){
         //        var inter = setTimeout(function(){
         //          // $("#correct").fadeOut(600, function(){});
         //          //
         //          $.ajax({
         //            type:"POST",
         //            url:'/coding-challenges',
         //            dataType: 'json'
         //            }).done(function(response){
         //              // console.log(response);
         //              $("#coding-challenge").fadeOut(300,function(){
         //                console.log("here", $(this));
         //                $(this).empty();
         //                //animation complete
         //              var interval = setTimeout(function(){
         //                $(HandlebarsTemplates['kata/ace'](response))
         //                .appendTo("body").hide().fadeIn(3500, function(){
         //                });
         //                }, 1200);
         //              });
         //            });
         //            //
         //      }, 1000);
         //  // });
         // }
      });
    },1000);
    });//done line 41
  });//line 32 start of function


    $("body").on("click", "#skip", function(e){
      $.ajax({
      type:"POST",
      url:'/coding-challenges',
      dataType: 'json'
      }).done(function(response){
        $("#error").fadeOut("slow", function(){});
        //
        $("#coding-challenge").fadeOut(300,function(){
          $(this).empty();
          //animation complete
        var interval = setTimeout(function(){
          $(HandlebarsTemplates['kata/ace'](response))
          .appendTo("body").hide().fadeIn(3500, function(){
          });
          }, 300);

        });
      }); 
    });
  });










