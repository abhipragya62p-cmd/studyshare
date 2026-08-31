// Mobile menu

function toggleMenu() {

    const nav = document.querySelector("nav");

    nav.classList.toggle("active");

}


// Service button

function showMessage(service) {

    alert(
        "You selected: " + service +
        "\n\nThanks for your interest! 🚀"
    );

}


// Contact form

function sendMessage() {

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;


    if (name === "" || email === "" || message === "") {

        alert("Please fill all the fields.");

        return;
    }


    alert(
        "Thank you, " + name +
        "! Your message has been received. 🎉"
    );


    document.getElementById("name").value = "";

    document.getElementById("email").value = "";

    document.getElementById("message").value = "";

}