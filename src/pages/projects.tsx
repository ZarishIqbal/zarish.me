import novoapka from '../../assets/novo.webp'
import runmatch from '../../assets/runmatch.png'
import scienceBowl from '../../assets/science-bowl.svg'
import ilmx from '../../assets/ilmx.png'
import mis from '../../assets/mischool.ico'

import gy from '../../assets/gifting-you-logo.png'
import Image from 'next/image'
import DefaultLayout from 'layouts'
import { Tag } from 'components/tags'

const Projects = () => {
	return (
		<DefaultLayout meta={{ title: 'Project' }} mini={false}>
			<div className="grid md:grid-cols-3 grid-cols-1">
				<div className="p-10 space-y-3 mt-10 text-gray-600 bg-lightBlue-50 m-5 rounded-2xl shadow-md border border-lightBlue-100 leading-7">
					<div>
						<h2 className="text-justify w-full font-semibold my-2 flex items-center flex-wrap">
							GifitingYou
							<span className="mx-2 my-1 bg-gray-200 text-gray-500 font-thin  px-2  rounded-md  font-dongle shadow-md items-center">
								web
							</span>
							<span className="mx-2 my-1 bg-gray-200 text-gray-500 font-thin  px-2  rounded-md  font-dongle shadow-md items-center">
								ios
							</span>
							<span className="mx-2 my-1 bg-gray-200 text-gray-500 font-thin  px-2  rounded-md  font-dongle shadow-md items-center">
								android
							</span>
						</h2>
						<div className="flex items-center justify-center my-5">
							<Image
								alt="gifting-you"
								src={gy}
								className="bg-black rounded-md m-auto"
								height={200}
								width={300}
							/>
						</div>
						<p className="text-justify">
							Gifting you is a social platform for users to request and receive gifts.
							The website was built using ReactJS with Typescript and TailwindCSS.
							Whereas, the mobile application was serverless application with firebase
							function integrated.
						</p>
						<div className="flex space-x-3 py-2 flex-wrap">
							<Tag text="typescript" />
							<Tag text="React Native" />
							<Tag text="ReactJs" />
							<Tag text="Firebase" />
						</div>
					</div>
				</div>

				<div className="p-10 space-y-3 mt-10 text-gray-600 bg-lightBlue-50 m-5 rounded-2xl shadow-md border border-lightBlue-100 leading-7">
					<div>
						<h2 className="text-justify w-full font-semibold my-2 flex items-center flex-wrap">
							MISchool
							<span className="mx-2 bg-gray-200 text-gray-500 font-thin  px-2  rounded-md  font-dongle shadow-md items-center">
								web
							</span>
							<span className="mx-2 bg-gray-200 text-gray-500 font-thin  px-2  rounded-md  font-dongle shadow-md items-center">
								pwa
							</span>
						</h2>
						<div className="flex items-center justify-center my-5">
							<Image
								alt="gifting-you"
								src={mis}
								className="rounded-md m-auto"
								height={200}
								width={200}
							/>
						</div>
						<p className="text-justify">
							MISchool is a management software system for schools. MISchool enables
							school to collect, organize, and store records giving your school full
							control of all academic, finance, wellbeing, and administrative
							information.
						</p>

						<div className="flex space-x-3 flex-wrap my-3">
							<Tag text="typescript" />
							<Tag text="ReactJs" />
							<Tag text="Elixir" />
						</div>
					</div>
				</div>

				<div className="p-10 space-y-3 mt-10 text-gray-600 bg-lightBlue-50 m-5 rounded-2xl shadow-md border border-lightBlue-100 leading-7">
					<div>
						<h2 className="text-justify w-full font-semibold my-2 flex items-center flex-wrap">
							IlmExchange
							<span className="mx-2 bg-gray-200 text-gray-500 font-thin  px-2  rounded-md  font-dongle shadow-md items-center">
								web
							</span>
							<span className="mx-2 bg-gray-200 text-gray-500 font-thin  px-2  rounded-md  font-dongle shadow-md items-center">
								pwa
							</span>
						</h2>
						<div className="flex items-center justify-center my-5">
							<Image
								alt="gifting-you"
								src={ilmx}
								className="rounded-md m-auto"
								height={200}
								width={200}
							/>
						</div>
						<p className="text-justify">
							Ilm Exchange is a digital education platform that connects schools,
							teachers and students with affordable resources to enable quality
							teaching and learning across Pakistan.
						</p>
						<div className="flex space-x-3 py-2">
							<Tag text="typescript" />
							<Tag text="ReactJs" />
							<Tag text="Elixir" />
						</div>
					</div>
				</div>

				<div className="p-10 space-y-3 mt-10 text-gray-600 bg-lightBlue-50 m-5 rounded-2xl shadow-md border border-lightBlue-100 leading-7">
					<div>
						<h2 className="text-justify w-full font-semibold my-2 flex items-center flex-wrap">
							Science Bowl
							<span className="mx-2 bg-gray-200 text-gray-500 font-thin  px-2  rounded-md  font-dongle shadow-md items-center">
								web
							</span>
							<span className="mx-2 bg-gray-200 text-gray-500 font-thin  px-2  rounded-md  font-dongle shadow-md items-center">
								pwa
							</span>
						</h2>
						<div className="flex items-center justify-center my-5">
							<Image
								alt="gifting-you"
								src={scienceBowl}
								className="rounded-md m-auto"
								height={200}
								width={200}
							/>
						</div>
						<p className="text-justify">
							A website designed to provide students with experiences that help them
							prepare for the science bowl competition. In the current beta version,
							the tool supports competitive play between two teams by enabling a
							gameful environment that provides a question bank and a reliable buzzer
							system, manages scoring and keeps track of game time. This system
							removes significant barriers to entry for the science bowl by removing
							the need for expensive equipment and personnel including the score and
							time keepers.
						</p>
						<div className="flex space-x-3 py-2">
							<Tag text="typescript" />
							<Tag text="ReactJs" />
							<Tag text="Elixir" />
						</div>
					</div>
				</div>
				<div className="p-10 space-y-3 mt-10 text-gray-600 bg-lightBlue-50 m-5 rounded-2xl shadow-md border border-lightBlue-100 leading-7">
					<div>
						<h2 className="text-justify w-full font-semibold flex my-2 flex-wrap ">
							RunMatch
							<span className="mx-2 bg-gray-200 text-gray-500 font-thin  px-2  rounded-md  font-dongle shadow-md items-center">
								mobile
							</span>
							<span className="mx-2 bg-gray-200 text-gray-500 font-thin  px-2  rounded-md  font-dongle shadow-md items-center">
								ios
							</span>
							<span className="mx-2 bg-gray-200 text-gray-500 font-thin  px-2  rounded-md  font-dongle shadow-md items-center">
								android
							</span>
						</h2>
						<div className="flex items-center justify-center my-5">
							<Image
								alt="gifting-you"
								src={runmatch}
								className="bg-black rounded-md m-auto"
								height={200}
								width={400}
							/>
						</div>
						<p className="text-justify">
							A location-based search mobile app that helps its users find a gym
							companion and suitable gymnasiums. The technologies used was react and
							react-native with the firebase real-time database.
						</p>
						<p className="text-justify">
							Upon signing up, users could search for gyms or gym-buddies upto a
							radius of 10km. To help users select a gymnasium, each gym had multiple
							reviews and a star rating. For finding a buddy, user had to go through a
							vigorous verification process using their National IDs and live photo
							verification. These facial-recognition verifications were done using
							Microsoft azure and Nanonets OCR.
						</p>
						<p className="text-justify">
							The application also had features like chat, group chat, adding friends,
							setting meet ups and an android widget for showing coming up meetups
						</p>
						<div className="flex space-x-3 flex-wrap my-3">
							<Tag text="react native" />
							<Tag text="firebase" />
						</div>
					</div>
				</div>
				<div className="p-10 space-y-3 mt-10 text-gray-600 bg-lightBlue-50 m-5 flex  flex-col md:flex-row rounded-2xl shadow-md border border-lightBlue-100 leading-7">
					<div>
						<h2 className="text-left font-semibold flex flex-wrap items-center">
							Novoapka
							<span className="mx-2 m-1 bg-gray-200 text-gray-500 font-thin  px-2  rounded-md  font-dongle shadow-md items-center">
								mobile
							</span>
							<span className="mx-2 m-1 bg-gray-200 text-gray-500 font-thin  px-2  rounded-md  font-dongle shadow-md items-center">
								ios
							</span>
							<span className="mx-2 m-1 bg-gray-200 text-gray-500 font-thin  px-2  rounded-md  font-dongle shadow-md items-center">
								android
							</span>
							<span className="mx-2 m-1 bg-gray-200 text-gray-500 font-thin  px-2  rounded-md  font-dongle shadow-md items-center">
								web
							</span>
						</h2>
						<div className="flex items-center justify-center my-5">
							<Image
								alt="gifting-you"
								src={novoapka}
								className="bg-black rounded-md m-auto"
								height={200}
								width={200}
							/>
						</div>
						<p className="text-justify">
							An application for Novo Plaza where users collect loyalty points for
							every purchase in Novo Plaza and exchanges them for collected rewards.
						</p>
						<p className="text-justify">
							When a purchase is made from any one of 100 shops at Novo Plaza, the
							users scan their reciepts which are then processed by our OCR. The OCR
							return the points against the total amount user has spent. Using these
							points, the user can redeem multiple rewards.
						</p>
						<div className="flex space-x-3 flex-wrap my-3">
							<Tag text="react native" />
							<Tag text="ReactJS" />
							<Tag text="typescript" />
							<Tag text="firebase" />
						</div>
					</div>
				</div>
			</div>
		</DefaultLayout>
	)
}
export default Projects
