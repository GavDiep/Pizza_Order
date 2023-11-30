// Program Title
document.getElementById("btn").addEventListener("click", showOrder);

function showOrder() {
  let topping1 = document.getElementById("topping1").value;
  let topping2 = document.getElementById("topping2").value;
  let size = document.getElementById("size").value;

  let order = `You ordered a pizza with:`;
  let domino = `Thank you for ordering from Domino's. Your pizza will be ready in 20 minutes.`;
  let toppings = `${topping1} ${topping2}`;

  document.getElementById("order-up").innerHTML = order;
  document.getElementById("domino's").innerHTML = domino;
  document.getElementById(
    "toppinglist"
  ).innerHTML = `<ul> <li>${topping1}</li> <li>${topping2}</li></ul>`;

  document.getElementById("pizza-img").innerHTML =
    '<img width="400px" src="images/pizza.png">';
}
