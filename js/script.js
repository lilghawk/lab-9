function init() {
    const input = document.getElementById("entryinput");
    const button = document.getElementById("entrybutton");
    const output = document.getElementById("textoutput");

    button.addEventListener("click", function () {
        const userText = input.value;
        const yourName = "Sarah Alharbi"; // Replace with your name

        alert(`${yourName}: ${userText}`);
        output.textContent = userText;
    });
}

window.addEventListener('load', init);
