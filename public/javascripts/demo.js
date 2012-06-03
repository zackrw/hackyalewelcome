var text, main, body, dynamic_button;
var dynamic = false;
$(function(){
  text = $('.demo_textarea');
  main = $('.demo_main');
  dynamic_button = $('.dynamic');
  text.val(main.html().replace(/></g, ">\n<"));

  $('.save').click(function(){
    align();
    text.focus();
  });

  $(text).keyup(function(){
    if(dynamic){
      align();
    }
  });

  $(dynamic_button).click(function(){
    dynamic = dynamic ? false : true;
    var newHTML = dynamic ? "go back to static" : "get dynamic!";
    $(dynamic_button).html(newHTML);
    text.focus();
  });

});

function align(){
  var theHTML = text.val();
  main.html(theHTML);
}
