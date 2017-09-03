var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    //dohvaća vrijednost u inputu
    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function () {
    return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="search" ref="location" placeholder="Pogledajte temp. u gradu"/>
            <button className="button expanded hollow">Dohvati vrijeme</button>
          </form>
        </div>
    );
  }
});

module.exports = WeatherForm;
