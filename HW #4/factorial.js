function factorial() {
    // Clears any initial value of factorialResult paragraph tag
    document.getElementById("factorialResult").innerHTML = "";

    // Declare variables for factorial calculation, which can be retrieved by the factorialInput textbox
    var num = document.getElementById("factorialInput").value,
        fact = 1,
        i;

    // Calculates the factorial value
    for (i = 1; i <= num; i++) {
        fact = fact * i;
    }

    /* Display the final value of the factorial and inserts it into the factorialResult paragraph tag
     ** NOTE: If placed within the for loop above, it will display every result up to the number 
     */
    document.getElementById("factorialResult").insertAdjacentHTML('beforeend', fact);
}
