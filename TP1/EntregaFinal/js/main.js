$(document).ready(function(){

  getInfo("seleccionarFoto.html");

  $(document).on("click", '#seleccionarFoto' , getLinkSeleccionarFoto);
  function getLinkSeleccionarFoto(event) {
    event.preventDefault();
    var link = "seleccionarFoto.html";
    getInfo(link);
  }

  $(document).on("click", '#filtros' , getLinkFiltros);

  function getLinkFiltros(event) {
    event.preventDefault();
    var link = "filtrosDisponibles.html";
    getInfo(link);
  }

  $(document).on("click", '#descargar' , getLinkDescargar);

  function getLinkDescargar(event){
    event.preventDefault();
    var link= "descargar.html";
    getInfo(link);
  }

  function getInfo(link) {
    $.ajax({
      url: link,
      method:"GET",
      dataType: "html",
      success: function(resultData){
        $("#cargadorAjax").html(resultData);
      },
      error:function(jqxml, status, errorThrown){
        alert('Error');
      }
    });
    $("#cargadorAjax").html("<h3>Cargando...</h3>");
    //event.preventDefault();
  }
});

$(function() {
    $('#file-input').change(function(e) {
        var file = e.target.files[0],
            imageType = /image.*/;

        if (!file.type.match(imageType))
            return;

        var reader = new FileReader();
        reader.onload = fileOnload;
        reader.readAsDataURL(file);

    });

    function fileOnload(e) {
        var $img = $('<img>', { src: e.target.result });
        var canvas = $('#canvas')[0];
        var context = canvas.getContext('2d');

        $img.load(function() {
            context.drawImage(this, 0, 0);
        });
    }
});
