let object = {

    nama : "smk revit",
    telp : 12345678,

    buah : ['apel', 'jeruk', 'mangga'],

    coba : function () {
        return "coba function dalam object";
    },

    boleh : true,
    "tulis aja" : 12345600,

};

console.log(object.nama);
console.log(object.telp);
console.log(object.boleh);
console.log(object.coba());
console.log(object.buah[1]);
console.log(object["tulis aja"]);