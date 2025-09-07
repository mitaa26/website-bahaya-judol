function openModal(type) {
      document.getElementById("modal-" + type).style.display = "flex";
    }
    function closeModal(type) {
      document.getElementById("modal-" + type).style.display = "none";
    }
    window.onclick = function(event) {
      const modals = document.querySelectorAll(".modal");
      modals.forEach(modal => {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      });
    }

    // Animasi muncul saat di-scroll
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // biar animasi sekali aja
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(reveal => {
    observer.observe(reveal);
  });

  // Tombol ke atas + berhenti di atas footer
(function () {
  const toTopBtn = document.getElementById('toTop');
  if (!toTopBtn) return;

  const footer = document.querySelector('footer');
  const BASE_BOTTOM = 24; // px

  function adjustOffset() {
    if (!footer) return;
    const rect = footer.getBoundingClientRect();
    // Seberapa jauh footer “masuk” ke viewport dari bawah
    const overlap = Math.max(0, window.innerHeight - rect.top);
    // Naikkan tombol jika footer sudah muncul, supaya berhenti tepat di atas footer
    toTopBtn.style.bottom = (BASE_BOTTOM + overlap) + 'px';
  }

  function onScroll() {
    // Muncul setelah scroll melewati 250px
    if (window.scrollY > 250) {
      toTopBtn.classList.add('show');
    } else {
      toTopBtn.classList.remove('show');
    }
    adjustOffset();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', adjustOffset);

  toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Inisialisasi awal
  onScroll();
})();
