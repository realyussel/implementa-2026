$(document).ready(function () {

  $(".vote-card").on("click", function () {

    // Quitar selección visual de todas las tarjetas
    $(".vote-card").removeClass("selected");

    // Marcar visualmente la tarjeta seleccionada
    $(this).addClass("selected");

    // Obtener el id del radio relacionado
    const radioId = $(this).data("voto");

    // Seleccionar el radio
    $("#" + radioId).prop("checked", true);

    // Habilitar botón de confirmar voto
    $("#btnConfirmarVoto").prop("disabled", false);
  });

});