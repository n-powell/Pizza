//Business Logic---------

function Pizza() {
  this.toppings = [];
  this.pizzaSize = "";
  this.pizzaPrice = "";
}


Pizza.prototype.fullPizza = function() {
  return "Your " + this.pizzaSize + " pizza with " + [this.toppings] + ". Will be $" + this.pizzaPrice + " dollars. Thank You!";
}

Pizza.prototype.pizzaCalc = function() {
  if (this.pizzaSize === "large") {
    return 22
} else if (this.pizzaSize === "small")
    return 12
}



//User Logic---------

$(document).ready(function() {
  var pizzaTotal = []
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    var newPizza = new Pizza();
    var inputtedToppings = $("input:checkbox[name=toppings]:checked").each(function() {
      var topping = $(this).val();
      newPizza.toppings.push(topping);
    });
    var inputtedSize = $("input:radio[name=size]:checked").each(function() {
      var size = $(this).val();
      newPizza.pizzaSize = size;
    });

    newPizza.pizzaPrice = newPizza.pizzaCalc();
    pizzaTotal.push(newPizza.pizzaPrice)

    var sum = pizzaTotal.reduce((a, b) => a + b, 0);
    $("ol#toppings").append("<li>" + newPizza.toppings + "</li>");
    $("#newSize").append("<li>" + newPizza.pizzaSize + "</li>");
    $("#outputPrice").append("<li> $" + newPizza.pizzaPrice + " dollars</li>")
    $("#description").append("<li>" + newPizza.fullPizza() + "</li>");
    $("#totalPrice").text(sum);
    console.log(sum);

  });
});
