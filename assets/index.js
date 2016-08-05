require('./index.scss');

var $ = require('jquery');

$('div').fadeOut(2000, () => {
	$('div').fadeIn(2000);
})