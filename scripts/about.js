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
        targets: '.judul-halaman',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1200,
        easing: 'easeOutExpo'
    });
    
    anime({
        targets: '.subjudul-halaman',
        translateY: [30, 0],
        opacity: [0, 1],
        delay: 400,
        duration: 1000,
        easing: 'easeOutExpo'
    });
    
    const paragrafCerita = document.querySelectorAll('.paragraf-besar, .paragraf');
    paragrafCerita.forEach((paragraf, index) => {
        anime({
            targets: paragraf,
            translateX: [-30, 0],
            opacity: [0, 1],
            delay: index * 200,
            duration: 800,
            easing: 'easeOutExpo'
        });
    });
    
    const kutipanBesar = document.querySelector('.kutipan-besar');
    if (kutipanBesar) {
        anime({
            targets: '.teks-kutipan',
            scale: [0.95, 1],
            opacity: [0, 1],
            duration: 1400,
            easing: 'easeOutExpo'
        });
    }
    
    const kartuModel = document.querySelectorAll('.kartu-model');
    kartuModel.forEach((kartu, index) => {
        anime({
            targets: kartu,
            translateY: [40, 0],
            opacity: [0, 1],
            delay: index * 200,
            duration: 1000,
            easing: 'easeOutExpo'
        });
    });
    
    const kartuTim = document.querySelectorAll('.kartu-tim');
    kartuTim.forEach((kartu, index) => {
        anime({
            targets: kartu,
            scale: [0.9, 1],
            opacity: [0, 1],
            delay: index * 150,
            duration: 800,
            easing: 'easeOutExpo'
        });
    });
    
    const chipIndustri = document.querySelectorAll('.chip-industri');
    chipIndustri.forEach((chip, index) => {
        anime({
            targets: chip,
            translateX: [-20, 0],
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
