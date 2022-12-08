
        fetch('https://ipapi.co/json/')
        .then(function(response) {
          response.json().then(jsonData => {
            console.log(jsonData);
        
         
            document.getElementById("ip").innerHTML = "IP Address:" + " " + jsonData.ip;
            document.getElementById("country").innerHTML = "Country:" + " " + jsonData.country_name
            document.getElementById("city").innerHTML = "City:" + " " + jsonData.city
            document.getElementById("region").innerHTML = "Region:" + " " + jsonData.region
            document.getElementById("postal").innerHTML = "Postal Code:" + " " + jsonData.postal
            document.getElementById("latitude_longitude").innerHTML = "Latitude/Longitude" + " " + jsonData.latitude + " , " + jsonData.longitude
            document.getElementById("timezone").innerHTML = "Time Zone:" + " " + jsonData.timezone + " (" + jsonData.utc_offset +  ")"
            document.getElementById("country_calling_code").innerHTML = "Calling Code:" + " " + jsonData.country_calling_code
            document.getElementById("currency").innerHTML = "Currency:" + " " + jsonData.currency
            document.getElementById("org").innerHTML = "Org:" + " " + jsonData.org
        
        
        var map = L.map("map").setView([jsonData.latitude, jsonData.longitude], 12);
        
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        L.marker([jsonData.latitude,jsonData.longitude]).addTo(map).bindPopup("Maybe you are here :0").openPopup();
        
        var popup = L.popup()
          .setLatLng([jsonData.latitude, jsonData.longitude])
          .setContent("Maybe you are here :0")
          .openOn(map);
        
        function onMapClick(e) {
          alert("You clicked on the map to " + e.latlng);
        }
        
        map.on("click", onMapClick);
        
        var popup = L.popup();
        
        function onMapClick(e) {
          popup
            .setLatLng(e.latlng)
            .setContent("You clicked on the map to " + e.latlng.toString())
            .openOn(map);
        }
        
        map.on("click", onMapClick);
        
          });
        })
        .catch(function(error) {
          console.log(error)
        });



        function togglePopup(){
          document.getElementById("popup-1").classList.toggle("active");
        }
      
      
      window.setTimeout(function(){ 
        if (window.localStorage) {
          var nextPopup = localStorage.getItem( 'nextNewsletter' );
          console.log(nextPopup)
          if (nextPopup > new Date()) {
            return;
          }
          var expires = new Date();
          expires = expires.setHours(expires.getHours() + 24);
          localStorage.setItem( 'nextNewsletter', expires );
        }
        document.getElementById("popup-1").classList.toggle("active");
      }, 1000);
      
      