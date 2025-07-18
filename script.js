// Cegah zoom saat gesture di layar sentuh (mobile)
document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
});

let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
  const now = new Date().getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault(); // cegah zoom karena double tap
  }
  lastTouchEnd = now;
}, false);

// Tombol ID Card
document.addEventListener('DOMContentLoaded', function () {
  const idCardBtn = document.getElementById('idCard');
  if (idCardBtn) {
    idCardBtn.addEventListener('click', function () {
      // Tambahkan aksi yang kamu inginkan di sini
      alert('Menampilkan ID Card...');
    });
  }
});
