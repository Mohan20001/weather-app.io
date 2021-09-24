const APIkey = "34fab22dcd8c7957c5ca383cfa668e4e";
let x;
let y;
let z;
let url;


getDATA();

let btn= document.querySelector('.btn');
let inputText= document.querySelector('input[type=search]');
let placeName= document.querySelector('.place-name');
let a= document.querySelector('.lat');
let b= document.querySelector('.lon');
let temparature= document.querySelector('.dec');
let cloud= document.querySelector('.cloud-description');
let img= document.querySelector('.img');

btn.addEventListener('click',()=>{
  let city=inputText.value;
   url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=34fab22dcd8c7957c5ca383cfa668e4e`;

  getDATA(url);
});

function getDATA(userURL=`https://api.openweathermap.org/data/2.5/weather?q=london&appid=34fab22dcd8c7957c5ca383cfa668e4e`) {

function showPosition(position) {
  
  x=position.coords.latitude;
  y=position.coords.longitude;
  
    fetch(userURL)
    .then(response => response.json())
    .then(data => {
      
 placeName.innerHTML=data.name; 
 a.innerHTML=data.coord.lat;
b.innerHTML=data.coord.lon;
temparature.innerHTML=heatConvert(data.main.temp);
cloud.innerHTML=data.weather[0].description;
z=heatConvert(data.main.temp);

if (z <= 20) {
  img.setAttribute('src','imgaes/rainy.png');
} else if(z <= 26) {
  img.setAttribute('src','imgaes/cloudy.png');
}else{
  img.setAttribute('src','imgaes/sunny.png');
}


}).catch(()=>{
  console.log("something went wrong");
});
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function heatConvert(k) {
  let cel =Math.floor( k-273.15);
  return cel;
}

getLocation();

}
