// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://pokerclubhq.github.io',
	base: '/info',
	integrations: [
		starlight({
			title: 'Poker Club HQ',
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Poker Club HQ Introduction', slug: 'index' },
						{ label: 'Setting up a tournament', slug: 'setup' },
					],
				},
			],
		}),
	],
});
