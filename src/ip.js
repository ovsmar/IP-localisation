fetch('https://ipapi.co/json/')
.then(function(response) {
  response.json().then(jsonData => {
    console.log(jsonData);

 
    document.getElementById("ip").innerHTML = jsonData.ip;
    document.getElementById("country").innerHTML = jsonData.country_name
    document.getElementById("city").innerHTML = jsonData.city


  });
})
.catch(function(error) {
  console.log(error)
});