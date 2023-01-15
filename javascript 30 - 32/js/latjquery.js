// Cara Pertama memanggil Jquery 
$( document ).ready(function() {
    console.log( "siap" );
})


// Cara Kedua memanggil Jquery
$(function () {

    $("#isi").html("<h1>Belajar Jquery</h1>");

    $("#klik").click(function (e) { 
        e.preventDefault();
        alert("belajar javascript");
    });

    $("#isi").mouseleave(function () { 
        alert("mouse leave");
        console.log("mouse");
    });

})