var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=3b52b5e517d31993457f27eb7e7698c6&units=metric';
const OPEN_WEATHER_MAP_URL_5DAY_FORECAST = 'http://api.openweathermap.org/data/2.5/forecast?appid=3b52b5e517d31993457f27eb7e7698c6&units=metric';
//3b52b5e517d31993457f27eb7e7698c6 - api key
//http://api.openweathermap.org/data/2.5/weather?q=Zagreb&units=metric&appid=3b52b5e517d31993457f27eb7e7698c6 - Zagreb lokacija


module.exports = {
  getTemp: function (location) {
        //uzima obićni string i encoda ga za browser
        var encodedLocation = encodeURIComponent(location);
        //es6 - Template strings ``  = pojednostavlja sastavljanje stringova za korištenje na webu
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        var requestUrlForcast = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        //axios.get uzima url  i odalazi i dohvaća rezultat. On koristi princip "Promeses"
        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
            //greška dolazi odavdje kada treba javiti grešku za ne pronađeni grad -
            //moguće vratiti npm axios na stariju verziju ili preraditi za novu...
        }, function (res) {
            throw new Error(res.data.message);
        });
  }
}

//const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=imperial';
