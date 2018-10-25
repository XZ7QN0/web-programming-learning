/**
 * Object constructor with 9 variables
 */
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

/**
 * Function created to assign values to the Client object
 *  passed from the function that gets called in client.html
 */
function assignClientInfo(client) {
    client.firstName = document.getElementById("firstName").value;
    client.lastName = document.getElementById("lastName").value;
    client.title = document.getElementById("title").value;
    client.address = document.getElementById("address").value;
    client.city = document.getElementById("city").value;
    client.state = document.getElementById("state").value;
    client.zip = document.getElementById("zip").value;
    client.phone = document.getElementById("phone").value;
    client.sex = document.getElementById("sex").value;
}

/**
 ********************************************
 * Function that is called within client.html
 ********************************************
 * Creates a client object,
 *  assigns the values given from the form, 
 *  and returns the results to a text area.
 *
 ********************************************
 * document.form1.clientInfo.value sets the 
 * value of clientInfo contained within 
 * form 'form1'
 ********************************************
 * document: intial call to the HTML document.
 * form1: call to the form by the form's id
 * clientInfo: call to the text area by its id
 * value: sets the text of that text area to be something
 */
function printClientInfo() {
    var client = new Client();

    assignClientInfo(client);

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
