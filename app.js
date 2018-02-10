const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather.js');

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

// Address API Call
geocode.geocodeAddress(argv.a, (errorMessage, results)=>{
    if(errorMessage){
        console.log(errorMessage);
    }else{
        //console.log(JSON.stringify(results, undefined, 2));
        console.log(results.address);
        // Weather API Call
        weather.getWeather(results.latitude,results.longitude, (errorMessage, weatherResults)=>{
            if(errorMessage){
                console.log(errorMessage);
            }else{
                console.log(JSON.stringify(weatherResults, undefined, 2));
                console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`);
            }
        });
    }
});







