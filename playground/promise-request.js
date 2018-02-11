const request = require('request');

var geocodeAddress = (address) =>{
    return new Promise((resolve,reject)=>{
        var encodedAddress = encodeURIComponent(address);

        // Creating a request to fetch the latitude and longitude from the address
        request({
            url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyB6rf_htVXIJ4ku7VqX0-MIDo9fqngW1jk`,
            json : true
        }, (error, response, body) => {
            if(error){
                reject('Unable to connect to Weather Services');
            }
            // Based on response for invalid address
            else if(body.status === 'ZERO_RESULTS'){
                reject('Unable to find that address');
            }
            else if(body.status === 'OK') {
                // Returning response in promise resolve
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    })
};

geocodeAddress('60012').then((location)=>{
    console.log(JSON.stringify(location,undefined,2));
},(errorMessage)=>{
    console.log(errorMessage);
});