
$(document).ready(function(){
  $('#find-city').on('click', function(e){
    event.preventDefault()
    var myCity = $('#city-input').val();

    $('#log').append('<button>' + myCity + '</button>'+ '</br>')



    var city = $('#city-input').val();
    var APIKey = "ba0a29b9b6fdbe4db401565ffc2c9eac";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +city+ "&units=imperial" + "&appid=" +APIKey;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response)
      
      $('#cityName').text(response.name)
      var mainIcon = response.weather[0].icon
      var mainIconUrl = "http://openweathermap.org/img/wn/" + mainIcon + "@2x.png";
      $('#main-icon').attr('src', mainIconUrl)
      $('#temp').text("Temperature: " + response.main.temp + " °F")
      $('#humid').text("Humidity: " + response.main.humidity + "%")
      $('#wind').text("Wind Speed: " + response.wind.speed + " MPH")
      $('#uv').text("UV Index: " + response.main.temp)

      localStorage.setItem("CityName", response.name)
      localStorage.setItem("Humidity", response.main.humidity + "%")
      localStorage.setItem("windSpeed", response.wind.speed + " MPH")
      localStorage.setItem("UVIndex", response.main.temp)





      var citylat = response.coord.lat
      var citylon = response.coord.lon

      var uvURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + citylat + "&lon=" + citylon;
      
      $.ajax({
        url: uvURL,
        method: "GET"
      }).then(function(response) {
        console.log(response)

        $('#uv').text("UV Index: " + response.value)

      })

      var forecastURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial"+ "&appid=" + APIKey;

      var iconcode = response

      $.ajax({
        url: forecastURL,
        method: "GET"
      }).then(function(response) {

        
        
        
        
        
        console.log(response)
        $('.dayOne').text(response.list[6].dt_txt)
        var iconcodeone = response.list[6].weather[0].icon;
        var icononeurl = "http://openweathermap.org/img/wn/" + iconcodeone + "@2x.png";
        $('#firstIcon').attr('src', icononeurl)
        $('.temp').text("Temp: " + response.list[6].main.temp + " °F")
        $('.humid').text("Humidity: " + response.list[6].main.humidity + "%")

        localStorage.setItem("dayOne", response.list[6].dt_txt)
        localStorage.setItem("firstIcon", icononeurl)
        localStorage.setItem("temp1", response.list[6].main.temp + " °F")
        localStorage.setItem("humid1", response.list[6].main.humidity + "%")

        $('.dateTwo').text(response.list[14].dt_txt)
        // $('.iconTwo').text(response.list[10].weather[0].icon)
        var iconcodetwo = response.list[14].weather[0].icon;
        var icontwourl = "http://openweathermap.org/img/wn/" + iconcodetwo + "@2x.png";
        $('#secondIcon').attr('src', icontwourl)
        $('.tempTwo').text("Temp: " + response.list[14].main.temp + " °F")
        $('.humidTwo').text("Humidity: " + response.list[14].main.humidity + "%")

        localStorage.setItem("dayTwo", response.list[14].dt_txt)
        localStorage.setItem("secondIcon", icontwourl)
        localStorage.setItem("temp2", response.list[14].main.temp + " °F")
        localStorage.setItem("humid2", response.list[14].main.humidity + "%")

        $('.dateThree').text(response.list[22].dt_txt)
        // $('.iconThree').text(response.list[18].weather[0].icon)
        var iconcodethree = response.list[22].weather[0].icon;
        var iconthreeurl = "http://openweathermap.org/img/wn/" + iconcodethree + "@2x.png";
        $('#thirdIcon').attr('src', iconthreeurl)
        $('.tempThree').text("Temp: " + response.list[22].main.temp + " °F")
        $('.humidThree').text("Humidity: " + response.list[22].main.humidity + "%")

        localStorage.setItem("daythree", response.list[22].dt_txt)
        localStorage.setItem("thirdIcon", iconthreeurl)
        localStorage.setItem("temp3", response.list[22].main.temp + " °F")
        localStorage.setItem("humid3", response.list[22].main.humidity + "%")

        $('.dateFour').text(response.list[30].dt_txt)
        // $('.iconFour').text(response.list[26].weather[0].icon)
        var iconcodefour = response.list[30].weather[0].icon;
        var iconfoururl = "http://openweathermap.org/img/wn/" + iconcodefour + "@2x.png";
        $('#fourthIcon').attr('src', iconfoururl)
        $('.tempFour').text("Temp: " + response.list[30].main.temp + " °F")
        $('.humidFour').text("Humidity: " + response.list[30].main.humidity + "%")

        localStorage.setItem("dayFour", response.list[30].dt_txt)
        localStorage.setItem("fourthIcon", iconfoururl)
        localStorage.setItem("temp4", response.list[30].main.temp + " °F")
        localStorage.setItem("humid4", response.list[30].main.humidity + "%")

        $('.dateFive').text(response.list[38].dt_txt)
        // $('.iconFive').text(response.list[34].weather[0].icon)
        var iconcodefive = response.list[38].weather[0].icon;
        var iconfiveurl = "http://openweathermap.org/img/wn/" + iconcodefive + "@2x.png";
        $('#fifthIcon').attr('src', iconfiveurl)
        $('.tempFive').text("Temp: " + response.list[38].main.temp + " °F")
        $('.humidFive').text("Humidity: " + response.list[38].main.humidity + "%")

        localStorage.setItem("dayFive", response.list[38].dt_txt)
        localStorage.setItem("fifthIcon", iconfiveurl)
        localStorage.setItem("temp5", response.list[38].main.temp + " °F")
        localStorage.setItem("humid5", response.list[38].main.humidity + "%")

        
      })


    })

    
      
     
    
     
    

  }) 
  
 
  

})