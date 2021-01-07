import * as Comlink from 'comlink';
import axios from 'axios';

const dataSources = ['tcgplayer', 'trollandtoad', 'ebay', 'fabdb'];

const AppWorker = {
	pi: () => Math.PI,
	fetch: (...args) => {
		console.log({ args });
		return fetch(...args);
	},
	search: async (searchTerm) => {
		const responses = await Promise.all(
			dataSources.map(async (e) => {
				try {
					const { data } = await axios.get(`/api/${e}?search=${searchTerm}`);
					return data;
				} catch (e) {
					return [];
				}
			})
		);
		const results = responses
			.reduce((a, e) => a.concat(e), [])
			.sort((a, b) => parseFloat(b.price.match(/[\d\.]+/)) - parseFloat(a.price.match(/[\d\.]+/)));

		return results;
	},
	sort: (items) => {
		return items.sort(
			(a, b) => parseFloat(b.price.match(/[\d\.]+/)) - parseFloat(a.price.match(/[\d\.]+/))
		);
	},
};

Comlink.expose(AppWorker);
