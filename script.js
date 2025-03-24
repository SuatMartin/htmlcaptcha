// Function to enable buttons when CAPTCHA is solved
function enableButtons() {
    document.getElementById("form1").disabled = false;
    document.getElementById("form2").disabled = false;
}

// Function to open form
function openForm(url) {
    window.open(url, "_blank");
}