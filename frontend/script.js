async function hitung() {
    let soal = document.getElementById("inputSoal").value;

    let response = await fetch("http://localhost:3000/hitung", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ soal: soal })
    });

    let data = await response.json();

    document.getElementById("output").innerText = data.hasil;
    function hitung() {
  let soal = document.getElementById("inputSoal").value;
  let hasil = "";

  // contoh: x^2 - 9
  if (soal === "x^2-9" || soal === "x^2 - 9") {
    hasil = "(x - 3)(x + 3)";
  } else {
    hasil = "Soal belum tersedia";
  }

  document.getElementById("hasil").innerText = hasil;
}
}