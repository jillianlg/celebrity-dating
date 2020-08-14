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
        }
        else if (age > 65) {
          $(".merlin, .matchTitle").show();    
        }
        else if (color === "Red" && location === "City") {
          $(".cruella, .matchTitle").show();  
        }
        else if (color === "Purple" && location === "Ocean") {
          $(".ursala, .matchTitle").show();  
        }
        else if (color === "Black" && location === "Desert") {
          $(".jafar, .matchTitle").show();  
        }
        else {
          $(".pocahontas, .matchTitle").show();
        }      
      }
      else {
        alert("Please enter your age");
      }
      
  });
});