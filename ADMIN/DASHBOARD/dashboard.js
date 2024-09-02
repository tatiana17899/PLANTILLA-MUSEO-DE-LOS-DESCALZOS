// Agrega un evento de clic al botón de navbar
document.getElementById("toggleSidebar").addEventListener("click", function () {
  // Obtiene el elemento del sidebar
  var sidebar = document.getElementById("sidebar");
  // Obtiene el elemento del contenido principal
  var content = document.getElementById("content");
  // Verifica si el sidebar está oculto
  if (sidebar.classList.contains("sidebar-hidden")) {
    // Muestra el sidebar
    sidebar.classList.remove("sidebar-hidden");
    sidebar.classList.add("sidebar-show");
    // Ajusta el ancho del contenido principal
    content.classList.remove("sidebar-hidden");
    content.classList.add("sidebar-show");
  } else if (!sidebar.classList.contains("sidebar-show")) {
    // Oculta el sidebar
    sidebar.classList.remove("sidebar-show");
    sidebar.classList.add("sidebar-hidden");
    // Ajusta el ancho del contenido principal
    content.classList.remove("sidebar-show");
    content.classList.add("sidebar-hidden");
  } else {
    // Oculta el sidebar
    sidebar.classList.remove("sidebar-show");
    sidebar.classList.add("sidebar-hidden");
    // Ajusta el ancho del contenido principal
    content.classList.remove("sidebar-show");
    content.classList.add("sidebar-hidden");
  }
});
