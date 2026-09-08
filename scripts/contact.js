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
    
    const formKontak = document.getElementById('form-kontak');
    const tombolKirim = document.getElementById('tombol-kirim');
    const tombolWA = document.getElementById('tombol-wa');
    const statusForm = document.getElementById('status-form');
    const inputNama = document.getElementById('nama');
    const inputEmail = document.getElementById('email');
    const inputWhatsApp = document.getElementById('whatsapp');
    const inputPesan = document.getElementById('pesan');
    const checkboxLayanan = document.querySelectorAll('input[name="layanan[]"]');
    
    const nomorWATujuan = '6281234567890';
    
    function buatPesanWA() {
        let nama = inputNama ? inputNama.value.trim() : '';
        let email = inputEmail ? inputEmail.value.trim() : '';
        let whatsapp = inputWhatsApp ? inputWhatsApp.value.trim() : '';
        let pesan = inputPesan ? inputPesan.value.trim() : '';
        
        let layananDipilih = [];
        checkboxLayanan.forEach(cb => {
            if (cb.checked) {
                layananDipilih.push(cb.nextElementSibling.textContent.trim());
            }
        });
        
        let teksPesan = '';
        
        if (nama || email || whatsapp || pesan || layananDipilih.length > 0) {
            teksPesan = '*Enquiry Bode Creative*%0A%0A';
            
            if (nama) {
                teksPesan += '*Nama:* ' + encodeURIComponent(nama) + '%0A';
            }
            
            if (email) {
                teksPesan += '*Email:* ' + encodeURIComponent(email) + '%0A';
            }
            
            if (whatsapp) {
                teksPesan += '*WhatsApp:* ' + encodeURIComponent(whatsapp) + '%0A';
            }
            
            if (layananDipilih.length > 0) {
                teksPesan += '*Layanan:* ' + encodeURIComponent(layananDipilih.join(', ')) + '%0A';
            }
            
            if (pesan) {
                teksPesan += '%0A*Pesan:*%0A' + encodeURIComponent(pesan);
            }
        }
        
        return 'https://wa.me/' + nomorWATujuan + '?text=' + teksPesan;
    }
    
    function perbaruiLinkWA() {
        if (tombolWA) {
            tombolWA.href = buatPesanWA();
        }
    }
    
    if (inputNama) {
        inputNama.addEventListener('input', perbaruiLinkWA);
    }
    
    if (inputEmail) {
        inputEmail.addEventListener('input', perbaruiLinkWA);
    }
    
    if (inputWhatsApp) {
        inputWhatsApp.addEventListener('input', perbaruiLinkWA);
    }
    
    if (inputPesan) {
        inputPesan.addEventListener('input', perbaruiLinkWA);
    }
    
    checkboxLayanan.forEach(cb => {
        cb.addEventListener('change', perbaruiLinkWA);
    });
    
    perbaruiLinkWA();
    
    if (formKontak) {
        formKontak.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let dataForm = new FormData(formKontak);
            let dataObj = {};
            dataForm.forEach((value, key) => {
                dataObj[key] = value;
            });
            
            console.log('Data form:', dataObj);
            
            if (tombolKirim) {
                tombolKirim.disabled = true;
                tombolKirim.textContent = 'Sending...';
            }
            
            setTimeout(function() {
                if (statusForm) {
                    statusForm.className = 'status-form sukses';
                    statusForm.textContent = 'Message sent successfully. We will respond within 48 hours.';
                }
                
                formKontak.reset();
                perbaruiLinkWA();
                
                if (tombolKirim) {
                    tombolKirim.disabled = false;
                    tombolKirim.textContent = 'Send Message';
                }
                
                setTimeout(function() {
                    if (statusForm) {
                        statusForm.style.display = 'none';
                    }
                }, 5000);
            }, 1500);
        });
    }
    
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
    
    const grupInput = document.querySelectorAll('.grup-input');
    grupInput.forEach((grup, index) => {
        anime({
            targets: grup,
            translateY: [20, 0],
            opacity: [0, 1],
            delay: index * 100,
            duration: 600,
            easing: 'easeOutExpo'
        });
    });
});
