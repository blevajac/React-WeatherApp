//kada se koristi Webpack svaki file se ponaša indipendno te ga je potrebno importirati explicitno
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import 'script!foundation-sites';

/*
Jednostavniji naćin pisanja. Gore es16, dole es15
var Route = require('react-router').Route;
var Router = require('react-router').Router;
... za sve ostale 4 bi se ovako morale napisati
*/

//componente
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//Load foundation
$(document).foundation();
require('style!css!foundation-sites/dist/foundation.min.css')


//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About} />
            <Route path="examples" component={Examples} />
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
