/* Javascript codes extracted from HTML*/
/* Joshua Henderson */
/* 11 Feb 2021 */

$(document).ready(function(){
  $("#dropdown").on('click','#janbtn', function(){
    $("#dropbtn").html("January");
  });
  $("#febbtn").click(function(){
    $("#dropbtn").html("February");
  });
  $("#marbtn").click(function(){
    $("#dropbtn").html("March");
  });
  $("#aprbtn").click(function(){
    $("#dropbtn").html("April");
  });
  $("#maybtn").click(function(){
    $("#dropbtn").html("May");
  });
  $("#junbtn").click(function(){
    $("#dropbtn").html("June");
  });
  $("#julbtn").click(function(){
    $("#dropbtn").html("July");
  });
  $("#augbtn").click(function(){
    $("#dropbtn").html("August");
  });
  $("#sepbtn").click(function(){
    $("#dropbtn").html("September");
  });
  $("#octbtn").click(function(){
    $("#dropbtn").html("October");
  });
  $("#novbtn").click(function(){
    $("#dropbtn").html("November");
  });
  $("#decbtn").click(function(){
    $("#dropbtn").html("December");
  });
});