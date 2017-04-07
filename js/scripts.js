//Business Logic---------

function Pizza () {
  this.toppings = [];
  this.pizzaSize = "";

}

Pizza.prototype.fullPizza = function() {
  return  "Your " + [this.pizzaSize] + " pizza. With " + [this.toppings] + " .Will be $";
}




//User Logic---------
$(document).ready(function(){
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    var newPizza = new Pizza();
    var inputtedToppings = $("input:checkbox[name=toppings]:checked").each(function(){
      var topping = $(this).val();
      newPizza.toppings.push(topping);
    });
    var inputtedSize = $("input:radio[name=size]:checked").each(function(){
      var size = $(this).val();
      newPizza.pizzaSize = size;
    });

    $("ol#toppings").append("<li>" + newPizza.toppings + "</li>");
    $("#newSize").append("<li>" + newPizza.pizzaSize + "</li>");
    $("#description").append("<li>" + newPizza.fullPizza() + "</li>");
    console.log(newPizza);

  });
});
