// Cara 1 + menggunakan parameter function

function tampil(b) {
    a = document.querySelector("p").innerText = "belajar event js " + b;
    // a.innerText = "belajar event js";
    console.log("belajar event js");
}

// Cara 2 melalui Id

judul.onclick = function(){
    document.querySelector(".isi").innerHTML = "belajar event js menggunakan id";
}