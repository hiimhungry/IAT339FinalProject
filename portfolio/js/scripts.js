function openPavilion() {
    var x = document.getElementById("projectPavilion");
    var y = document.getElementById("projectBeerPong");
    var z = document.getElementById("workListing")

    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
    }



}

function openBeerPong() {
    var y = document.getElementById("projectPavilion");
    var x = document.getElementById("projectBeerPong");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
    }

}

function testFont() {
    document.getElementById("test").style.color = "red";
}