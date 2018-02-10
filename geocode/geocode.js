const request = require('request');

var geocodeAddress = (address) =>{

    var encodedAddress = encodeURIComponent(address);

// Creating a request to fetch the latitude and longitude from the address
    request({
        url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyB6rf_htVXIJ4ku7VqX0-MIDo9fqngW1jk`,
        json : true
    }, (error, response, body) => {
        if(error){
            console.log('Unable to connect to Weather Services');
        }
        // Based on response for invalid address
        else if(body.status === 'ZERO_RESULTS'){
            console.log('Unable to find that address');
        }
        else if(body.status === 'OK') {
            console.log(`Address: ${body.results[0].formatted_address}`);
            console.log(`Latitude: ${body.results[0].geometry.location.lat} `);
            console.log(`Longitude: ${body.results[0].geometry.location.lng};`);}
    });

}

module.exports = {
    geocodeAddress
};


