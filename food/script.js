function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var food = document.getElementById("food").value;
    var delivery = document.querySelector('input[name="delivery"]:checked');

    if (name === "" || food === "" || delivery === null) {
        document.getElementById("error-message").innerHTML = "Name, food item, and delivery option are required";
        return false;
    }

    var quantity1 = document.getElementById("quantity1").checked;
    var quantity2 = document.getElementById("quantity2").checked;
    var quantity3 = document.getElementById("quantity3").checked;

    if (!quantity1 && !quantity2 && !quantity3) {
        document.getElementById("error-message").innerHTML = "Please select a quantity";
        return false;
    }

    // Email validation
    if (!validateEmail(email)) {
        document.getElementById("error-message").innerHTML = "Invalid email format";
        return false;
    }

    // Phone number validation
    if (!validatePhone(phone)) {
        document.getElementById("error-message").innerHTML = "Invalid phone number format";
        return false;
    }

    document.getElementById("error-message").innerHTML = "";
    return true;
}

function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePhone(phone) {
    var phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
}



