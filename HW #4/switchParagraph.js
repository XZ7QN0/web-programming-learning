function switchParagraph() {
    // Declare variables, as well as temp variable for swapping
    var p1 = document.getElementById("p1"),
        p2 = document.getElementById("p2"),
        p1text = p1.textContent;

    // Swaps the location of each paragraph
    p1.innerHTML = p2.textContent;
    p2.innerHTML = p1text;
}
