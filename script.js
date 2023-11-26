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
var publicSectorBtn = document.getElementById("public_sector");
var juridicSectorBtn = document.getElementById("juridic_sector");
var educationSectorBtn = document.getElementById("education_sector");
var saludSectorBtn = document.getElementById("salud_sector");
var bloque1 = document.getElementById("bloque1");
var bloque2 = document.getElementById("bloque2");
var bloque3 = document.getElementById("bloque3");
var bloque4 = document.getElementById("bloque4");

function mostrarBloque1() {
  bloque1.style.display = "flex";
  bloque2.style.display = "none";
  bloque3.style.display = "none"
  bloque4.style.display = "none";
}
mostrarBloque1()

function mostrarBloque2() {
  bloque3.style.display = "none"
  bloque2.style.display = "flex";
  bloque1.style.display = "none";
  bloque4.style.display = "none";
}

function mostrarBloque3() {
  bloque3.style.display = "flex"
  bloque2.style.display = "none";
  bloque1.style.display = "none";
  bloque4.style.display = "none";
}

function mostrarBloque4() {
  bloque4.style.display = "flex";
  bloque3.style.display = "none";
  bloque2.style.display = "none";
  bloque1.style.display = "none";
}

publicSectorBtn.addEventListener("click", mostrarBloque1);
juridicSectorBtn.addEventListener("click", mostrarBloque2);
educationSectorBtn.addEventListener("click", mostrarBloque3);
saludSectorBtn.addEventListener("click", mostrarBloque4);
