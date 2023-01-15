// Switch Number

const hari = 6;
let hasil;

switch (hari) {
    case 1:
        hasil = "minggu";
        break;
    case 2:
        hasil = "senin";
        break;
    case 3:
        hasil = "selasa";
        break;
    case 4:
        hasil = "rabu";
        break;
    case 5:
        hasil = "kamis";
        break;
    case 6:
        hasil = "jumat";
        break;
    case 7:
        hasil = "sabtu";
        break;

    default:
        hasil = "hari tidak ada";
        break;
}

console.log(hasil);

// Switch String

const bulan = "januari";
let bulann;

switch (bulan) {
    case "januari":
        bulann = 1;
        break;
    case "februari":
        bulann = 2;
        break;
    case "maret":
        bulann = 3;
        break;
    case "april":
        bulann = 4;
        break;
    case "mei":
        bulann = 5;
        break;
    case "juni":
        bulann = 6;
        break;
    case "juli":
        bulann = 7;
        break;
    case "agustus":
        bulann = 8;
        break;
    case "september":
        bulann = 9;
        break;
    case "oktober":
        bulann = 10;
        break;
    case "november":
        bulann = 11;
        break;
    case "desember":
        bulann = 12;
        break;

    default:
        bulann = "bulan tidak ada";
        break;
}

console.log(bulann);