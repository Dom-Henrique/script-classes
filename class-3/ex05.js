let [price, qtd, discount] = prompt("Price, quantity and discount:").trim().split(" ");
let subtotal = price*qtd;
alert(`Subtotal: ${subtotal}\nDiscounted: ${subtotal-(subtotal*(discount/100))}`)