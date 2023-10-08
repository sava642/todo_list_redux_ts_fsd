

module.exports = function override(config, env) {
	config.resolve.alias['scss-loader'] = require.resolve('scss-loader');
	return config;
};
const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
	alias({
		'@app': 'src/app',
		'@providers': 'src/app/providers',
		'@features': 'src/features',
	})(config);

	return config;
};