$(function(){
  $('#rain').click(function(){
    $(document).snowfall();
    $('#confetti_0').snowfall({flakeCount : 150, maxSpeed : 8, flakeColor : "#F09", round: false, shadow:true, minSize:3, maxSize:7});
    $('#confetti_1').snowfall({flakeCount : 150, maxSpeed : 8, flakeColor : "#6F0", round: false, shadow:true, minSize:3, maxSize:7});
    $('#confetti_2').snowfall({flakeCount : 150, maxSpeed : 8, flakeColor : "#09F", round: false, shadow:true, minSize:3, maxSize:7});
    $('#confetti_3').snowfall({flakeCount : 150, maxSpeed : 8, flakeColor : "#FF9", round: false, shadow:true, minSize:3, maxSize:7});  
  });
});