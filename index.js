const url = 'https://community-open-weather-map.p.rapidapi.com/weather?'
const params = {
  q:"Kolkata",
  units:"metric",
  return:function(){
    return `q=${this.q}&units=${this.units}`;
  }
}

let s
const input = document.querySelector(".searchBox")
const btn = document.querySelector(".search-btn")
const body = document.querySelector(".body")
btn.addEventListener('click',async ()=>{
  if(input.value!==""){
    params.q=input.value;
    let res = await fetch(url+params.return(), options)
    let data = await res.json()
    console.log(data)
    
    let temp = document.createElement("span")
    let cel = document.createElement("span")
    cel.textContent=" °C"
    s=data.main.temp
    s=s.toString().slice(0,2)
    temp.textContent=s
    temp.classList.add("temp")
    cel.classList.add("cel")
    let img = document.createElement("img")
    if(data.weather[0].main=="Haze"){
      img.src="./assests/icons/cloudy.png"
    }
    body.appendChild(temp)
    body.appendChild(cel)
    body.appendChild(img)
  }
  
  
})

const res = {
  "coord": {
    "lon": 88.3697,
    "lat": 22.5697
  },
  "weather": [
    {
      "id": 721,
      "main": "Haze",
      "description": "haze",
      "icon": "50n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 29.97,
    "feels_like": 36.97,
    "temp_min": 29.97,
    "temp_max": 31.69,
    "pressure": 1002,
    "humidity": 79
  },
  "visibility": 3500,
  "wind": {
    "speed": 4.12,
    "deg": 180
  },
  "clouds": {
    "all": 40
  },
  "dt": 1658332067,
  "sys": {
    "type": 1,
    "id": 9114,
    "country": "IN",
    "sunrise": 1658273555,
    "sunset": 1658321564
  },
  "timezone": 19800,
  "id": 1275004,
  "name": "Kolkata",
  "cod": 200
}

// https://community-open-weather-map.p.rapidapi.com/weather?q=Kolkata&units=metric
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ecca5138c5mshcc35d024dcf0f67p12a965jsn311cffb7a5ab',
    'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
  }
};
// console.log(url+params.return())
// fetch(url+params.return(), options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));