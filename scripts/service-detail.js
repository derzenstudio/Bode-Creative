const kataTersebar = document.querySelectorAll('.kata-tersebar');

kataTersebar.forEach((kata, index) => {
    const tx = kata.getAttribute('data-x') || 0;
    const ty = kata.getAttribute('data-y') || 0;
    const r = Math.random() * 360 - 180;
    
    kata.style.setProperty('--tx', tx + 'px');
    kata.style.setProperty('--ty', ty + 'px');
    kata.style.setProperty('--r', r + 'deg');
});

anime({
    targets: '.kata-tersebar',
    opacity: [0, 1],
    translateX: function(el) {
        const tx = el.getAttribute('data-x') || 0;
        return [tx * 3, tx];
    },
    translateY: function(el) {
        const ty = el.getAttribute('data-y') || 0;
        return [ty * 3, ty];
    },
    rotate: function(el) {
        const r = Math.random() * 360 - 180;
        return [r, 0];
    },
    scale: [0.5, 1],
    delay: anime.stagger(100),
    duration: 1500,
    easing: 'easeOutExpo'
});

anime({
    targets: '.judul-satu-kalimat',
    opacity: [0, 1],
    translateY: [50, 0],
    delay: 800,
    duration: 1200,
    easing: 'easeOutQuad'
});

const blokGambar = document.querySelectorAll('.blok-gambar');
const blokTeks = document.querySelectorAll('.blok-teks');

blokGambar.forEach((blok, index) => {
    anime({
        targets: blok,
        opacity: [0, 1],
        translateX: index % 2 === 0 ? [-100, 0] : [100, 0],
        delay: index * 200,
        duration: 1000,
        easing: 'easeOutQuad'
    });
});

blokTeks.forEach((blok, index) => {
    anime({
        targets: blok,
        opacity: [0, 1],
        translateX: index % 2 === 0 ? [100, 0] : [-100, 0],
        delay: index * 200 + 100,
        duration: 1000,
        easing: 'easeOutQuad'
    });
});

const labelPlatform = document.querySelectorAll('.label-platform');

anime({
    targets: '.label-platform',
    opacity: [0, 1],
    scale: [0, 1],
    delay: anime.stagger(150),
    duration: 800,
    easing: 'spring(1, 80, 10, 0)'
});

anime({
    targets: '.bentuk-tengah',
    rotate: 360,
    duration: 20000,
    easing: 'linear',
    loop: true
});

const ctaKiri = document.querySelector('.wadah-belah-kiri h2');

anime({
    targets: ctaKiri,
    opacity: [0, 1],
    translateX: [-50, 0],
    delay: 500,
    duration: 1000,
    easing: 'easeOutQuad'
});

const tautanKontak = document.querySelector('.tautan-ke-kontak');

anime({
    targets: tautanKontak,
    opacity: [0, 1],
    translateX: [50, 0],
    delay: 700,
    duration: 1000,
    easing: 'easeOutQuad'
});
