// Menunggu seluruh konten HTML dimuat sebelum menjalankan script
document.addEventListener("DOMContentLoaded", function () {
  // Ambil elemen-elemen yang dibutuhkan dari HTML
  const menuToggleBtn = document.getElementById("menu-toggle");
  const closeMenuBtn = document.getElementById("close-btn");
  const mobileNavContainer = document.getElementById("mobile-nav-container");
  const overlay = document.querySelector(".nav-overlay");

  // Fungsi untuk membuka menu
  const openMenu = () => {
    mobileNavContainer.classList.add("active");
    document.body.classList.add("no-scroll"); // Mencegah body scroll
  };

  // Fungsi untuk menutup menu
  const closeMenu = () => {
    mobileNavContainer.classList.remove("active");
    document.body.classList.remove("no-scroll"); // Mengizinkan body scroll kembali
  };

  // Tambahkan event listener untuk setiap elemen
  if (menuToggleBtn) {
    menuToggleBtn.addEventListener("click", openMenu);
  }

  if (closeMenuBtn) {
    closeMenuBtn.addEventListener("click", closeMenu);
  }

  if (overlay) {
    overlay.addEventListener("click", closeMenu);
  }
});
