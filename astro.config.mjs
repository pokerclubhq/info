// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt';

// https://astro.build/config
export default defineConfig({
	site: 'https://pokerclubhq.github.io',
	base: '/info',
	// The Permissions feature became Player Directory roles; keep old links working.
	redirects: { '/permissions': '/info/roles/' },
	integrations: [
		starlight({
			title: 'Poker Club HQ',
			// Plain-text copies of the English pages for AI assistants, at
			// /info/llms.txt, /info/llms-full.txt, and one file per custom set at
			// /info/_llms-txt/<slug>.txt. The AI pages link to the two sets.
			plugins: [
				starlightLlmsTxt({
					description:
						'Poker Club HQ is an app for running poker tournaments, on iPhone, iPad, Android, and the web: a timer screen you can lay out yourself, players and tables, payouts, bounties, alerts, stats, and cloud sync.',
					details: [
						'- Scripts in the app are written in EZScript, a small language of its own. It looks like JavaScript but is not JavaScript: read the Language reference before writing any.',
						'- Timer screen layouts are stored in exported tournament files (`.pchq`, which are JSON). The Layout file format page describes them.',
					].join('\n'),
					customSets: [
						{
							label: 'Scripting',
							description: 'everything needed to write EZScript for the app: the language, the tournament data scripts can read, examples, and content items',
							paths: ['scripting', 'scripting-language', 'scripting-data', 'scripting-examples', 'content'],
						},
						{
							label: 'Layouts',
							description: 'everything needed to design a timer screen layout in an exported tournament file: the file format, the layout editor, widgets, content items, and EZScript',
							paths: [
								'layout-file-format',
								'timer-display',
								'screen-contents',
								'widgets',
								'content',
								'scripting',
								'scripting-language',
								'scripting-data',
								'scripting-examples',
							],
						},
					],
					// The sets are built minified, which would drop notes and tips, and
					// several of those carry rules a script or a layout has to follow.
					// Collapsed whitespace would also run every table onto one line.
					minify: { note: false, tip: false, details: false, whitespace: false },
					// The references an AI needs most come first.
					promote: ['index*', 'layout-file-format', 'scripting', 'scripting-language'],
					// Each heading's anchor link would otherwise add a "Section titled …"
					// line under it.
					customSelectors: { all: ['.sl-anchor-link'] },
				}),
			],
			// English stays at the site root, so every existing /info/<page>/ URL
			// is unchanged. German lives under /info/de/. Pages missing from a
			// locale fall back to the English version automatically.
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				de: { label: 'Deutsch', lang: 'de' },
			},
			// German labels follow the app's own German UI wording (see
			// lib/translations.dart) so the sidebar matches what users see
			// on screen. "Chop" is a loanword in the app's German, as here.
			sidebar: [
				{
					label: 'Getting Started',
					translations: { de: 'Erste Schritte' },
					items: [
						{ label: 'Introduction', translations: { de: 'Einführung' }, slug: 'index' },
						{
							label: 'Coming from the old app',
							translations: { de: 'Umstieg von der alten App' },
							slug: 'old-app',
						},
						{
							label: 'Home screen & folders',
							translations: { de: 'Startbildschirm & Ordner' },
							slug: 'folders',
						},
						{
							label: 'Setting up a tournament',
							translations: { de: 'Turnier einrichten' },
							slug: 'setup',
						},
					],
				},
				{
					label: 'Running a Tournament',
					translations: { de: 'Turnier durchführen' },
					items: [
						{ label: 'Timer screen', translations: { de: 'Timer-Bildschirm' }, slug: 'timer' },
						{ label: 'Foldable phones', translations: { de: 'Faltbare Handys' }, slug: 'foldables' },
						{ label: 'Hand timer', translations: { de: 'Hand-Timer' }, slug: 'hand-timer' },
						{ label: 'Managing players', translations: { de: 'Spieler verwalten' }, slug: 'players' },
						{
							label: 'Player Directory',
							translations: { de: 'Spielerverzeichnis' },
							slug: 'player-directory',
						},
						{ label: 'Managing tables', translations: { de: 'Tische verwalten' }, slug: 'tables' },
					],
				},
				{
					label: 'Tournament Features',
					translations: { de: 'Turnier-Funktionen' },
					items: [
						{ label: 'Blind structure', translations: { de: 'Blind-Struktur' }, slug: 'blinds' },
						{ label: 'Payouts & chops', translations: { de: 'Auszahlungen & Chops' }, slug: 'payouts' },
						{ label: 'Bounties', translations: { de: 'Kopfgelder' }, slug: 'bounties' },
						{ label: 'Alerts', translations: { de: 'Warnungen' }, slug: 'alerts' },
						{ label: 'Tournament log', translations: { de: 'Turnier-Protokoll' }, slug: 'log' },
						{ label: 'Stats & reporting', translations: { de: 'Statistiken & Berichte' }, slug: 'stats' },
						{ label: 'Club stats', translations: { de: 'Club-Statistiken' }, slug: 'club-stats' },
						{ label: 'Replay', translations: { de: 'Wiederholen' }, slug: 'replay' },
						{ label: 'Simulate', translations: { de: 'Simulieren' }, slug: 'simulate' },
					],
				},
				{
					label: 'Customization',
					translations: { de: 'Anpassung' },
					items: [
						{ label: 'Timer display', translations: { de: 'Timer-Anzeige' }, slug: 'timer-display' },
						{
							label: 'Layout & content',
							translations: { de: 'Layout & Inhalt' },
							slug: 'screen-contents',
						},
						{ label: 'Widgets', translations: { de: 'Widgets' }, slug: 'widgets' },
						{ label: 'Content', translations: { de: 'Inhalt' }, slug: 'content' },
						{ label: 'Layouts with AI', translations: { de: 'Layouts mit KI' }, slug: 'layouts-with-ai' },
						{
							label: 'Layout file format',
							translations: { de: 'Layout-Dateiformat' },
							slug: 'layout-file-format',
						},
						{ label: 'Chip sets', translations: { de: 'Chip-Sets' }, slug: 'chips' },
					],
				},
				{
					label: 'Scripting',
					translations: { de: 'Skripte' },
					items: [
						{ label: 'Scripting overview', translations: { de: 'Skripte im Überblick' }, slug: 'scripting' },
						{
							label: 'Language reference',
							translations: { de: 'Sprachreferenz' },
							slug: 'scripting-language',
						},
						{ label: 'Tournament data', translations: { de: 'Turnierdaten' }, slug: 'scripting-data' },
						{ label: 'Examples', translations: { de: 'Beispiele' }, slug: 'scripting-examples' },
						{ label: 'Scripts with AI', translations: { de: 'Skripte mit KI' }, slug: 'scripts-with-ai' },
					],
				},
				{
					label: 'Account & Sync',
					translations: { de: 'Konto & Synchronisierung' },
					items: [
						{ label: 'Cloud sync & accounts', translations: { de: 'Cloud-Sync & Konten' }, slug: 'cloud' },
						{ label: 'Purchases & plans', translations: { de: 'Käufe & Tarife' }, slug: 'purchases' },
						{ label: 'QR code sharing', translations: { de: 'Teilen per QR-Code' }, slug: 'qr-sharing' },
						{
							label: 'Player profile updates',
							translations: { de: 'Spielerprofil-Updates' },
							slug: 'player-updates',
						},
						{
							label: 'Roles & shared control',
							translations: { de: 'Rollen & geteilte Steuerung' },
							slug: 'roles',
						},
					],
				},
				{
					label: 'Reference',
					translations: { de: 'Referenz' },
					items: [
						{ label: 'FAQ', translations: { de: 'FAQ' }, slug: 'faq' },
						{ label: 'Trash & restore', translations: { de: 'Papierkorb & Wiederherstellen' }, slug: 'trash' },
						{ label: 'Feedback & roadmap', translations: { de: 'Feedback & Roadmap' }, slug: 'feedback' },
					],
				},
			],
		}),
	],
});
