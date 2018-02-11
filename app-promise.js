const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a:{
            demand:true,
            alias:'address',
            describe:'Enter an Address to fetch weather',
            string: true
        }
    })
    .help()
    .alias('help','h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyB6rf_htVXIJ4ku7VqX0-MIDo9fqngW1jk`;

//Promise Chaining using axios API
axios.get(geocodeUrl).then((response)=>{
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find that Address');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherURL = `https://api.darksky.net/forecast/9a74ae19609d480ea6806261d208045f/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL);
}).then((response)=>{
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);
}).catch((e)=>{
    if(e.code === 'ENOTFOUND' || e.code === 'ECONNREFUSED'){
        console.log('Unable to Connect to API Servers');
    }else{
        console.log(e.message);
    }
});