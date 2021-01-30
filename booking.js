function selectBooking(booking, isIncrease) {
    const bookingInput = document.getElementById(booking + "-input");
    const bookingCount = parseInt(bookingInput.value);

    let bookingNewCount = bookingCount;
    if (isIncrease == true) {
        bookingNewCount = bookingCount + 1;
    } if (isIncrease == false && bookingCount > 0) {
        bookingNewCount = bookingCount - 1;
    }
    bookingInput.value = bookingNewCount;
    calculatePrice();
}

// calculating total price with tax
function calculatePrice() {
    const firstClassCount = getBooking("firstClass");
    const economyCount = getBooking("economy");
    const subTotalPricing = firstClassCount * 150 + economyCount * 100;
    document.getElementById("subtotal").innerText = "$" + subTotalPricing;

    const tax = Math.round(subTotalPricing * 0.1);
    document.getElementById("tax").innerText = "$" + tax;

    const total = subTotalPricing + tax;
    document.getElementById("total").innerText = "$" + total;
}

// creating an atomic function to set DOM control
function getBooking(booking) {
    const bookingInput = document.getElementById(booking + "-input");
    const bookingCount = parseInt(bookingInput.value);
    return bookingCount;
}

// booking and reset button handling
function bookingBtn(isBlock) {
    const bookingWindow = document.getElementById("booking-window");
    const orderWindow = document.getElementById("order-window");
    if (isBlock == true) {
        bookingWindow.style.display = "none";
        orderWindow.style.display = "block";
    } if (isBlock == false) {
        bookingWindow.style.display = "block";
        orderWindow.style.display = "none";
    }
}

