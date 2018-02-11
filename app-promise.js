const yargs = require('yargs');
const axios = require('axios');
// Loading constant file
const constants = require('./constants');
const argv = yargs
    .options({
        a:{
            demand:true,
            alias:'address',
            describe:'Enter an Address to fetch weather',
            string: true,
            default: '2345 Collins, TX'
        },
        u:{
            demand:false,
            alias:'unit',
            describe:'Enter Unit C or F',
            string: true,
            default: 'C'
        }
    })
    .help()
    .alias('help','h')
    .argv;

const degreeSymbol = String.fromCharCode(176);
var encodedAddress = encodeURIComponent(argv.address);
var temperatureUnit = argv.u;
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${constants.googleApiKey}`;

//Promise Chaining using axios API
axios.get(geocodeUrl).then((response)=>{
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find that Address');
    }
    //console.log(response.data.results[0].address_components);
    var city = response.data.results[0].address_components.length > 4?(response.data.results[0].address_components[3].long_name):
        (response.data.results[0].address_components[0].long_name);

    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherURL = `https://api.darksky.net/forecast/${constants.darkSkyApiKey}/${lat},${lng}`;
    //console.log(response.data.results[0].formatted_address);
    console.log('Right now in ',city);

    return axios.get(weatherURL);
}).then((response)=>{
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    var temperatureMin = response.data.daily.data[0].temperatureMin;
    var temperatureMax = response.data.daily.data[0].temperatureMax;

    if(temperatureUnit === 'C'){
        console.log(`It is ${convertToCelsius(temperature)} ${degreeSymbol}C and It feels like ${convertToCelsius(apparentTemperature)} ${degreeSymbol}C.`);
        console.log(`You can expect a high of ${convertToCelsius(temperatureMax)} ${degreeSymbol}C  and a low of ${convertToCelsius(temperatureMin)} ${degreeSymbol}C.`);
    }else{
        console.log(`It is ${temperature} ${degreeSymbol}F and It feels like ${apparentTemperature} ${degreeSymbol}F.`);
        console.log(`You can expect a high of ${temperatureMax} ${degreeSymbol}F  and a low of ${temperatureMin} ${degreeSymbol}F.`);
    }
    console.log(`Moreover it's going to be`,response.data.daily.summary);
}).catch((e)=>{
    if(e.code === 'ENOTFOUND' || e.code === 'ECONNREFUSED'){
        console.log('Unable to Connect to API Servers');
    }else{
        console.log(e.message);
    }
});

const convertToCelsius = (temperature)=>{
    debugger
    var tempInCelcius = (temperature -32) * 5 / 9;
    return Math.round(tempInCelcius);
}