var React = require('react');

/*  Normalni oblik
var About = React.createClass({
  render: function () {
    return (
        <h3>O Komponentima</h3>
    )
  }
});
*/

//Statels funkcionalni komponent (SFK)
//jednostavni prezentacijski komponent koji ne obrađuje states (ima samo rander) nego samo prikazuje može se koristiti "Stateles funkcionalni komponent"
//SFK izgled
var About = (props) => {
  return (
    <div>
        <h1 className="text-center page-title">O Aplikaciji</h1>
        <p>
            Ovo je jednostavna React Web Aplikacija napravljena za "The CompleteReact Web App  Developer Course"
        </p>
        <p>
            Neke id alata korišteni za ovu aplikaciju!!!
        </p>
        <ul>
            <li>
                <a href="https://facebook.github.io/react">React</a> - Korišten JS Framework
            </li>
            <li>
                <a href="http://openweathermap.org">Open Weather Map</a> - Koristio Open Weather Map kako bi tražio vrijeme za upisani grad
            </li>
            <li>
                <a href='http://www.freepik.com/free-vector/colorful-weather-icons-pack_755311.htm'>Designed by Freepik</a>
            </li>
        </ul>
    </div>

  )
};

module.exports = About;
