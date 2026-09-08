const fragmenTeks = document.querySelectorAll('.fragmen-teks');

anime({
    targets: '.fragmen-teks',
    opacity: [0, 1],
    translateY: [30, 0],
    delay: anime.stagger(200),
    duration: 800,
    easing: 'easeOutQuad'
});

const barisPeran = document.querySelectorAll('.baris-peran');

barisPeran.forEach(baris => {
    baris.addEventListener('mouseenter', () => {
        const bentuk = baris.querySelector('.bentuk-abstrak');
        
        anime({
            targets: bentuk,
            scale: [1, 1.2],
            rotate: function() {
                return anime.random(-15, 15);
            },
            duration: 400,
            easing: 'easeOutQuad'
        });
    });
    
    baris.addEventListener('mouseleave', () => {
        const bentuk = baris.querySelector('.bentuk-abstrak');
        
        anime({
            targets: bentuk,
            scale: [1.2, 1],
            rotate: 0,
            duration: 400,
            easing: 'easeInOutQuad'
        });
    });
});

const kotakNilai = document.querySelectorAll('.kotak-nilai');

kotakNilai.forEach(kotak => {
    kotak.addEventListener('click', () => {
        const definisi = kotak.querySelector('.teks-definisi');
        
        anime({
            targets: definisi,
            scale: [0.8, 1],
            duration: 600,
            easing: 'spring(1, 80, 10, 0)'
        });
    });
});

const ctaAbout = document.querySelector('.bagian-cta-about');
const panah = document.querySelector('.panah-animasi');

ctaAbout.addEventListener('click', () => {
    window.location.href = '/contact';
    
    anime({
        targets: panah,
        translateX: [0, 20],
        duration: 300,
        easing: 'easeOutQuad',
        direction: 'alternate',
        complete: function() {
            window.location.href = '/contact';
        }
    });
});

const observerBio = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            anime({
                targets: entry.target,
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 800,
                easing: 'easeOutQuad'
            });
        }
    });
}, { threshold: 0.2 });

fragmenTeks.forEach(fragmen => {
    observerBio.observe(fragmen);
});
