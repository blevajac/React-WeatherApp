var webpack = require('webpack');

//Exportira objekt koji webpack može kofigunirati
module.exports = {
  //di da zapoćene obrađivati kod
    entry: [
      'script!jquery/dist/jquery.min.js',
      'script!foundation-sites/dist/js/foundation.min.js',
      './app/app.jsx'
    ],
    externals: {
      jquery: 'jQuery'
    },
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery'
      })
    ],
  //specificira output
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
  //__dirname postavlja default put za naši file
      root: __dirname,
      alias: {
          Main: 'app/components/Main.jsx',
          Nav: 'app/components/Nav.jsx',
          Weather: 'app/components/Weather.jsx',
          WeatherForm: 'app/components/WeatherForm.jsx',
          WeatherMessage: 'app/components/WeatherMessage.jsx',
          About: 'app/components/About.jsx',
          Examples: 'app/components/Examples.jsx',
          openWeatherMap: 'app/api/openWeatherMap.jsx',
          ErrorModal: 'app/components/ErrorModal.jsx',
          applicationStyles: 'app/styles/app.scss'
      },
  //polje lista file extenzija koje se budu obrađivale
      extensions: ['', '.js', '.jsx']
    },
    module: {
      loaders: [
        {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015','stage-0'],
            //za grešku u webpacku postavi compact: false
            //http://stackoverflow.com/questions/29576341/what-does-the-code-generator-has-deoptimised-the-styling-of-some-file-as-it-e
            compact: false
          },
          test: /\.jsx?$/,
          exclude: /(node_modules | bower_components)/
        }
      ]
    },
    devtool: 'inline-source-map'
};
