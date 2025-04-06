import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltePreprocess } from 'svelte-preprocess';

const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex(),
		sveltePreprocess({
			postcss: {
				plugins: {
					autoprefixer: {}
				}
			}
		})
	],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.svx']
};

export default config;
