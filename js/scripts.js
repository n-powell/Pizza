//Business Logic---------

function Pizza (topping) {
  this.toppings = topping;

}

Pizza.prototype.fullPizza = function() {
  return this.toppings
}




//User Logic---------
$(document).ready(function(){
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    var inputtedToppings = $("input#new-toppings").val();
    var inputtedSize = $("input#size").val();
    console.log(inputtedToppings);
    $("ul#toppings").append("<li>" + inputtedToppings + "</li>");

  });







});
