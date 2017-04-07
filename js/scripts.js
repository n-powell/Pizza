//Business Logic---------

function Pizza () {
  this.toppings = [];

}

Pizza.prototype.fullPizza = function() {
  return this.toppings
}




//User Logic---------
$(document).ready(function(){
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    var newPizza = new Pizza();

    var inputtedToppings = $("input:checkbox[name=toppings]:checked").each(function(){
      var topping = $(this).val();
      newPizza.toppings.push(topping);
      console.log(newPizza.toppings);

    var inputtedSize = $("input#size").val();






    $("ul#toppings").append("<li>" + newPizza.toppings + "</li>");


    });

  });







});
