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
    document.getElementById("timezone").innerHTML = "Time Zone:" + " " + jsonData.timezone
    // document.getElementById("longitude").innerHTML = "longitude:" + " " + jsonData.longitude
    document.getElementById("country_calling_code").innerHTML = "Calling Code:" + " " + jsonData.country_calling_code
    document.getElementById("currency").innerHTML = "Currency:" + " " + jsonData.currency
    document.getElementById("org").innerHTML = "Org:" + " " + jsonData.org


var map = L.map("map").setView([jsonData.latitude, jsonData.longitude], 8);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/search?query=France#map=12/43.6126/3.9207">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([jsonData.latitude,jsonData.longitude]).addTo(map).bindPopup("Peut-être êtes-vous ici.").openPopup();

var popup = L.popup()
  .setLatLng([jsonData.latitude, jsonData.longitude])
  .setContent("peut-être êtes-vous ici.")
  .openOn(map);

function onMapClick(e) {
  alert("You clicked the map at " + e.latlng);
}

map.on("click", onMapClick);

var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
}

map.on("click", onMapClick);



  });
})
.catch(function(error) {
  console.log(error)
});





