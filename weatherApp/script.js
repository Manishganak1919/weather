const timeEL =document.getElementById('time');
const dateEL =document.getElementById('date');
const currentweatheritemsEL =document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEL =document.getElementById('country');
const weatherforcasteEL =document.getElementById('weather-forecast');
const currentTempEL=document.getElementById('current-temp');
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','oct','Nov','Dec'];

const API_KEY='83dfa4668c685659fb8fcf8834911471';
setInterval(() => {
  const time=new Date();
  const month=time.getMonth();
  const date=time.getDate();
  const day=time.getDate();
  const hour=time.getHours();
  const hoursIn12HrFormat=hour >=13 ? hour%12: hour
  const minutes=time.getMinutes();
  const ampm = hour >= 12 ?' PM': 'AM'

  timeEL.innerHTML = hoursIn12HrFormat + ':' +minutes+' '+'<span id="am-pm">${am-pm} </span>'
  dateEL.innerHTML = days[day] +', ' +date+' ' +months[month]
}, 1000);
getweatherData();
function getweatherData () {
 navigator.geolocation.getCurrentPosition((success)=>{
  console.log(success);
  let {latitude, longitude} = success.coords;

  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res =>res.json()).then(data=>{
    console.log(data);
    showweatherData(data);
  })
 })}

 function showweatherData(data){
   let {humidity, pressur, sunrise, sunset, wind_speed} = data.current;
   currentweatheritemsEL.innerHTML = 
   `<div class="weather-items">
   <div>Humidity</div>
   <div>${humidity}%</div>
 </div>
 <div class="weather-items">
   <div>${Pressure}</div>
   <div>121</div>
 </div>
 <div class="weather-items">
   <div>${wind_speed }</div>
   <div>222</div>
 </div>`;
 }
