var Fuser = require('../Fuser');
var _ = require('lodash');

var fuser = new Fuser( _.assign( {
	entities: {
		appName: 'DemoApp',
		serviceName: 'DemoMicroService'
	}
}, require('./config') ) );

fuser.start( function(){
	console.log('Started.');

	setTimeout(function(){
		fuser.stop( function(){
			console.log('Closed.');
		} );
	}, 1500);
} );
