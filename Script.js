// Data lengkap siswa, termasuk nama panggilan/pendek, nama lengkap, jenis kelamin, peran organisasi, URL foto, dan deskripsi pribadi
const studentDetails = {
    "Adi": { fullName: "ADI MUHAMAD FERDIANSYAH", gender: "Laki-laki", role: "Murid", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Murid bersemangat yang siap belajar dan berkembang." },
    "Apri": { fullName: "APRIYANTO", gender: "Laki-laki", role: "Olahraga 2", photo: "https://raw.githubusercontent.com/Andikakostradnanda/Profile-9H/76b207393ff7f08ced009f36943c4965b27a6f2c/Apriyanto.jpg", description: "Atlet yang selalu siap menjaga kebugaran tim." },
    "Azhira": { fullName: "AZHIRA JIONELIA NAVISHA BILQIS", gender: "Perempuan", role: "Absensi 2", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Teliti dalam mencatat setiap kehadiran, memastikan semua kru lengkap." },
    "Belva": { fullName: "BELVA RAMANIA", gender: "Perempuan", role: "Wakil Kelas", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Bintang penyeimbang yang selalu siap mendukung kepemimpinan." },
    "Citra": { fullName: "CITRA LESTARI", gender: "Perempuan", role: "Murid", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Siswa yang ceria dan penuh semangat dalam setiap aktivitas." },
    "Dewi": { fullName: "DEWI NUR HAWA", gender: "Perempuan", role: "Murid", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Murid yang tenang dan fokus dalam meraih ilmu." },
    "Diana": { fullName: "DIANA WIDYAWATI", gender: "Perempuan", role: "Sekretaris 2", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Teliti dalam mencatat, memastikan setiap detail misi terdokumentasi." },
    "Dinda": { fullName: "DINDA AULIA WINDARIS", gender: "Perempuan", role: "Murid", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Siswa yang berdedikasi dan selalu siap membantu." },
    "Fazri": { fullName: "FAZRI INDRA NUGRAHA", gender: "Laki-laki", role: "Murid", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Murid yang aktif dan bersemangat dalam setiap kegiatan." },
    "Geane": { fullName: "GEANNE SUKMA ANINDYA", gender: "Perempuan", role: "Murid", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Siswa yang penuh ide dan kreativitas." },
    "Gendis": { fullName: "GENDIS AULIA MAHARANI WIBOWO", gender: "Perempuan", role: "Bendahara 1", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Pengelola keuangan yang cermat, memastikan setiap dana terpakai dengan bijak." },
    "Kazril": { fullName: "KAZRIL CAHYARAHIM", gender: "Laki-laki", role: "Murid", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Murid yang penuh rasa ingin tahu dan selalu siap belajar hal baru." },
    "Khayra": { fullName: "KHAYRA AZDKIA HAIFA", gender: "Perempuan", role: "Kerohanian 1", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Pembimbing spiritual yang membawa ketenangan dan inspirasi." },
    "Andika": { fullName: "M. ANDIKA KOSTRADNANDA", gender: "Laki-laki", role: "Ketua Kelas", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Pemimpin yang berwibawa, siap membawa kelas menuju tujuan." },
    "Melisa": { fullName: "MELISA RAHMAYANTI ISKANDAR PUTRI", gender: "Perempuan", role: "Murid", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Siswa yang rajin dan tekun dalam setiap tugas." },
    "M. Rizky": { fullName: "MOCHAMMAD RIZKY RAMDHANI", gender: "Laki-laki", role: "Murid", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Murid yang penuh semangat dan selalu siap berkontribusi." },
    "Faiq": { fullName: "MUHAMMAD AINUR OKTA FAIQ MAULANA", gender: "Laki-laki", role: "Murid", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Siswa yang tenang dan memiliki pemikiran yang mendalam." },
    "Idham": { fullName: "MUHAMMAD IDHAM AL-HAFIDZ", gender: "Laki-laki", role: "Kerohanian 2", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Penjaga moral yang selalu mengingatkan akan nilai-nilai kebaikan." },
    "Rafli": { fullName: "MUHAMMAD RAFLI SETIAWAN", gender: "Laki-laki", role: "Murid", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Murid yang bersemangat dan siap menghadapi tantangan." },
    "Nadia": { fullName: "NADIA RAMADINA", gender: "Perempuan", role: "Kepramukaan", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Pramuka sejati yang tangguh dan selalu siap berpetualang." },
    "Nadzar": { fullName: "NADZAR FAZRI GUMELAR", gender: "Laki-laki", role: "Murid", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Siswa yang cerdas dan memiliki banyak ide." },
    "Rama": { fullName: "RAMA KURNIAWAN", gender: "Laki-laki", role: "Murid", photo: "https://raw.githubusercontent.com/Andikakostradnanda/Profile-9H/76b207393ff7f08ced009f36943c4965b27a6f2c/Rama.jpg", description: "Murid yang antusias dan selalu membawa energi positif." },
    "Ricky": { fullName: "RICKY ADLY MAULANA", gender: "Laki-laki", role: "Kepramukaan", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Pramuka yang cekatan dan selalu siap untuk misi baru." },
    "Rika": { fullName: "RIKA RISMAYANTI", gender: "Perempuan", role: "Sekretaris 1", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Sekretaris yang rapi dan memastikan semua catatan akurat." },
    "Rizky A.R.F": { fullName: "RIZKY ARIEF FADILLAH", gender: "Laki-laki", role: "Seksi Perpustakaan 1", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Penjaga gerbang ilmu, siap memandu ke dunia pengetahuan." },
    "Salma": { fullName: "SALMA NURDESTIANI", gender: "Perempuan", role: "Absensi 1", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Pencatat kehadiran yang teliti, memastikan disiplin kru." },
    "Zaifa": { fullName: "SITI ZAIFA ZHUFAIRAH", gender: "Perempuan", role: "Bendahara 2", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Bendahara yang handal, mengelola keuangan dengan integritas." },
    "Aul": { fullName: "SRI AULIA NINGSIH", gender: "Perempuan", role: "Murid", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Siswa yang berprestasi dan selalu berusaha memberikan yang terbaik." },
    "Suci": { fullName: "SUCI LATIFAH OKTAVIANI", gender: "Perempuan", role: "Seksi Keamanan 2", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Penjaga keamanan yang sigap, menciptakan lingkungan yang kondusif." },
    "Syifa Org": { fullName: "SYIFA NURDINI H.", gender: "Perempuan", role: "Olahraga 1", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Pembangkit semangat olahraga, menjaga kebugaran tim." },
    "Vienard": { fullName: "VIENARD CAIZHI NISAESU IRHAB", gender: "Laki-laki", role: "Seksi Perpustakaan 2", photo: "https://raw.githubusercontent.com/Andikakostradnanda/Profile-9H/76b207393ff7f08ced009f36943c4965b27a6f2c/Vienard.jpg", description: "Vienard Lucu dan Suka Bikin orang ketawa." },
    "Yana": { fullName: "YANA NURYANA", gender: "Laki-laki", role: "Seksi Keamanan 1", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Petugas keamanan yang bertanggung jawab, memastikan ketertiban." },
    "Zalfa": { fullName: "ZALFA", gender: "Perempuan", role: "Murid", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Murid yang penuh potensi dan semangat belajar." },
    "Syifa Baru Pindahan": { fullName: "SYIFA (BARU Pindahan)", gender: "Perempuan", role: "Murid", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Siswa baru yang siap beradaptasi dan berkontribusi." },
    "Syifa (Non-Org)": { fullName: "SYIFA", gender: "Perempuan", role: "Murid", photo: "https://placehold.co/120x120/333333/ffffff?text=Not+Found", description: "Murid yang berdedikasi dalam setiap tugasnya." },
};

// Data guru untuk setiap mata pelajaran (tidak digunakan dalam fungsionalitas modal, tapi tetap disertakan untuk kelengkapan)
const teacherDetails = {
    "IPA": "Hj. Elis Herawati, S.Pd.",
    "B. Indo": "Amin S.Pd",
    "B. Inggris": "Euis Finanjungsari, S.IP",
    "Informatika": "Recita Widyan Morteza, S.Pd.",
    "B. Sunda": "Didi Junaedi, S.Pd.",
    "BP/BK": "Anceu Andriani, S.Pd.",
    "IPS": "Elah Siti Rumailah, S.Pd",
    "MTK": "Nonny Septiana Kartika, S.Pd.",
    "PPKn": "Imas Ela Nurlaela, S.H.",
    "PJOK": "Drs. Priyo Edy Hariyanto",
    "PAI": "Bp. Eri Laelasari Purnama S.Pd.I.",
    "SBK": "Amsor Adiwirya, S.Pd."
};

// Dapatkan elemen modal dan elemen-elemen di dalamnya
const modal = document.getElementById('organizationModal');
const modalStudentName = document.getElementById('modalStudentName');
const profilePhoto = document.getElementById('profilePhoto');
const profileDescription = document.getElementById('profileDescription');
const modalFullName = document.getElementById('modalFullName');
const modalGender = document.getElementById('modalGender');
const modalRole = document.getElementById('modalRole');

/**
 * Fungsi untuk membuka modal dengan detail siswa yang dipilih.
 * @param {string} nameKey Kunci nama siswa dari objek studentDetails.
 */
function openModal(nameKey) {
    console.log('openModal called for:', nameKey); // Log untuk debugging
    const studentData = studentDetails[nameKey];

    if (!studentData) {
        console.error('Student data not found for:', nameKey); // Log error jika data siswa tidak ditemukan
        // Fallback jika data siswa tidak ada
        modalStudentName.textContent = nameKey;
        modalFullName.textContent = nameKey;
        modalGender.textContent = "Tidak diketahui";
        modalRole.textContent = "Murid";
        profilePhoto.src = "https://placehold.co/120x120/333333/ffffff?text=Not+Found"; // Placeholder jika foto tidak ditemukan
        profileDescription.textContent = "Informasi tambahan belum tersedia.";
    } else {
        // Hapus penanda tambahan dari nama untuk tampilan yang lebih bersih
        let displayName = nameKey.replace(" (Non-Org)", "").replace(" Pindahan", "").replace(" Org", "").replace(" Baru Pindahan", "");
        modalStudentName.textContent = displayName;
        modalFullName.textContent = studentData.fullName;
        modalGender.textContent = studentData.gender;
        modalRole.textContent = studentData.role;
        profilePhoto.src = studentData.photo; // Atur sumber foto
        profileDescription.textContent = studentData.description;
    }

    // Tampilkan modal dengan efek fade-in
    modal.style.display = 'flex';
    requestAnimationFrame(() => {
        modal.classList.add('show');
    });
    console.log('Modal should be visible now.'); // Log untuk debugging
}

/**
 * Fungsi untuk menutup modal.
 */
function closeModal() {
    console.log('closeModal called.'); // Log untuk debugging
    modal.classList.remove('show');
    // Sembunyikan modal sepenuhnya setelah transisi selesai
    modal.addEventListener('transitionend', function handler(event) {
        if (event.propertyName === 'opacity' && event.target === modal) {
            modal.style.display = 'none';
            modal.removeEventListener('transitionend', handler);
            console.log('Modal is hidden now.'); // Log untuk debugging
        }
    }, { once: true });
}

// Tambahkan event listener klik ke semua item daftar siswa di jadwal piket dan bagian organisasi
document.querySelectorAll('.student-list li, .org-role-card li').forEach(item => {
    item.addEventListener('click', () => {
        const studentNameKey = item.dataset.name; // Dapatkan kunci nama siswa dari atribut data-name
        console.log('Clicked on:', studentNameKey); // Log siswa yang diklik
        openModal(studentNameKey); // Panggil fungsi openModal
    });
});

// Tutup modal saat mengklik di luar area konten modal
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        closeModal();
    }
});

/**
 * Fungsi untuk membuat bintang-bintang latar belakang yang dinamis.
 */
function createStars() {
    const starsContainer = document.getElementById('stars-background');
    const numStars = 100; // Jumlah bintang yang akan dibuat
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${Math.random() * 3 + 1}px`; // Ukuran bintang acak (1-4px)
        star.style.height = star.style.width; // Pastikan bintang bulat
        star.style.left = `${Math.random() * 100}%`; // Posisi horizontal acak
        star.style.top = `${Math.random() * 100}%`; // Posisi vertikal acak
        star.style.animationDelay = `${Math.random() * 5}s`; // Penundaan animasi acak untuk efek kerlap-kerlip
        starsContainer.appendChild(star);
    }
}

// Tambahkan event listener untuk menerapkan animasi bertahap ke kartu saat DOM dimuat
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card, .org-role-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`; // Penundaan animasi bertahap
        card.style.animationFillMode = 'forwards'; // Pastikan gaya akhir animasi tetap
    });
});

// Panggil fungsi createStars saat seluruh halaman (termasuk gambar) telah dimuat
window.onload = createStars;

