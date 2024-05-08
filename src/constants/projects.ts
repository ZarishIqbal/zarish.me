import { StaticImageData } from 'next/image'
import freqncy from '../assets/freqncy.png'
import gy from '../assets/gifting-you-logo.png'
import ilmx from '../assets/ilmx.png'
import mis from '../assets/mischool.ico'
import novoapka from '../assets/novo.webp'
import runmatch from '../assets/runmatch.png'
import scienceBowl from '../assets/science-bowl.svg'
import shodriver from '../assets/shodriver.svg'
import surveysays from '../assets/surveysays.png'
import syncup from '../assets/syncup.png'
import uva from '../assets/uva-logo.png'

type ProjectDetails = {
	[name: string]: {
		link?: string
		imgSrc: StaticImageData
		heading: string
		typeTags: string[]
		description: string
		tags: string[]
		imgHeight?: number
		imgWidth?: number
		bg?: string
	}
}
export const projectDetails: ProjectDetails = {
	survey: {
		link: 'https://www.surveysays.xyz/',
		imgSrc: surveysays,
		heading: 'SurveySays',
		typeTags: ['ReactJS', 'NodeJS'],

		description:
			'A tool for creating and sharing surveys. It is a full stack application with ReactJS at frontend and NodeJS at backend. ',
		tags: ['react js', 'typescript', 'aws', 'stripe'],
		imgHeight: 30,
		imgWidth: 200
	},
	frq: {
		link: 'https://freqncy.co/',
		imgSrc: freqncy,
		heading: 'Freqncy.co',
		typeTags: ['ReactJS', 'firebase', 'cloud function'],

		description: 'A financial statistical engine— a tool inspired by forensic accountants.',
		tags: ['react js', 'typescript', 'firebase', 'gcp'],
		// imgHeight: 0,
		imgWidth: 150
	},
	sy: {
		imgSrc: syncup,
		heading: 'SyncUp',
		typeTags: ['ios', 'android'],

		description:
			'A mobile application used for tracking the menstrual cycle and showing the predictions about the cycle.',
		tags: ['react native', 'typescript', 'mobx-state-tree'],
		// imgHeight: 0,
		imgWidth: 120
	},
	shodriver: {
		link: 'https://shodriver.com',
		imgSrc: shodriver,
		heading: 'Shodriver',
		typeTags: ['web', 'pwa'],
		description:
			"An Online service book for managing all of users' vehicle maintenance and repairs. With Shodriver, users can easily book service appointments, track vehicle's service history, and receive reminders for upcoming maintenance.",
		tags: ['reactjs', 'material UI'],
		imgWidth: 100,
		bg: 'bg-white'
	},
	uva: {
		link: 'https://uva.sa',
		imgSrc: uva,
		heading: 'UVA',
		typeTags: ['web', 'admin panel'],
		description:
			'UVA is an app-based e-hailing service. It is based in Dammam, Saudi Arabia, with operations in UK and Egypt as well. The dashboard is built using Angular and node at backend.',
		tags: ['angular', 'node', 'mySQL'],
		imgHeight: 120,
		imgWidth: 350
	},
	gy: {
		imgSrc: gy,
		heading: 'Gifting You',
		typeTags: ['web', 'ios', 'android'],

		description:
			'Gifting you is a social platform for users to request and receive gifts. The website was built using ReactJS with Typescript and TailwindCSS. Whereas, the mobile application was serverless application with firebase function integrated.',
		tags: ['reactjs', 'react native', 'typescript', 'firebase']
	},
	mis: {
		imgSrc: mis,
		heading: 'MISchool',
		typeTags: ['web', 'pwa'],
		description:
			'MISchool is a management software system for schools. MISchool enables school to collect, organize, and store records giving your school full control of all academic, finance, wellbeing, and administrative information.',
		tags: ['reactjs', 'typescript', 'elixir'],
		imgWidth: 200
	},
	ilmx: {
		link: 'https://ilmexchange.com',
		imgSrc: ilmx,
		heading: 'IlmExchange',
		typeTags: ['web', 'pwa'],
		description:
			'Ilm Exchange is a digital education platform that connects schools, teachers and students with affordable resources to enable quality teaching and learning across Pakistan.',
		tags: ['reactjs', 'typescript', 'elixir'],
		imgWidth: 200
	},
	scb: {
		link: 'https://sciencebowlplatform.com',
		imgSrc: scienceBowl,
		heading: 'Science Bowl',
		typeTags: ['web', 'pwa'],
		description: `A website designed to provide students with experiences that help them prepare for the science bowl competition. In the current beta version, the tool supports competitive play between two teams by enabling a gameful environment that provides a question bank and a reliable buzzer system, manages scoring and keeps track of game time. This system removes significant barriers to entry for the science bowl by removing the need for expensive equipment and personnel including the score and time keepers.`,
		tags: ['reactjs', 'typescript', 'elixir'],
		imgWidth: 200
	},
	rm: {
		imgSrc: runmatch,
		heading: 'RunMatch',
		typeTags: ['mobile', 'android', 'ios'],
		description:
			'A location-based search mobile app that helps its users find a gym companion and suitable gymnasiums with features like chat, group chat, adding friends, setting meet ups and an android widget for showing coming up meetups /n To help users select a gymnasium, each gym had multiple reviews and a star rating. For finding a buddy, user had to go through a vigorous verification process using their National IDs and live photo verification. These facial-recognition verifications were done using Microsoft azure.',
		tags: ['react native', 'firebase'],
		bg: 'bg-white'
	},
	novo: {
		link: `https://play.google.com/store/apps/details?id=com.novoapka&hl=en_US&gl=US`,
		imgSrc: novoapka,
		heading: 'Novoapka',
		typeTags: ['web', 'mobile', 'android', 'ios'],
		description:
			'An application for Novo Plaza where users collect loyalty points for every purchase in Novo Plaza and exchanges them for collected rewards./nWhen a purchase is made from any one of 100 shops at Novo Plaza, the users scan their receipts which are then processed by our OCR. The OCR return the points against the total amount user has spent. Using these points, the user can redeem multiple rewards.',
		tags: ['reactjs', 'react-native', 'typescript', 'firebase'],
		bg: 'bg-white',
		imgWidth: 200
	}
}
