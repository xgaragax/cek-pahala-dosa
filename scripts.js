document.getElementById('cekPahalaButton').addEventListener('click', function() {
    const nama = document.getElementById('nama').value;
    if (nama) {
        const pahala = Math.floor(Math.random() * 100) + 1;
        const dosa = 100 - pahala;
        document.getElementById('result').innerText = `Nama: ${nama}, Pahala: ${pahala}% , Dosa: ${dosa}%`;
    } else {
        alert('Masukkan nama terlebih dahulu!');
    }
});
