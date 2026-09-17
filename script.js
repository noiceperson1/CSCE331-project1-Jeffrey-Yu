function toggleStyleSheet() {
    const styleSheet = document.getElementById("mainStyleSheet");

    const currentStyle = styleSheet.getAttribute("href");

    let newStyle;

    if (currentStyle === "./styles.css") {
        newStyle = "./styles2.css";
    } else {
        newStyle = "./styles.css";
    }

    styleSheet.setAttribute("href", newStyle);

    // Save the selected style so it stays active on other pages
    localStorage.setItem("stylesheet", newStyle);
}


// Apply the saved stylesheet whenever a page loads
window.onload = function() {
    const savedStyle = localStorage.getItem("stylesheet");

    if (savedStyle) {
        document
            .getElementById("mainStyleSheet")
            .setAttribute("href", savedStyle);
    }
};