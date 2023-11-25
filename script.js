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
