function Client(firstName, lastName, title, address, city, state, zip, phone, sex) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phone = phone;
    this.sex = sex;
}

function printClientInfo() {
    var client = new Client();

    client.firstName = document.getElementById("firstName").value;
    client.lastName = document.getElementById("lastName").value;
    client.title = document.getElementById("title").value;
    client.address = document.getElementById("address").value;
    client.city = document.getElementById("city").value;
    client.state = document.getElementById("state").value;
    client.zip = document.getElementById("zip").value;
    client.phone = document.getElementById("phone").value;
    client.sex = document.getElementById("sex").value;

    document.form1.clientInfo.value = "Client Information\n" +
        "First Name: " + client.firstName +
        "\nLast Name: " + client.lastName +
        "\nTitle: " + client.title +
        "\nAddress: " + client.address +
        "\nCity: " + client.city +
        "\nState: " + client.state +
        "\nZip: " + client.zip +
        "\nPhone: " + client.phone +
        "\nSex: " + client.sex;
}
