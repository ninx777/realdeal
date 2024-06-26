document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("passwordModal").style.display = "block";
});

document.getElementById("noButton").addEventListener("click", function() {
    document.getElementById("noButton").classList.add("shrink");
});

document.getElementById("passwordSubmit").addEventListener("click", function() {
    var password = document.getElementById("passwordInput").value.trim();
    if (password === "1L0V3Y0U") {
        // Redirect to a different page with the message "I love you"
        window.location.href = "love-message.html";
    } else {
        alert("Incorrect password. Try again.");
    }
});

document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("passwordModal").style.display = "none";
});
