// user interface
$(document).ready(function() {
  $("form#profileInfo").submit(function(event) {
    event.preventDefault();
    let age = $("#age").val();
    let color = $("#location").val();
    let location = $("location").val();

    $(".flounder, .merlin, .cruella, .ursula, .jafar, .pocahontas").hide();

    if (age) {   
      if (age < 18) {
        $(".flounder, .matchTitle").show(1000);  
        }
        else if (age > 65) {
          $(".merlin, .matchTitle").show(1000);    
        }
        else if (age >= 18 && age < 25 || color === "red" && location === "city") {
          $(".cruella, .matchTitle").show(1000);  
        }
        else if (age >= 18 && age < 25 || color === "purple" && location === "ocean") {
          $(".jafar, .matchTitle").show(1000);  
        }
        else if (age >= 18 && age < 25 || color === "black" && location === "desert") {
          $(".jafar, .matchTitle").show(1000);  
        }
        else {
          $(".pocahontas, .matchTitle").show(500);
        }      
      }
      else {
        alert("Please enter your age");
      }
  });
});