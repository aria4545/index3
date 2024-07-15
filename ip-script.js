const getlocation = () => {
    // get the user location with ip address
    fetch("https://ipapi.co/json")
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            const des = document.querySelector("p");
            des.innerHTML = 'Latitude: ' + data.latitude + ' Longitude: ' + data.longitude;
         });
};