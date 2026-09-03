let selectedClothing = "";
let pricePerDay = 0;

// Select clothing
function selectClothing(name, price) {
    selectedClothing = name;
    pricePerDay = price;

    document.getElementById("selectedItem").innerHTML =
        "Selected: " + name + " - ₹" + price + " per day";
}

// Book clothing
function bookClothing() {

    let days = document.getElementById("days").value;

    // Check clothing selection
    if (selectedClothing === "") {
        alert("Please select a clothing item!");
        return;
    }

    // Check rental days
    if (days <= 0 || days === "") {
        alert("Please enter valid rental days!");
        return;
    }

    // Calculate total price
    let totalPrice = pricePerDay * days;

    // Display booking confirmation
    document.getElementById("result").innerHTML =
        "Booking Successful!<br>" +
        "Clothing: " + selectedClothing + "<br>" +
        "Rental Days: " + days + "<br>" +
        "Total Amount: ₹" + totalPrice;
}