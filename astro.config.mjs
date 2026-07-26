// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://pokerclubhq.github.io',
	base: '/info',
	// The Permissions feature became Player Directory roles; keep old links working.
	redirects: { '/permissions': '/info/roles/' },
	integrations: [
		starlight({
			title: 'Poker Club HQ',
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'index' },
						{ label: 'Home screen & folders', slug: 'folders' },
						{ label: 'Setting up a tournament', slug: 'setup' },
					],
				},
				{
					label: 'Running a Tournament',
					items: [
						{ label: 'Timer screen', slug: 'timer' },
						{ label: 'Hand timer', slug: 'hand-timer' },
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
						{ label: 'Screen contents', slug: 'screen-contents' },
						{ label: 'Widgets', slug: 'widgets' },
						{ label: 'Content', slug: 'content' },
						{ label: 'Chip sets', slug: 'chips' },
					],
				},
				{
					label: 'Scripting',
					items: [
						{ label: 'Scripting overview', slug: 'scripting' },
						{ label: 'Language reference', slug: 'scripting-language' },
						{ label: 'Tournament data', slug: 'scripting-data' },
						{ label: 'Examples', slug: 'scripting-examples' },
					],
				},
				{
					label: 'Account & Sync',
					items: [
						{ label: 'Cloud sync & accounts', slug: 'cloud' },
						{ label: 'Purchases & plans', slug: 'purchases' },
						{ label: 'QR code sharing', slug: 'qr-sharing' },
						{ label: 'Player profile updates', slug: 'player-updates' },
						{ label: 'Roles & shared control', slug: 'roles' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'FAQ', slug: 'faq' },
						{ label: 'Trash & restore', slug: 'trash' },
						{ label: 'Feedback & roadmap', slug: 'feedback' },
					],
				},
			],
		}),
	],
});
