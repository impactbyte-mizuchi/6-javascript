let angka1 = 10;
let angka2 = 20;
let angka3 = "10";
let hasil = 0;

if ((angka1 != angka3 && angka2 < angka1) || angka1 > angka2) {
  hasil = angka1 + angka3;

  console.log(hasil, "if ke-1");
} else if (angka1 > angka3) {
  hasil = angka1 + angka2;

  console.log(hasil, "if ke-2");
} else {
  hasil = angka1 - angka2;

  console.log(hasil, "else");
}

angka1 > angka2
  ? (hasil = angka1 + angka3)
  : angka2 > angka1
  ? (hasil = angka2 + 100)
  : (hasil = angka1 - angka2);

console.log(hasil, "hasil");

// switch-case

switch (true) {
  case angka1 > angka2:
    hasil = angka1 + 100;

    console.log(hasil, "switch-case");

    break;
  case angka1 < angka2:
    hasil = angka1 + angka2;

    console.log(hasil, "switch-case");
    break;
  default:
    hasil = angka1 - angka2;

    console.log(hasil, "switch-case");
    break;
}

let month = "MARET";

switch (month) {
  case "JANUARI":
    console.log(`Hello ${month}-1`);

    break;
  case "FEBRUARI":
    console.log(`Hello ${month}-2`);

    break;
  case "MARET":
    console.log(`Hello ${month}-3`);

    break;
  case "APRIL":
    console.log(`Hello ${month}-4`);

    break;
  case "MEI":
    console.log(`Hello ${month}-5`);

    break;
  case "JUNI":
    console.log(`Hello ${month}-6`);

    break;
  default:
    console.log("Maaf Bulan yang anda input salah");

    break;
}
