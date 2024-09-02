// Validación Bootstrap
(function () {
    'use strict';
  
    var forms = document.querySelectorAll('.needs-validation');
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
  
          form.classList.add('was-validated');
        }, false);
      });
})();

// Función del icono ojo
$(document).ready(function () {
    
    $(".glyphicon-eye-open").hide();

    $("#passwordfield").on("keyup", function() {
        if ($(this).val()) {
            $(".glyphicon-eye-open").show();
        } else {
            $(".glyphicon-eye-open").hide();
        }
    });

    $(".glyphicon-eye-open").on('mousedown', function() {
        $("#passwordfield").attr('type', 'text');
    }).on('mouseup mouseout', function() {
        $("#passwordfield").attr('type', 'password');
    });
});
