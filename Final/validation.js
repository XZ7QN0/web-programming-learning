function validation() {
    var firstname, lastname, phone, age, text = "";

    // Gets the data from the form input fields
    firstname = document.getElementById("firstname").value;
    lastname = document.getElementById("lastname").value;
    phone = document.getElementById("phone").value;
    age = document.getElementById("age").value;

    // Validates that firstname and lastname are not empty
    if (firstname == '' || lastname == '') {
        alert("Please enter your first and last name");
        return false;
    } else {
        text += "Names are OK!";
    }

    // Validates that the phone number only has numbers in it
    if (isNaN(phone) || phone == '') {
        alert("Invalid phone number. Please enter a phone number with no dashes");
        return false;
    } else {
        text += "\nPhone number is OK!";
    }

    // Validates that the age is a number, is over 18 and under 120
    if (isNaN(age) || age < 18 || age > 120) {
        alert("Invalid age. Please put an age between 18 and 120.");
        return false;
    } else {
        text += "\nAge is OK!";
    }

    alert(text);
}
