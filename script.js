$(document).ready(function () {
    $(".date").text(moment().format('MMMM Do YYYY, h:mm a')) // Sets current date and time on screen

    setText();
    setColor($("#textOne"));
    setColor($("#textTwo"));
    setColor($("#textThree"));
    setColor($("#textFour"));
    setColor($("#textFive"));
    setColor($("#textSix"));
    setColor($("#textSeven"));
    setColor($("#textEight"));
    setColor($("#textNine"));
    setColor($("#textTen"));
    setColor($("#textEleven"));
    setColor($("#textTwelve"));
    setColor($("#textThirteen"));
    setColor($("#textFourteen"));
    setColor($("#textFifteen"));

    $("#saveOne").on("click", function () { // Click events for each of the buttons
        getText($("#textOne"), "textOne");
    })
    $("#saveTwo").on("click", function () {
        getText($("#textTwo"), "textTwo");
    })
    $("#saveThree").on("click", function () {
        getText($("#textThree"), "textThree");
    })
    $("#saveFour").on("click", function () {
        getText($("#textFour"), "textFour");
    })
    $("#saveFive").on("click", function () {
        getText($("#textFive"), "textFive");
    })
    $("#saveSix").on("click", function () {
        getText($("#textSix"), "textSix");
    })
    $("#saveSeven").on("click", function () {
        getText($("#textSeven"), "textSeven");
    })
    $("#saveEight").on("click", function () {
        getText($("#textEight"), "textEight");
    })
    $("#saveNine").on("click", function () {
        getText($("#textNine"), "textNine");
    })
    $("#saveTen").on("click", function () {
        getText($("#textTen"), "textTen");
    })
    $("#saveEleven").on("click", function () {
        getText($("#textEleven"), "textEleven");
    })
    $("#saveTwelve").on("click", function () {
        getText($("#textTwelve"), "textTwelve");
    })
    $("#saveThirteen").on("click", function () {
        getText($("#textThirteen"), "textThirteen");
    })
    $("#saveFourteen").on("click", function () {
        getText($("#textFourteen"), "textFourteen");
    })
    $("#saveFifteen").on("click", function () {
        getText($("#textFifteen"), "textFifteen");
    })

})

function getText(textEl, number) { // Gets the text from the textbox and saves it to local storage
    let text = textEl.val();
    localStorage.setItem(number, text)
}

function setText() { // Fills the textboxes with data from local storage
    $("#textOne").text(localStorage.getItem("textOne"));
    $("#textTwo").text(localStorage.getItem("textTwo"));
    $("#textThree").text(localStorage.getItem("textThree"));
    $("#textFour").text(localStorage.getItem("textFour"));
    $("#textFive").text(localStorage.getItem("textFive"));
    $("#textSix").text(localStorage.getItem("textSix"));
    $("#textSeven").text(localStorage.getItem("textSeven"));
    $("#textEight").text(localStorage.getItem("textEight"));
    $("#textNine").text(localStorage.getItem("textNine"));
    $("#textTen").text(localStorage.getItem("textTen"));
    $("#textEleven").text(localStorage.getItem("textEleven"));
    $("#textTwelve").text(localStorage.getItem("textTwelve"));
    $("#textThirteen").text(localStorage.getItem("textThirteen"));
    $("#textFourteen").text(localStorage.getItem("textFourteen"));
    $("#textFifteen").text(localStorage.getItem("textFifteen"));
}

function setColor(textEl) { // Sets the color of the textboxes background color to show if that time has passed or is close to passing
    let currentTime = (+moment().format("H") );
    if (textEl.attr("data-time") <= currentTime) {
        textEl.css("background-color", "lightgrey");
    }
    else if (textEl.attr("data-time") == currentTime + 1) {
        textEl.css("background-color", "gold");
    }
    else if (textEl.attr("data-time") > currentTime) {
        textEl.css("background-color", "lightblue");
    }
}