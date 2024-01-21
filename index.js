function generateRandomNumber() {
  var awalanOptions = ["081", "085", "087"];
  var randomAwalan =
    awalanOptions[Math.floor(Math.random() * awalanOptions.length)];
  var randomDigits = Math.floor(Math.random() * 1000000000);
  var formattedRandomDigits = randomDigits.toString().padStart(9, "0");
  var fullNumber = randomAwalan + formattedRandomDigits;
  document.getElementById("generatedNumber").innerText =
    "Nomor yang dihasilkan: " + fullNumber;
}

function copyToClipboard() {
  var generatedNumber = document.getElementById("generatedNumber").innerText;
  // Menghapus teks "Nomor yang dihasilkan: " dan menyisakan hanya angka
  var numberOnly = generatedNumber.replace("Nomor yang dihasilkan: ", "");

  var tempInput = document.createElement("input");
  tempInput.value = numberOnly;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  // Menggunakan SweetAlert2 untuk alert yang lebih menarik
  Swal.fire({
    title: "Nomor telah disalin!",
    text: numberOnly,
    icon: "success",
    timer: 1000,
    showConfirmButton: false,
  });
}
