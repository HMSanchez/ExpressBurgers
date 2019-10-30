function initMap() {
    var uluru = {lat: 40.758701, lng: -111.876183	};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }

  function btnClick(){
    window.location.href ="http://localhost:3000/location";
  }

  // img(src="cheesecake.jpg" type="text/javscript")
   //-  each pic in dessertImages
              //-    div
              //-      img(src=pic.imageurl)