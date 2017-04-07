//Business Logic---------

function Pizza () {
  this.toppings = [];
  this.pizzaSize = "";
  this.pizzaPrice = "";

}

Pizza.prototype.fullPizza = function() {
  return  "Your " + [this.pizzaSize] + " pizza. With " + [this.toppings] + " .Will be $";
}

Pizza.prototype.pizzaCalc = function() {
  if (this.pizzaSize === "large") {
    return  20
  }
  else
    return 12
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
    var pizzaPrice = newPizza.pizzaCalc

    $("ol#toppings").append("<li>" + newPizza.toppings + "</li>");
    $("#newSize").append("<li>" + newPizza.pizzaSize + "</li>");
    $("#description").append("<li>" + newPizza.fullPizza() + "</li>");
    console.log(newPizza);
    console.log(newPizza.pizzaCalc());

  });
});
