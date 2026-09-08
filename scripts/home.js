document.addEventListener('DOMContentLoaded', function() {
    const tombolMenu = document.querySelector('.tombol-menu');
    const navigasiUtama = document.querySelector('.navigasi-utama');
    
    if (tombolMenu && navigasiUtama) {
        tombolMenu.addEventListener('click', function() {
            navigasiUtama.classList.toggle('aktif');
            this.classList.toggle('aktif');
        });
    }
    
    anime({
        targets: '.judul-pahlawan .baris-judul',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(200),
        duration: 1200,
        easing: 'easeOutExpo'
    });
    
    anime({
        targets: '.subjudul-pahlawan',
        translateY: [30, 0],
        opacity: [0, 1],
        delay: 800,
        duration: 1000,
        easing: 'easeOutExpo'
    });
    
    anime({
        targets: '.wadah-tombol-pahlawan',
        translateY: [20, 0],
        opacity: [0, 1],
        delay: 1200,
        duration: 800,
        easing: 'easeOutExpo'
    });
    
    const kartuGap = document.querySelectorAll('.kartu-gap');
    kartuGap.forEach((kartu, index) => {
        anime({
            targets: kartu,
            translateY: [40, 0],
            opacity: [0, 1],
            delay: index * 200,
            duration: 1000,
            easing: 'easeOutExpo'
        });
    });
    
    const kartuLayanan = document.querySelectorAll('.kartu-layanan-ikhtisar');
    kartuLayanan.forEach((kartu, index) => {
        anime({
            targets: kartu,
            translateY: [30, 0],
            opacity: [0, 1],
            delay: index * 150,
            duration: 800,
            easing: 'easeOutExpo'
        });
    });
    
    const statistikItems = document.querySelectorAll('.statistik-item');
    statistikItems.forEach((item, index) => {
        anime({
            targets: item,
            scale: [0.9, 1],
            opacity: [0, 1],
            delay: index * 100,
            duration: 600,
            easing: 'easeOutExpo'
        });
    });
    
    const elemenHuruf = document.querySelectorAll('.elemen-dekoratif');
    elemenHuruf.forEach(elemen => {
        anime({
            targets: elemen,
            opacity: [0, 0.3],
            duration: 2000,
            easing: 'linear',
            direction: 'alternate',
            loop: true
        });
    });
});
