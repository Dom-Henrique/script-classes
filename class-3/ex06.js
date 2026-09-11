let [distance, meanConsume, fuelPrice] = prompt("Distance, mean consume, fuelPrice:").trim().split(" ");
distance = Number(distance);
meanConsume = Number(meanConsume);
fuelPrice = Number(fuelPrice);
const kmQtd = distance*meanConsume, travelCost = kmQtd*fuelPrice;
alert(`Fuel quantity: ${kmQtd}\nTravel cost: ${travelCost}`)