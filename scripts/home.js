const introGrid = document.querySelector('.lapisan-gambar');
const kotakGambar = document.querySelectorAll('.kotak-gambar');

let posisiSekarang = [0, 1, 2, 3];
let posisiAcak = [];

function acakPosisi() {
    posisiAcak = [...posisiSekarang].sort(() => Math.random() - 0.5);
}

function shuffleGrid() {
    acakPosisi();
    
    const animasi = anime({
        targets: '.kotak-gambar',
        scale: [1, 0.95],
        duration: 800,
        easing: 'easeInOutQuad',
        complete: function() {
            posisiSekarang.forEach((pos, index) => {
                kotakGambar[index].style.order = posisiAcak.indexOf(pos);
            });
            
            anime({
                targets: '.kotak-gambar',
                scale: [0.95, 1],
                duration: 800,
                easing: 'easeInOutQuad'
            });
        }
    });
}

setInterval(shuffleGrid, 4000);

const manifestoCards = document.querySelectorAll('.kartu-manifesto');

anime({
    targets: '.kartu-manifesto',
    translateX: function(el) {
        return anime.random(0, 100);
    },
    delay: anime.stagger(200),
    duration: 2000,
    direction: 'alternate',
    easing: 'easeInOutQuad',
    loop: true
});

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    
    manifestoCards.forEach((card, index) => {
        const kecepatan = parseFloat(card.getAttribute('data-kecepatan'));
        card.style.transform = `translateX(-${scrollY * kecepatan}px)`;
    });
});

const ctaSection = document.getElementById('ctaKerja');
const teksKerja = document.querySelector('.teks-kerja');

const observerCta = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            scrambleText();
        }
    });
}, { threshold: 0.5 });

observerCta.observe(ctaSection);

function scrambleText() {
    const huruf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let iterasi = 0;
    const teksAsli = "Let's Work";
    
    const interval = setInterval(() => {
        teksKerja.textContent = teksAsli
            .split('')
            .map((hurufAsli, index) => {
                if (index < iterasi) {
                    return hurufAsli;
                }
                return huruf[Math.floor(Math.random() * 26)];
            })
            .join('');
        
        iterasi += 1/3;
        
        if (iterasi >= teksAsli.length) {
            clearInterval(interval);
        }
    }, 30);
}

ctaSection.addEventListener('click', () => {
    window.location.href = '/contact';
});

const blokLayanan = document.querySelectorAll('.blok-layanan');

blokLayanan.forEach(blok => {
    blok.addEventListener('mouseenter', () => {
        anime({
            targets: blok.querySelector('.konten-layanan'),
            opacity: 1,
            duration: 400,
            easing: 'easeOutQuad'
        });
    });
    
    blok.addEventListener('mouseleave', () => {
        anime({
            targets: blok.querySelector('.konten-layanan'),
            opacity: 0,
            duration: 400,
            easing: 'easeInQuad'
        });
    });
});
