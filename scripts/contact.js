const formKontak = document.getElementById('formKontak');
const tombolKirim = document.getElementById('tombolKirim');
const tombolWA = document.getElementById('tombolWA');

const linkWADefault = 'https://wa.me/6281234567890';

function ambilDataForm() {
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const whatsapp = document.getElementById('whatsapp').value.trim();
    const pesan = document.getElementById('pesan').value.trim();
    
    const layananTerpilih = [];
    document.querySelectorAll('input[name="layanan[]"]:checked').forEach(checkbox => {
        layananTerpilih.push(checkbox.nextElementSibling.textContent);
    });
    
    return { nama, email, whatsapp, layanan: layananTerpilih, pesan };
}

function buatPesanWA(data) {
    let pesan = `Halo Bode Creative,%0A%0A`;
    pesan += `Nama: ${data.nama}%0A`;
    pesan += `Email: ${data.email}%0A`;
    pesan += `WhatsApp: ${data.whatsapp}%0A`;
    
    if (data.layanan.length > 0) {
        pesan += `Layanan: ${data.layanan.join(', ')}%0A`;
    }
    
    pesan += `Pesan: ${data.pesan}%0A%0A`;
    pesan += `Saya tertarik untuk bekerja sama.`;
    
    return pesan;
}

function perbaruiLinkWA() {
    const data = ambilDataForm();
    
    if (data.nama && data.email && data.whatsapp && data.pesan) {
        const pesanWA = buatPesanWA(data);
        tombolWA.href = `https://wa.me/6281234567890?text=${pesanWA}`;
    } else {
        tombolWA.href = linkWADefault;
    }
}

document.querySelectorAll('.input-teks, .input-teks-area, .input-centang').forEach(input => {
    input.addEventListener('input', perbaruiLinkWA);
    input.addEventListener('change', perbaruiLinkWA);
});

perbaruiLinkWA();

formKontak.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const data = ambilDataForm();
    
    const formData = new FormData();
    formData.append('nama', data.nama);
    formData.append('email', data.email);
    formData.append('whatsapp', data.whatsapp);
    formData.append('layanan', JSON.stringify(data.layanan));
    formData.append('pesan', data.pesan);
    
    tombolKirim.textContent = 'SENDING...';
    tombolKirim.disabled = true;
    
    fetch('/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        tombolKirim.textContent = 'SENT!';
        setTimeout(() => {
            tombolKirim.textContent = 'SEND';
            tombolKirim.disabled = false;
            formKontak.reset();
            perbaruiLinkWA();
        }, 2000);
    })
    .catch(error => {
        tombolKirim.textContent = 'ERROR';
        setTimeout(() => {
            tombolKirim.textContent = 'SEND';
            tombolKirim.disabled = false;
        }, 2000);
    });
});

const judulContact = document.querySelector('.judul-besar-contact');

const observerJudul = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            anime({
                targets: judulContact,
                scale: [0.8, 1],
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeOutExpo'
            });
        }
    });
}, { threshold: 0.5 });

observerJudul.observe(judulContact);

const infoSudut = document.querySelectorAll('.info-sudut');

infoSudut.forEach((info, index) => {
    anime({
        targets: info,
        opacity: [0, 1],
        translateX: function() {
            return index % 2 === 0 ? [-50, 0] : [50, 0];
        },
        translateY: function() {
            return index < 2 ? [-50, 0] : [50, 0];
        },
        delay: index * 150,
        duration: 800,
        easing: 'easeOutQuad'
    });
});

const linkSosial = document.querySelectorAll('.link-sosial-besar');

linkSosial.forEach((link, index) => {
    anime({
        targets: link,
        opacity: [0, 1],
        translateX: [20, 0],
        delay: index * 100,
        duration: 600,
        easing: 'easeOutQuad'
    });
});
