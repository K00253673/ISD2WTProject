function swap(imgnum) {
    document.getElementById("mainImg").src =
            "images/hero0" + imgnum + ".jpg";
}

var imgnum = 1;
function next() {
    if (imgnum == 5) {
        imgnum = 1;
    } else
        imgnum++;
    swap(imgnum);
}
setInterval(next,5000);