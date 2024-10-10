function blackhoodie() {
    document.getElementById('product-image').style.backgroundImage = "url(./assets/blackhoodie.png)"
}

function greyhoodie() {
    document.getElementById('product-image').style.backgroundImage = "url(./assets/greyhoodie.png)"
}

function bluehoodie() {
    document.getElementById('product-image').style.backgroundImage = "url(./assets/bluehoodie.png)"
}

function camohoodie() {
    document.getElementById('product-image').style.backgroundImage = "url(./assets/camohoodie.png)"
}

function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "more"; 
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "less"; 
        moreText.style.display = "inline";
    }
}
