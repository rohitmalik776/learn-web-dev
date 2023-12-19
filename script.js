console.log("Script loaded successfully!")
function loadHeaderFooter() {
    document.getElementById("header").innerHTML = '<object type="text/html" data="./header.html" ></object>';
    document.getElementById("footer").innerHTML = '<object type="text/html" data="./footer.html" ></object>';
}

function pingpong() {
    console.log("Jaa ke padhai likhai karle");
    return "hehe";
}