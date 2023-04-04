import {
	faCoins,
	faMoneyBills,
	faCreditCard,
} from '@fortawesome/free-solid-svg-icons';
import { discord, github, linkedin, banner } from '../assets';

const meta = {
	description: '',
	title: 'ToDanni Finance Planner',
	image: 'https://imgur.com/NAeYmRI',
};

const day = 1000 * 60 * 60 * 24;

const navLinks = [
	{
		id: 'home',
		title: 'Home',
	},
	{
		id: 'budget',
		title: 'Budget',
	},
	{
		id: 'plan',
		title: 'Plan',
	},
	{
		id: 'blog',
		title: 'Blog',
	},
	{
		id: 'about',
		title: 'About',
	},
];

const features = [
	{
		id: 'feature-1',
		icon: faCoins,
		title: 'Spending and budgeting',
		content:
			'Calculate your minimum monthly outgoings and set budgets to help you save up',
	},
	{
		id: 'feature-2',
		icon: faCreditCard,
		title: 'Debt management',
		content:
			'View how much interest you are paying and how you can reduce that amount',
	},
	{
		id: 'feature-3',
		icon: faMoneyBills,
		title: 'Income estimate',
		content:
			'Estimate what you net income will be and see how you can save on taxes',
	},
];

const socialMedia = [
	{
		id: 'social-media-1',
		icon: github,
		link: 'https://github.com/todanni',
	},
	{
		id: 'social-media-2',
		icon: linkedin,
		link: 'https://www.linkedin.com/in/danni-popova/',
	},
	{
		id: 'social-media-3',
		icon: discord,
		link: 'https://discord.gg/Q7yU6zqBcG',
	},
];

const footerLinks = [
	{
		title: 'About',
		links: [
			{
				name: 'About ToDanni',
				link: '/about',
			},
			{
				name: 'Blog',
				link: '/blog',
			},
			{
				name: 'Releases',
				link: '/releases',
			},
		],
	},
	{
		title: 'Community',
		links: [
			{
				name: 'Chat on Discord',
				link: 'https://discord.gg/Q7yU6zqBcG',
			},
			{
				name: 'Contributors',
				link: '/blog',
			},
		],
	},
	{
		title: 'Project',
		links: [
			{
				name: 'View on Github',
				link: 'https://github.com/todanni',
			},

			{
				name: 'Read the dev blog',
				link: 'https://blog.todanni.com/',
			},
		],
	},
];

export { footerLinks, socialMedia, navLinks, features, meta, day };
