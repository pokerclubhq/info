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
							label: 'Screen contents',
							translations: { de: 'Bildschirm-Inhalte' },
							slug: 'screen-contents',
						},
						{ label: 'Widgets', translations: { de: 'Widgets' }, slug: 'widgets' },
						{ label: 'Content', translations: { de: 'Inhalt' }, slug: 'content' },
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
