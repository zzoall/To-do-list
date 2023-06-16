const API_KEY ="ea17c8c1297c29980e2bdef94ce5dc2b";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}$units=metric`;
    // Get the url
    fetch(url);
}
function onGeoError() {
    alert("can't find you.");
}


// user 위치를 알려주는 함수
// arguments는  순서대로 성공, 에러가 났을 때
 navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
 