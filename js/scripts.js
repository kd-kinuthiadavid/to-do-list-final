function list(item){
  this.firstItem = item;
}


$(document).ready(function(){
  $("form#FORM").submit(function(event){
    event.preventDefault();

    var userInput = $("input#INPUT").val();
    var newList = new list(userInput);

    $("ul#to-be-added").append("<li>" + userInput + "<button class = 'removes'>&#9747</button>" + "</li>");
    $('.removes').on("click", function(){
      $(this).parent().remove();
    });
    $("input#INPUT").val("");
  });
  });
