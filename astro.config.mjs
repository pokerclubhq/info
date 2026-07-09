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
						{ label: 'Introduction', slug: 'index' },
						{ label: 'Setting up a tournament', slug: 'setup' },
					],
				},
				{
					label: 'Running a Tournament',
					items: [
						{ label: 'Timer screen', slug: 'timer' },
						{ label: 'Managing players', slug: 'players' },
					{ label: 'Player Directory', slug: 'player-directory' },
						{ label: 'Managing tables', slug: 'tables' },
					],
				},
				{
					label: 'Tournament Features',
					items: [
						{ label: 'Blind structure', slug: 'blinds' },
						{ label: 'Payouts & chops', slug: 'payouts' },
						{ label: 'Bounties', slug: 'bounties' },
						{ label: 'Alerts', slug: 'alerts' },
						{ label: 'Tournament log', slug: 'log' },
						{ label: 'Stats & reporting', slug: 'stats' },
						{ label: 'Club stats', slug: 'club-stats' },
						{ label: 'Replay', slug: 'replay' },
						{ label: 'Simulate', slug: 'simulate' },
					],
				},
				{
					label: 'Customization',
					items: [
						{ label: 'Timer display', slug: 'timer-display' },
						{ label: 'Chip sets', slug: 'chips' },
					],
				},
				{
					label: 'Account & Sync',
					items: [
						{ label: 'Cloud sync & accounts', slug: 'cloud' },
						{ label: 'QR code sharing', slug: 'qr-sharing' },
						{ label: 'Sharing with co-editors', slug: 'permissions' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'FAQ', slug: 'faq' },
						{ label: 'Feedback & roadmap', slug: 'feedback' },
					],
				},
			],
		}),
	],
});
