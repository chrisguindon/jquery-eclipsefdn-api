module.exports = function( config ) {

	config.set( {
		files: [
			"node_modules/jquery/jquery.js",
			"dist/jquery.eclipsefdn-api.js",
			"test/setup.js",
			"test/spec/*"
		],
		frameworks: [ "qunit" ],
		autoWatch: true
	} );
};
