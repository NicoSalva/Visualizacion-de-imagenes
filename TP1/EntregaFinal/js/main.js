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
