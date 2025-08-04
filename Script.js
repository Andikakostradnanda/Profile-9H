document.addEventListener('DOMContentLoaded', () => {
    // Definisi data murid dalam objek JavaScript
    const studentDetails = {
        "Adi": { fullName: "ADI MUHAMAD FERDIANSYAH", gender: "Laki-laki", role: "Kru", photo: "", description: "Kru petualang yang siap menjelajah." },
        "Apri": { fullName: "APRIYANTO", gender: "Laki-laki", role: "Olahraga", photo: "https://raw.githubusercontent.com/Andikakostradnanda/Profile-9H/76b207393ff7f08ced009f36943c4965b27a6f2c/Apriyanto.jpg", description: "Menjaga kebugaran seluruh kru kapal." },
        "Azhira": { fullName: "AZHIRA VIENOLIA NAVISHA BILQIS", gender: "Perempuan", role: "Absensi", photo: "", description: "Memastikan semua kru hadir dalam setiap pelayaran." },
        "Belva": { fullName: "BELVA RAMANIA", gender: "Perempuan", role: "Wakil Kelas", photo: "https://raw.githubusercontent.com/Andikakostradnanda/Profile-9H/f66c7412d28d8f3cfb50ded7958c379ab8f0389f/Belva.jpg", description: "Juru mudi yang handal, membantu navigasi kapal." },
        "Diana": { fullName: "DIANA WIDYAWATI RAHAYU", gender: "Perempuan", role: "Sekretaris", photo: "https://raw.githubusercontent.com/Andikakostradnanda/Profile-9H/f66c7412d28d8f3cfb50ded7958c379ab8f0389f/Diana.jpg", description: "Mencatat setiap detail penting dalam jurnal kapten." },
        "Gendis": { fullName: "GENDIS AULIA MAHARANI WIBOWO", gender: "Perempuan", role: "Bendahara", photo: "", description: "Pengelola perbendaharaan ekspedisi." },
        "Andika": { fullName: "M. ANDIKA KOSTRADNANDA", gender: "Laki-laki", role: "Ketua Kelas", photo: "https://raw.githubusercontent.com/Andikakostradnanda/Profile-9H/1800ee31bfa1b6184f90cc48847ca20a502f25ab/Andika.jpg", description: "Nahkoda pemberani yang memimpin ekspedisi ini." },
        "Rika": { fullName: "RIKA RISMAYANTI", gender: "Perempuan", role: "Sekretaris", photo: "", description: "Menyimpan semua arsip dan peta rahasia." },
        "Zaifa": { fullName: "SITI ZAIFA ZHUFAIRAH", gender: "Perempuan", role: "Bendahara", photo: "", description: "Memastikan logistik misi selalu aman." },
        "Yana": { fullName: "YANA NURYANA", gender: "Laki-laki", role: "Seksi Keamanan", photo: "", description: "Pengawas dek yang waspada dan bertanggung jawab." },
        "Rizky A.R.F": { fullName: "RIZKY ARIEF FADILLAH", gender: "Laki-laki", role: "Seksi Perpustakaan", photo: "", description: "Penjaga peta dan gulungan ilmu kuno." },
        "Suci": { fullName: "SUCI LATIFAH OKTAVIANI", gender: "Perempuan", role: "Seksi Keamanan", photo: "", description: "Menjaga ketertiban dan keharmonisan di atas kapal." },
        "Vienard": { fullName: "VIENARD CAIZHI NISAESU IRHAB", gender: "Laki-laki", role: "Seksi Perpustakaan", photo: "https://raw.githubusercontent.com/Andikakostradnanda/Profile-9H/76b207393ff7f08ced009f36943c4965b27a6f2c/Vienard.jpg", description: "Pemandu kru untuk menemukan informasi di lautan pengetahuan." },
        "Fazri": { fullName: "FAZRI INDRA NUGRAHA", gender: "Laki-laki", role: "Kru", photo: "https://raw.githubusercontent.com/Andikakostradnanda/Profile-9H/f66c7412d28d8f3cfb50ded7958c379ab8f0389f/Fazri.jpg", description: "Kru yang aktif dan bersemangat." },
        "Idham": { fullName: "MUHAMMAD IDHAM AL-HAFIDZ", gender: "Laki-laki", role: "Kerohanian", photo: "https://raw.githubusercontent.com/Andikakostradnanda/Profile-9H/f66c7412d28d8f3cfb50ded7958c379ab8f0389f/Idham.jpg", description: "Kompas moral bagi seluruh kru." },
        "Faiq": { fullName: "MUHAMMAD AINUR OKTA FAIQ MAULANA", gender: "Laki-laki", role: "Kru", photo: "https://raw.githubusercontent.com/Andikakostradnanda/Profile-9H/78567f1a47f6991bb37d1b191f1c7fb647f608ff/M.Ainur.jpg", description: "Pemikir yang tenang dan mendalam." },
        "Kazril": { fullName: "KAZRIL CAHYARAHIM", gender: "Laki-laki", role: "Kru", photo: "https://raw.githubusercontent.com/Andikakostradnanda/Profile-9H/935818a2dcdc1708098a7c6856febffb094f0016/Kazril.jpg", description: "Selalu ingin tahu dan siap belajar hal baru." },
        "Rama": { fullName: "RAMA KURNIAWAN", gender: "Laki-laki", role: "Kru", photo: "https://raw.githubusercontent.com/Andikakostradnanda/Profile-9H/76b207393ff7f08ced009f36943c4965b27a6f2c/Rama.jpg", description: "Pembawa energi positif bagi kru." },
        "Ricky": { fullName: "RICKY ADLY MAULANA", gender: "Laki-laki", role: "Kepramukaan", photo: "https://raw.githubusercontent.com/Andikakostradnanda/Profile-9H/935818a2dcdc1708098a7c6856febffb094f0016/Ricky.jpg", description: "Pramuka tangguh, siap untuk misi apapun." },
        "Salma": { fullName: "SALMA NURDESTIANI", gender: "Perempuan", role: "Absensi", photo: "", description: "Pencatat kehadiran yang teliti." },
        "Khayra": { fullName: "KHAYRA AZDKIA HAIFA", gender: "Perempuan", role: "Kerohanian", photo: "", description: "Pembimbing spiritual yang menenangkan." },
        "Salsabila": { fullName: "SALSABILA NIZMA", gender: "Perempuan", role: "Kru", photo: "", description: "Kru yang tenang dan fokus." },
        "Syifa (Non-Org)": { fullName: "SYIFA AULIA", gender: "Perempuan", role: "Kru", photo: "", description: "Kru yang berdedikasi dalam tugasnya." },
        "Dinda": { fullName: "DINDA AULIA WINDARIS", gender: "Perempuan", role: "Kru", photo: "", description: "Kru yang kreatif dan penuh ide." },
        "Zalfa": { fullName: "SITI ZALFA", gender: "Perempuan", role: "Kru", photo: "", description: "Kru yang penuh potensi." },
        "Geane": { fullName: "GEANNE SUKMA ANINDYA", gender: "Perempuan", role: "Kru", photo: "", description: "Kru yang ceria dan imajinatif." },
        "Aul": { fullName: "SRI AULIA NINGSIH", gender: "Perempuan", role: "Kru", photo: "", description: "Kru yang selalu berusaha memberikan yang terbaik." },
        "Melisa": { fullName: "MELISA RAHMAYANTI ISKANDAR PUTRI", gender: "Perempuan", role: "Kru", photo: "", description: "Kru yang rajin dan tekun." },
        "Nadia": { fullName: "NADIA RAMADINA", gender: "Perempuan", role: "Kepramukaan", photo: "https://raw.githubusercontent.com/Andikakostradnanda/Profile-9H/747ee1377d60ee217241d30047c80eab9b574d3c/Nadia.jpg", description: "Pramuka sejati yang selalu siap berpetualang." },
        "Syifa": { fullName: "SYIFA AULIA", gender: "Perempuan", role: "Kru", photo: "", description: "Kru baru yang siap berkontribusi." },
        "M. Rizky": { fullName: "MOCHAMMAD RIZKY RAMDHANI", gender: "Laki-laki", role: "Kru", photo: "", description: "Kru yang penuh semangat." },
        "Nadzar": { fullName: "NADZAR FAZRI GUMELAR", gender: "Laki-laki", role: "Kru", photo: "", description: "Kru yang cerdas dan analitis." },
        "Syifa Org": { fullName: "SYIFA NURDINI H.", gender: "Perempuan", role: "Olahraga", photo: "", description: "Pembangkit semangat olahraga, menjaga kebugaran tim." },
    };

    // Mendapatkan elemen modal dan kontainer animasinya
    const modal = document.getElementById('organizationModal');
    const modalAnimationContainer = document.getElementById('modal-animation-container');

    // Fungsi untuk membuka modal
    window.openModal = (nameKey) => {
        // Mengambil data murid atau menggunakan data default jika tidak ditemukan
        const data = studentDetails[nameKey] || { fullName: nameKey, gender: "Tidak Diketahui", role: "Kru", photo: "", description: "Seorang kru petualang di samudra ilmu." };
        
        // Mengisi konten modal dengan data murid yang dipilih
        document.getElementById('modalStudentName').textContent = nameKey.replace(' (Non-Org)', '');
        document.getElementById('profileDescription').textContent = data.description;
        document.getElementById('modalFullName').textContent = data.fullName;
        document.getElementById('modalGender').textContent = data.gender;
        document.getElementById('modalRole').textContent = data.role;
        const profilePhoto = document.getElementById('profilePhoto');
        profilePhoto.src = data.photo || `https://placehold.co/120x120/001219/ffffff?text=${nameKey.charAt(0)}`;
        
        // Menghapus dan membuat ulang animasi gelembung untuk modal
        modalAnimationContainer.innerHTML = '';
        for(let i = 0; i < 5; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            const size = Math.random() * 15 + 5;
            bubble.style.cssText = `width:${size}px; height:${size}px; left:${Math.random()*100}%; animation-delay:${Math.random()*5}s;`;
            modalAnimationContainer.appendChild(bubble);
        }

        // Menampilkan modal
        modal.classList.add('show');
    };

    // Fungsi untuk menutup modal
    window.closeModal = () => modal.classList.remove('show');

    // Menambahkan event listener untuk membuka modal ketika nama murid diklik
    document.querySelectorAll('[data-name]').forEach(item => {
        item.addEventListener('click', () => openModal(item.dataset.name));
    });

    // Menutup modal ketika area di luar modal diklik
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // --- Efek Gulir & Pembuatan Latar Belakang ---
    const body = document.body;
    const menuToggleIcon = document.querySelector('#menu-toggle svg');
    const fixedHeader = document.getElementById('fixed-header');
    const seaFloor = document.getElementById('sea-floor');
    const scrollToTopBtn = document.getElementById('scroll-to-top');

    // Intersection Observer untuk animasi "reveal" pada kartu
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('[data-observe]').forEach(el => observer.observe(el));
    
    let lastScrollY = window.scrollY;

    // Event listener untuk efek gulir halaman
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const pageHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = Math.min(scrollY / (pageHeight * 0.9), 1);

        // Perubahan warna background body secara bertahap saat menggulir
        const c1 = [142, 202, 230], c2 = [33, 158, 188], c3 = [2, 48, 71], c4 = [0, 18, 25];
        let r, g, b;
        if (scrollPercent < 0.4) {
            const p = scrollPercent / 0.4;
            r = c1[0] + (c2[0] - c1[0]) * p; g = c1[1] + (c2[1] - c1[1]) * p; b = c1[2] + (c2[2] - c1[2]) * p;
        } else if (scrollPercent < 0.8) {
            const p = (scrollPercent - 0.4) / 0.4;
            r = c2[0] + (c3[0] - c2[0]) * p; g = c2[1] + (c3[1] - c2[1]) * p; b = c2[2] + (c3[2] - c2[2]) * p;
        } else {
            const p = (scrollPercent - 0.8) / 0.2;
            r = c3[0] + (c4[0] - c3[0]) * p; g = c3[1] + (c4[1] - c3[1]) * p; b = c3[2] + (c4[2] - c3[2]) * p;
        }
        body.style.backgroundColor = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;

        // Perubahan warna ikon menu dan sembunyikan/tampilkan header
        menuToggleIcon.style.stroke = scrollY > 150 ? 'var(--text-light)' : 'var(--text-dark)';
        if (scrollY > lastScrollY && scrollY > 100) { fixedHeader.classList.add('hide'); } 
        else { fixedHeader.classList.remove('hide'); }
        lastScrollY = scrollY;

        // Efek transisi untuk dasar laut
        if (scrollY > pageHeight * 0.6) {
            seaFloor.style.opacity = (scrollY - pageHeight * 0.6) / (pageHeight * 0.3);
            seaFloor.style.transform = 'translateY(0)';
        } else {
            seaFloor.style.opacity = 0; seaFloor.style.transform = 'translateY(100%)';
        }
        
        // Efek sinar cahaya
        document.querySelectorAll('.light-ray').forEach(ray => {
            ray.style.opacity = Math.min(1, scrollY / 300) * (1 - scrollPercent * 1.1);
        });

        // Tampilkan/sembunyikan tombol "Kembali ke Atas"
        if (scrollY > 400) { scrollToTopBtn.classList.add('show'); } 
        else { scrollToTopBtn.classList.remove('show'); }
    }, { passive: true });

    // Event listener untuk tombol "Kembali ke Atas"
    scrollToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Event listener untuk tombol menu mobile
    const menuToggle = document.getElementById('menu-toggle');
    const navOverlay = document.getElementById('nav-overlay');
    menuToggle.addEventListener('click', () => navOverlay.classList.toggle('show'));
    navOverlay.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navOverlay.classList.remove('show');
            const targetElement = document.querySelector(item.getAttribute('href'));
            if(targetElement) {
                const offsetPosition = targetElement.offsetTop - fixedHeader.offsetHeight - 20;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });

    // Fungsi untuk menghasilkan elemen latar belakang (gelembung, sinar cahaya, rumput laut)
    function generateBackgroundElements() {
        const bgContainer = document.getElementById('ocean-bg');
        const floorContainer = document.getElementById('sea-floor');
        for (let i = 0; i < 30; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            const size = Math.random() * 30 + 5;
            bubble.style.cssText = `width:${size}px; height:${size}px; left:${Math.random()*100}%; animation-delay:${Math.random()*30}s;`;
            bgContainer.appendChild(bubble);
        }
        for (let i = 0; i < 8; i++) {
            const ray = document.createElement('div');
            ray.className = 'light-ray';
            ray.style.left = `${Math.random() * 70 + 15}%`;
            ray.style.animationDelay = `${Math.random() * 6}s`;
            bgContainer.appendChild(ray);
        }
        for (let i = 0; i < 12; i++) {
            const seaweed = document.createElement('div');
            seaweed.className = 'seaweed';
            seaweed.style.left = `${Math.random() * 95}%`;
            seaweed.style.height = `${Math.random() * 150 + 100}px`;
            seaweed.style.width = `${Math.random() * 25 + 35}px`;
            seaweed.style.animationDelay = `${Math.random() * 15}s`;
            seaweed.innerHTML = `<svg viewBox="0 0 50 150" preserveAspectRatio="none"><path d="M25 150 C ${Math.random()*30+10} 120, ${Math.random()*30+10} 90, 25 60 C ${Math.random()*30+10} 30, ${Math.random()*30+10} 10, 25 0" fill="none" stroke="rgba(2, 48, 71, 0.6)" stroke-width="8" stroke-linecap="round"/></svg>`;
            floorContainer.appendChild(seaweed);
        }
    }
    
    // Fungsi untuk menghasilkan elemen ikan di latar belakang
    function generateFish() {
        const bgContainer = document.getElementById('ocean-bg');
        const fishColors = ['#ff9900', '#ff5e00', '#ffdd00', '#33ccff'];
        for (let i = 0; i < 15; i++) {
            const fish = document.createElement('div');
            fish.className = 'fish';
            const size = Math.random() * 40 + 20; // ukuran antara 20px dan 60px
            const speed = Math.random() * 20 + 15; // durasi antara 15s dan 35s
            const delay = Math.random() * 30;
            const top = Math.random() * 80 + 10; // top antara 10% dan 90%
            const color = fishColors[Math.floor(Math.random() * fishColors.length)];
            
            fish.style.width = `${size}px`;
            fish.style.height = `${size * 0.6}px`;
            fish.style.top = `${top}%`;
            fish.style.animationDuration = `${speed}s`;
            fish.style.animationDelay = `${delay}s`;

            fish.innerHTML = `<svg viewBox="0 0 100 60" style="transform: ${Math.random() > 0.5 ? 'scaleX(-1)' : ''};"><path d="M99,20 C99,40 70,55 50,55 C30,55 0,40 0,20 C0,0 30,5 50,5 C70,5 99,0 99,20 Z" fill="${color}"/><path d="M70,20 L90,5 L90,35 Z" fill="${color}"/><circle cx="20" cy="20" r="3" fill="#000"/></svg>`;
            bgContainer.appendChild(fish);
        }
    }

    // Fungsi untuk menghasilkan partikel "salju laut"
    function generateMarineSnow() {
        const container = document.getElementById('marine-snow-container');
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            const size = Math.random() * 3 + 1;
            const duration = Math.random() * 20 + 15;
            const delay = Math.random() * 25;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${delay}s`;
            container.appendChild(particle);
        }
    }
    
    // Fungsi untuk menghasilkan elemen karang
    function generateCorals() {
        const container = document.getElementById('sea-floor');
        const coralColors = ['#ff7f50', '#ff4500', '#db7093', '#6a5acd'];
        for(let i = 0; i < 8; i++) {
            const coral = document.createElement('div');
            coral.className = 'coral';
            const height = Math.random() * 80 + 40;
            const color = coralColors[Math.floor(Math.random() * coralColors.length)];
            coral.style.left = `${Math.random() * 90}%`;
            coral.style.height = `${height}px`;
            coral.style.width = 'auto';
            coral.style.animationDelay = `${Math.random() * 10}s`;
            coral.innerHTML = `<svg viewBox="0 0 100 100" style="height:${height}px"><path d="M50,100 C 20,80 20,60 50,50 C 80,60 80,80 50,100 Z M50,50 C 40,40 30,20 50,0 C 70,20 60,40 50,50 Z" fill="${color}" opacity="0.7"/></svg>`;
            container.appendChild(coral);
        }
    }

    // Memanggil fungsi untuk membuat elemen latar belakang saat DOM dimuat
    generateBackgroundElements();
    generateFish();
    generateMarineSnow();
    generateCorals();
});

