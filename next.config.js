const withPwa = require('next-pwa');
const withWorkers = require('@zeit/next-workers');
const path = require('path');

const nextConfig = {
	experimental: {
		reactMode: 'concurrent',
	},
	reactStrictMode: false,
	pwa: {
		disable: false,
		register: true,
		dest: 'public',
	},
	workerLoaderOptions: {},
};

module.exports = withWorkers({
	...nextConfig,
	webpack(config, { dev }) {
		if (dev) {
			config.devtool = 'cheap-module-source-map';
		}

		config.resolve.alias = {
			...config.resolve.alias,
			'app-components': path.resolve(__dirname, 'components'),
			'app-configs': path.resolve(__dirname, './configs'),
			'app-consts': path.resolve(__dirname, './consts'),
			'app-icons': path.resolve(__dirname, './icons'),
			'app-layouts': path.resolve(__dirname, './layouts'),
			'app-modules': path.resolve(__dirname, './modules'),
			'app-mutations': path.resolve(__dirname, './mutations'),
			'app-styles': path.resolve(__dirname, './styles'),
			'app-utils': path.resolve(__dirname, './utils'),
		};

		return config;
	},
});
