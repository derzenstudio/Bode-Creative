const animasiJudul = document.querySelector('.judul-layanan-utama');
const animasiSubjudul = document.querySelector('.subjudul-layanan');
const animasiDaftar = document.querySelectorAll('.item-daftar');
const animasiGambar = document.querySelector('.gambar-layanan');
const animasiPendekatan = document.querySelector('.bagian-pendekatan');

if (animasiJudul) {
    anime({
        targets: animasiJudul,
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1200,
        easing: 'easeOutExpo',
        delay: 200
    });
}

if (animasiSubjudul) {
    anime({
        targets: animasiSubjudul,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1200,
        easing: 'easeOutExpo',
        delay: 400
    });
}

if (animasiDaftar.length > 0) {
    anime({
        targets: animasiDaftar,
        opacity: [0, 1],
        translateX: [-30, 0],
        duration: 1000,
        easing: 'easeOutExpo',
        delay: anime.stagger(150, { start: 600 })
    });
}

if (animasiGambar) {
    anime({
        targets: animasiGambar,
        opacity: [0, 1],
        scale: [0.95, 1],
        duration: 1400,
        easing: 'easeOutExpo',
        delay: 300
    });
}

const pengamatPendekatan = new IntersectionObserver((entri) => {
    entri.forEach(entri => {
        if (entri.isIntersecting) {
            const teksPendekatan = entri.target.querySelectorAll('.teks-pendekatan');
            anime({
                targets: teksPendekatan,
                opacity: [0, 1],
                translateY: [40, 0],
                duration: 1200,
                easing: 'easeOutExpo',
                delay: anime.stagger(200)
            });
            pengamatPendekatan.unobserve(entri.target);
        }
    });
}, { threshold: 0.2 });

if (animasiPendekatan) {
    pengamatPendekatan.observe(animasiPendekatan);
}

const elemenDekoratif = document.querySelectorAll('.elemen-dekoratif');
elemenDekoratif.forEach(elemen => {
    anime({
        targets: elemen,
        opacity: [0, 0.3],
        duration: 2000,
        easing: 'easeOutExpo',
        delay: Math.random() * 500
    });
});
