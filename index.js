// GANTI NOMOR INI dengan nomor WA kamu (awali dengan 62)
const nomorWhatsApp = "62895337619194"; 

function pindahSlide() {
    document.getElementById('slide-awal').style.display = 'none';
    document.getElementById('slide-order').style.display = 'block';
    window.scrollTo(0, 0);
}

function kembali() {
    document.getElementById('slide-awal').style.display = 'block';
    document.getElementById('slide-order').style.display = 'none';
    window.scrollTo(0, 0);
}

function pilihRank(namaRank) {
    const detail = prompt(`Kamu memilih ${namaRank}. \nDari Tier/Bintang berapa ke berapa? \n(Contoh: Epic 5 ke Legend 1)`);

    if (detail !== null && detail !== "") {
        const pesan = `Halo Heimu, saya mau order Joki MLBB.%0A%0A` +
                      `Target Rank: *${namaRank}*%0A` +
                      `Detail Order: ${detail}%0A%0A` +
                      `Mohon info harganya ya!`;
        
        const url = `https://api.whatsapp.com/send?phone=${nomorWhatsApp}&text=${pesan}`;
        window.open(url, '_blank');
    }
}
