document.addEventListener("DOMContentLoaded", function () {
  // Di sini kita bisa tambahkan interaktivitas
  // Contoh: Toggle menu untuk mobile
  const menuToggle = document.getElementById("menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  // Cek jika elemen ada sebelum menambahkan event listener
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      // Ini adalah logika sederhana. Untuk production,
      // Anda akan membuat menu dropdown yang lebih baik.
      alert(
        "Tombol menu mobile diklik! Anda perlu membuat CSS untuk menampilkan menu di sini."
      );
    });
  }
});
