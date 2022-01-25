import { Transition } from '@headlessui/react'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import profilePic from '../assets/profile.jpeg'
import novo1 from '../assets/novoapka/screen_1.jpeg'

import novo2 from '../assets/novoapka/screen_2.jpeg'
import novo3 from '../assets/novoapka/screen_3.jpeg'
import novo4 from '../assets/novoapka/screen_4.jpeg'
import novo5 from '../assets/novoapka/screen_5.jpeg'
import novo6 from '../assets/novoapka/screen_6.jpeg'
import novo7 from '../assets/novoapka/screen_7.jpeg'
import novo8 from '../assets/novoapka/screen_8.jpeg'
import run1 from '../assets/runmatch/screen_1.png'

import run2 from '../assets/runmatch/screen_2.png'
import Image from 'next/image'
import DefaultLayout from 'layouts'
import { useRouter } from 'next/router'

const Projects = () => {
	const router = useRouter()
	return (
		<DefaultLayout meta={{ title: 'Project' }}>
			<div className="p-10 space-y-3 mt-10 text-gray-600 bg-lightBlue-50 m-5 flex  flex-col md:flex-row rounded-2xl shadow-md border border-lightBlue-100 leading-7">
				<div>
					<h2 className="text-left w-full font-semibold my-2 ">Novoapka</h2>
					<p className="text-justify">
						A React Native application for Novo Plaza where users collect loyalty points
						for every purchase in Novo Plaza stores and exchange them for collected
						rewards.
					</p>
					<p className="text-justify">
						When a purchase is made from anyone of 100 shops at Novo Plaza, The users
						scan their reciepts which are then processed by our OCR. The OCR return the
						points against the total amount user has spent. Using these points, the user
						can redeem multiple rewards.
					</p>
				</div>
				<Carousel
					className="w-full pl-3"
					infiniteLoop
					showStatus={false}
					showThumbs={false}>
					<Image
						className="shadow-lg "
						height={410}
						width={200}
						alt="under-construction"
						src={novo1}
					/>

					<Image
						className="shadow-lg "
						height={410}
						width={200}
						alt="under-construction"
						src={novo2}
					/>
					<Image
						className="shadow-lg "
						height={410}
						width={200}
						alt="under-construction"
						src={novo3}
					/>
					<Image
						className="shadow-lg "
						height={410}
						width={200}
						alt="under-construction"
						src={novo4}
					/>
					<Image
						className="shadow-lg "
						height={410}
						width={200}
						alt="under-construction"
						src={novo5}
					/>
					<Image
						className="shadow-lg "
						height={410}
						width={200}
						alt="under-construction"
						src={novo6}
					/>
					<Image
						className="shadow-lg "
						height={410}
						width={200}
						alt="under-construction"
						src={novo7}
					/>
					<Image
						className="shadow-lg "
						height={410}
						width={200}
						alt="under-construction"
						src={novo8}
					/>
				</Carousel>
			</div>

			<div className="p-10 space-y-3 mt-10 text-gray-600 bg-lightBlue-50 m-5 rounded-2xl shadow-md border border-lightBlue-100 leading-7">
				<div>
					<h2 className="text-justify w-full font-semibold my-2 ">RunMatch</h2>
					<p className="text-justify">
						A location-based search mobile app that helps its users find a gym companion
						and suitable gymnasiums. The technologies used was react and react-native
						with the firebase real-time database.
					</p>
					<p className="text-justify">
						Upon signing up, users could search for gyms or gym-buddies upto a radius of
						10km. To help users select a gymnasium, each gym had multiple reviews and a
						star rating. For finding a buddy, user had to go through a vigorous
						verification process using their National IDs and live photo verification.
						These facial-recognition verifications were done using Microsoft azure and
						Nanonets OCR.
					</p>
					<p className="text-justify">
						The application also had features like chat, group chat, adding friends,
						setting meet ups and an android widget for showing coming up meetups
					</p>{' '}
				</div>
				<Carousel className="" infiniteLoop showStatus={false} showThumbs={false}>
					<Image
						className="shadow-lg "
						height={510}
						width={900}
						alt="under-construction"
						src={run1}
					/>
					<Image
						className="shadow-lg "
						height={510}
						width={900}
						alt="under-construction"
						src={run2}
					/>
				</Carousel>
			</div>
		</DefaultLayout>
	)
}
export default Projects
