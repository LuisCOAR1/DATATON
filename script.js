function iniciarMap(){
    var coord = {lat:-13.516772,lng: -71.9787231};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 8,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
function mostrarBloques() {
  var formulario = document.getElementById("miFormulario");
  var opciones = document.getElementById("opciones");
  var bloque1 = document.getElementById("bloque1");
  var bloque2 = document.getElementById("bloque2");
  var bloque3 = document.getElementById("bloque3");

  // Oculta todos los bloques
  bloque1.style.display = "none";
  bloque2.style.display = "none";
  bloque3.style.display = "none";

  // Muestra el bloque correspondiente a la opción seleccionada
  if (opciones.value === "opcion1") {
      bloque1.style.display = "block";
  } else if (opciones.value === "opcion2") {
      bloque2.style.display = "block";
  } else if (opciones.value === "opcion3") {
      bloque3.style.display = "block";
  }
}
