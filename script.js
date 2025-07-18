// Student and teacher data (unchanged)
const studentDetails = {
    "Adi": { fullName: "ADI MUHAMAD FERDIANSYAH", gender: "Laki-laki", role: "Murid" },
    "Apri": { fullName: "APRIYANTO", gender: "Laki-laki", role: "Olahraga 2" },
    // ... (rest of studentDetails unchanged)
};

const teacherDetails = {
    "IPA": "Hj. Elis Herawati, S.Pd.",
    // ... (rest of teacherDetails unchanged)
};

// Get modal elements
const modal = document.getElementById('organizationModal');
const modalContent = modal.querySelector('.modal-content');
const modalStudentName = document.getElementById('modalStudentName');
const modalFullName = document.getElementById('modalFullName');
const modalGender = document.getElementById('modalGender');
const modalRole = document.getElementById('modalRole');

// Function to reset viewport scale (workaround for zoom-out bug)
function resetViewport() {
    const metaViewport = document.querySelector('meta[name="viewport"]');
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, shrink-to-fit=no');
}

// Function to open the modal
function openModal(nameKey) {
    const studentData = studentDetails[nameKey];
    let displayName = nameKey.replace(" (Non-Org)", "").replace(" Pindahan", "").replace(" Org", "").replace(" Baru", "");
    modalStudentName.textContent = displayName;

    if (studentData) {
        modalFullName.textContent = studentData.fullName;
        modalGender.textContent = studentData.gender;
        modalRole.textContent = studentData.role;
    } else {
        modalFullName.textContent = displayName;
        modalGender.textContent = "Tidak diketahui";
        modalRole.textContent = "Murid";
    }

    document.body.classList.add('modal-open'); // Lock body
    modal.style.display = 'flex';
    requestAnimationFrame(() => {
        modal.classList.add('show');
    });
}

// Function to close the modal
function closeModal() {
    modal.classList.remove('show');
    document.body.classList.remove('modal-open'); // Unlock body
    modal.addEventListener('transitionend', function handler(event) {
        if (event.propertyName === 'opacity' && event.target === modal) {
            modal.style.display = 'none';
            resetViewport(); // Force viewport reset after close
            modal.removeEventListener('transitionend', handler);
        }
    }, { once: true });
}

// Add click and touch listeners to student names
document.querySelectorAll('.student-list li, .org-role-card li').forEach(item => {
    const handleInteraction = (e) => {
        e.preventDefault(); // Prevent default browser behavior (e.g., zooming)
        const studentNameKey = item.dataset.name;
        openModal(studentNameKey);
    };

    item.addEventListener('click', handleInteraction);
    item.addEventListener('touchstart', handleInteraction, { passive: false });
});

// Close modal on touch/click outside content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

window.addEventListener('touchstart', (event) => {
    if (event.target === modal) {
        event.preventDefault();
        closeModal();
    }
}, { passive: false });

// Close button handler
document.querySelector('.close-button').addEventListener('click', closeModal);
document.querySelector('.close-button').addEventListener('touchstart', (e) => {
    e.preventDefault();
    closeModal();
}, { passive: false });

// Generate dynamic stars background
function createStars() {
    const starsContainer = document.getElementById('stars-background');
    const numStars = 100;
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${Math.random() * 3 + 1}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        starsContainer.appendChild(star);
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card, .org-role-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.style.animationFillMode = 'forwards';
    });
    createStars();
    resetViewport(); // Initial viewport reset for GitHub Pages
});// Data lengkap siswa (unchanged)
const studentDetails = {
    "Adi": { fullName: "ADI MUHAMAD FERDIANSYAH", gender: "Laki-laki", role: "Murid" },
    "Apri": { fullName: "APRIYANTO", gender: "Laki-laki", role: "Olahraga 2" },
    // ... (rest of studentDetails unchanged)
};

// Data guru (unchanged)
const teacherDetails = {
    "IPA": "Hj. Elis Herawati, S.Pd.",
    // ... (rest of teacherDetails unchanged)
};

// Get modal elements
const modal = document.getElementById('organizationModal');
const modalContent = modal.querySelector('.modal-content');
const modalStudentName = document.getElementById('modalStudentName');
const modalFullName = document.getElementById('modalFullName');
const modalGender = document.getElementById('modalGender');
const modalRole = document.getElementById('modalRole');

// Function to open the modal
function openModal(nameKey) {
    const studentData = studentDetails[nameKey];
    let displayName = nameKey.replace(" (Non-Org)", "").replace(" Pindahan", "").replace(" Org", "").replace(" Baru", "");
    modalStudentName.textContent = displayName;

    if (studentData) {
        modalFullName.textContent = studentData.fullName;
        modalGender.textContent = studentData.gender;
        modalRole.textContent = studentData.role;
    } else {
        modalFullName.textContent = displayName;
        modalGender.textContent = "Tidak diketahui";
        modalRole.textContent = "Murid";
    }

    modal.style.display = 'flex';
    requestAnimationFrame(() => {
        modal.classList.add('show');
    });
}

// Function to close the modal
function closeModal() {
    modal.classList.remove('show');
    modal.addEventListener('transitionend', function handler(event) {
        if (event.propertyName === 'opacity' && event.target === modal) {
            modal.style.display = 'none';
            modal.removeEventListener('transitionend', handler);
        }
    }, { once: true });
}

// Add click and touch listeners to student names
document.querySelectorAll('.student-list li, .org-role-card li').forEach(item => {
    const handleInteraction = (e) => {
        e.preventDefault(); // Prevent default browser behavior (e.g., zooming)
        const studentNameKey = item.dataset.name;
        openModal(studentNameKey);
    };

    item.addEventListener('click', handleInteraction);
    item.addEventListener('touchstart', handleInteraction, { passive: false });
});

// Close modal on touch/click outside content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

window.addEventListener('touchstart', (event) => {
    if (event.target === modal) {
        event.preventDefault(); // Prevent zoom on touch
        closeModal();
    }
}, { passive: false });

// Close button handler
document.querySelector('.close-button').addEventListener('click', closeModal);
document.querySelector('.close-button').addEventListener('touchstart', (e) => {
    e.preventDefault();
    closeModal();
}, { passive: false });

// Generate dynamic stars background
function createStars() {
    const starsContainer = document.getElementById('stars-background');
    const numStars = 100;
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${Math.random() * 3 + 1}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        starsContainer.appendChild(star);
    }
}

// Apply staggered animation to cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card, .org-role-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.style.animationFillMode = 'forwards';
    });
    createStars(); // Call createStars on DOM load
});
