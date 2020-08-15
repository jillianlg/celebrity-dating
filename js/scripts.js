// user interface
$(document).ready(function() {
  console.log("Script executing!")
  $("form#profileInfo").submit(function(event) {
    console.log("Submit form successfully reached.");
    event.preventDefault();
    let age = $("#age").val();
    let color = $("#color").val();
    let location = $("#location").val();

    $(".flounder, .merlin, .cruella, .ursala, .jafar, .pocahontas").hide();

    if (age) {   
      if (age < 18) {
        $(".flounder, .matchTitle").show(); 
        $(".btn").hide();
        }
        else if (age > 65) {
          $(".merlin, .matchTitle").show();
          $(".btn").hide();    
        }
        else if (color === "Red" && location === "City") {
          $(".cruella, .matchTitle").show();  
          $(".btn").hide();
        }
        else if (color === "Purple" && location === "Ocean") {
          $(".ursala, .matchTitle").show();  
          $(".btn").hide();
        }
        else if (color === "Black" && location === "Desert") {
          $(".jafar, .matchTitle").show();  
          $(".btn").hide();
        }
        else {
          $(".pocahontas, .matchTitle").show();
          $(".btn").hide();
        }      
      }
      else {
        alert("Please enter your age");
      }
      
  });
});