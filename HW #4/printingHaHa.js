function printLaugh() {

    // Clears any initial value of ha paragraph tag
    document.getElementById("ha").innerHTML = "";

    // Declare variables for printing ha calculation, which can be retrieved by the laugh textbox
    var laughManyTimes = document.getElementById("laugh").value,
        p;

    // Loops and continuously appends the word "ha " for every iteration
    for (p = 0; p < laughManyTimes; p++) {
        document.getElementById("ha").innerHTML += "ha ";
    }
}
