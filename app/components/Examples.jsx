var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Primjeri</h1>
      <p>Ovdje se nalazi par primjernih lokacija za isprobati!</p>
      <ol>
          <li>
              <Link to='/?location=Zagreb'>Zagreb, CRO</Link>
          </li>
          <li>
              <Link to='/?location=Beć'>Beć, Austrija</Link>
          </li>
      </ol>
    </div>

  )
};

module.exports = Examples;

/*
var Examples = React.createClass({
  render: function () {
    return (
      <h3>Primjeri komponenta</h3>
    )
  }
});
*/
