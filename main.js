const search_box = document.querySelector(".search-box");

const search_button = document.querySelector(".search-button");

const city_name = document.querySelector(".city");

const temp_value = document.querySelector(".temp");

const icon_value = document.querySelector(".icon");

const description_value = document.querySelector(".description");

const humidity_value = document.querySelector(".humidity");

const wind_value= document.querySelector(".wind");



const country_value= document.querySelector(".country");




let weather = {
    apikey : "32c00f94785b9955d05d2f292fb16843",

    fetchweather : function(city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apikey}`)
        .then(response => response.json())
        .then(data =>{
            console.log(data)
            this.displayWeather(data)
        })
       .catch(function(error){
        alert("No Place Found")
       })

    },

    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed } = data.wind;
        const {country} = data.sys;
        

    
        city_name.innerText = "Weather in "+ name
        temp_value.innerText = Math.floor(temp) + "°C";
        humidity_value.innerText = "Humidity:   "+   humidity +"   %";
        wind_value.innerText = "Wind:   "+ speed +" Km/h";
        description_value.innerText = description;
        country_value.innerText = country;

        let a="celsius"
        temp_value.addEventListener('click',function(){
            
            
        if(a=="celsius"){
            temp_value.innerText = Math.floor(temp) + "°C";
            a="farhenite"
        }
        else{
            temp_value.innerHTML = Math.floor((temp*9/5)+32)+ "°F"
            a="celsius"
        }

        })
        

        console.log(icon)
        icon_value.src= "icons/"+icon+".png";
        // `<img src="icons/${icon}.png"/>`
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+description+"/"+name+"')"
        console.log(icon_value)
        console.log(name, icon, description, temp, humidity,speed, country)
    },
    search: function(){
        this.fetchweather(search_box.value);
    }
};


search_button.addEventListener('click',function(){
    weather.search();
});

search_box.addEventListener('keyup', function(event){
    if(event.key == "Enter"){
        weather.search(); 
    }
})





weather.fetchweather("kathmandu");