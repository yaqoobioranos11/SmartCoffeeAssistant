let username = prompt("Enter username");
let password = prompt("Enter password");

let role = "";
let securityLevel = "";

if ((username === "admin" || username === "user") && password === "1234") {
    role = username;
    securityLevel = (username === "admin") ? "high" : "low";
    document.getElementById("welcome-message").innerHTML = `
    👋Welcome, <strong>${username}</strong>!<br>
    🎉Let's order your coffee now!`;
} else {
    alert("Incorrect credentails. Acccess denied. ");
    throw new Error("Login failed");
}
let name = prompt("What is your name?");
let age = parseInt(prompt("What is your age?"));

let coffeeType = prompt("What type of coffee would you like? (espresso, latte, cappuccino)");
let quantity = parseInt(prompt("How many cups would like?"));

let pricePerCup = 0;

if (coffeeType === "espresso") {
    pricePerCup = 2.5;
} else if (coffeeType === "latte") {
    pricePerCup = 3.5;
} else if (coffeeType === "cappuccino") {
    pricePerCup = 4.0;
} else {
    alert("Invalid coffee type.");
    throw new Error("Invalid coffee type");
}

let originalTotal = pricePerCup *
quantity;

let discount = 0;
if (age < 18 || age > 60) {
    discount = originalTotal * 0.10;
}

let finalTotal = originalTotal -
discount;

alert(`Hello ${name}!
    You ordered ${quantity} ${coffeeType}(s).
    Original total: $${originalTotal.toFixed(2)}
    Discount: $${discount.toFixed(2)}
    Final total: $${finalTotal.toFixed(2)}`);

    let people = parseInt(prompt("How many people are splitting the bill? (1, 2, 3,)"));
    let tipPercent =
    parseInt(prompt("What tip percentage would you like to give? (0, 5, 10, or 15"));
    
    let tipAmount = finalTotal *
    (tipPercent / 100);
    let totalWithTip = finalTotal +
    tipAmount;
    let perPerson = totalWithTip /
    people;

    alert(`Tip: $${tipAmount.toFixed(2)}
    Total with Tip: $${totalWithTip.toFixed(2)}
    Split between ${people} people: $${perPerson.toFixed(2)} each`);
    
