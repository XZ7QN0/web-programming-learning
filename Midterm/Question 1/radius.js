function calculate() {
    var radius = document.getElementById("radius").value;

    function getDiameter(radius) {
        return 2 * radius;
    }

    function getArea(radius) {
        return Math.PI * Math.pow(radius, 2);
    }

    function getCircumference(radius) {
        return Math.PI * 2 * radius;
    }

    var diameter = getDiameter(radius),
        area = getArea(radius),
        circumference = getCircumference(radius);

    document.getElementById("radiusResult").innerHTML = "Diameter: " + diameter + "<br>" + "Area: " + area + "<br>" + "Circumference: " + circumference;
}
