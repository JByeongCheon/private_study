const LOCATION = 'location'

function saveCoords(coordsOBJ){
    localStorage.setItem(LOCATION,JSON.stringify(coordsOBJ))
}


function handSuccess(position){
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsOBJ = {
        latitude, 
        longitude //이건 latitude:latitude와 같다
    }; 

    saveCoords(coordsOBJ);
}

function askLocation(){
    if(navigator.geolocation){
        
        navigator.geolocation.getCurrentPosition(handSuccess);
     
    } else{
        console.log('Error')
    }
}

function LOADLOCATION(){
    const loadedCords = localStorage.getItem(LOCATION);
    if(loadedCords === null){
        askLocation();

    } else{


    }
}

function init(){
    LOADLOCATION()
     
}


init()