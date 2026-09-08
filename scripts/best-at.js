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
    
    const bagianLayanan = document.querySelectorAll('.bagian-layanan-detail');
    const observerOpsi = {
        threshold: 0.2,
        rootMargin: '-50px'
    };
    
    const pengamatBagian = new IntersectionObserver(function(entries) {
        entries.forEach(entri => {
            if (entri.isIntersecting) {
                const judul = entri.target.querySelector('.judul-layanan-detail');
                const gambar = entri.target.querySelector('.gambar-layanan');
                const daftar = entri.target.querySelectorAll('.item-daftar');
                
                if (judul) {
                    anime({
                        targets: judul,
                        translateX: [-30, 0],
                        opacity: [0, 1],
                        duration: 800,
                        easing: 'easeOutExpo'
                    });
                }
                
                if (gambar) {
                    anime({
                        targets: gambar,
                        scale: [1.05, 1],
                        opacity: [0, 0.8],
                        duration: 1200,
                        easing: 'easeOutExpo'
                    });
                }
                
                daftar.forEach((item, index) => {
                    anime({
                        targets: item,
                        translateX: [-20, 0],
                        opacity: [0, 1],
                        delay: index * 100,
                        duration: 600,
                        easing: 'easeOutExpo'
                    });
                });
                
                pengamatBagian.unobserve(entri.target);
            }
        });
    }, observerOpsi);
    
    bagianLayanan.forEach(bagian => {
        pengamatBagian.observe(bagian);
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
