var React = require('react');

/*
var WeatherMessage = React.createClass({
  render: function () {
    var {temp, location} = this.props;
    return (
      <h3>Trenutna temperatura u {location} je: {temp}</h3>
    );
  }
});
*/

//es6 Destructining se može korstiti unutar argumenata (props)
var WeatherMessage = ({temp, location}) => {
    //var {temp, location} = props;
    return (
      <h3 className="text-center">Trenutna temperatura u {location} je: {temp}C</h3>
    );
};

module.exports = WeatherMessage;
