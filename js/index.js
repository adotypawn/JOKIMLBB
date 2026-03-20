const nomorWhatsApp = "62895337619194"; 
function pindahSlide() {
    const loader = document.getElementById('loader');
    loader.style.display = 'flex';

    setTimeout(() => {
        document.getElementById('slide-awal').style.display = 'none';
        
        document.getElementById('slide-order').style.display = 'block';
        
        loader.style.display = 'none';
        
        window.scrollTo(0, 0);
    }, 1200); 
}



function pilihRank(namaRank) {
    const detail = prompt(`Kamu memilih ${namaRank}. \nDari Tier/Bintang berapa ke berapa? \n(Contoh: Epic 5 ke Legend 1)`);

    if (detail !== null && detail.trim() !== "") {
        const pesan = `Halo Heimu, saya mau order Joki MLBB.%0A%0A` +
                      `*Rank:* ${namaRank}%0A` +
                      `*Star 🌟:* ${detail}%0A%0A` +
                      `Mohon info totalnya  ya!`;
        
        const url = `https://api.whatsapp.com/send?phone=${nomorWhatsApp}&text=${pesan}`;
        window.open(url, '_blank');
    }
}

function bukaTestimoni() {
    const loader = document.getElementById('loader');
    loader.style.display = 'flex';

    setTimeout(() => {
        document.getElementById('slide-awal').style.display = 'none';
        document.getElementById('slide-order').style.display = 'none';
        
        // Tampilkan slide testimoni
        document.getElementById('slide-testimoni').style.display = 'block';
        
        loader.style.display = 'none';
        window.scrollTo(0, 0);
    }, 1000);
}

function kembaliKeAwal() {
    document.getElementById('slide-testimoni').style.display = 'none';
    document.getElementById('slide-awal').style.display = 'block';
    window.scrollTo(0, 0);
}

function kembali() {
    document.getElementById('slide-order').style.display = 'none';
    document.getElementById('slide-testimoni').style.display = 'none';
    document.getElementById('slide-awal').style.display = 'block';
}

function tampilFoto(elemen) {
    const lightbox = document.getElementById("lightbox");
    const imgBesar = document.getElementById("img-besar");
    const teksCaption = document.getElementById("caption");
    const sumberGambar = elemen.getElementsByTagName('img')[0].src;
    const teksGambar = elemen.getElementsByTagName('p')[0].innerText;

    lightbox.style.display = "block";
    imgBesar.src = sumberGambar;
    teksCaption.innerHTML = teksGambar;
}

function tutupFoto() {
    document.getElementById("lightbox").style.display = "none";
}
