import elixir from '../assets/elixir.png'
import outsystems from '../assets/outsystems.png'

import Image from 'next/image'
import DefaultLayout from '../layouts'

const About = () => {
	return (
		<DefaultLayout meta={{ title: 'About Me' }}>
			<div className="p-10 space-y-3 mt-10 text-gray-600 flex justify-center flex-col bg-purple-50 m-5 rounded-2xl shadow-md border border-sky-100 leading-7 text-left">
				<h2 className="font-bold text-xl text-left w-full">About Me</h2>

				<span className="h-auto mt-10 rounded-2xl md:space-x-6 sm:space-x-0 flex w-full md:flex-nowrap flex-wrap ">
					<p className=" text-justify ">
						I have a bachelor&apos;s degree in Software Engineering from COMSATS
						University Islamabad. Even prior to graduating, I began working as a
						freelance developer and acquired experience in managing customers with
						effective soft skills. As a self-spurred person, I continually explore
						different skill-driven avenues in my related domains. I am extremely
						enthusiastic about application development and endeavor to make headway as a
						Software Engineer ever compatible with the emerging trends and technologies.
					</p>
				</span>

				<p className=" text-justify">
					As a freelancer, I developed react native applications like Novoapka and
					GiftingYou along with contributing to multiple web and mobile applications.
					Currently, I am working as a software developer at Arab National Bank. Following
					are the technologies I have worked with:
				</p>
				<div className="grid grid-cols-3">
					<ul>
						<li className="flex p-4">
							<Image
								height={15}
								alt={'react-js'}
								width={30}
								src="https://img.icons8.com/office/16/null/react.png"
							/>
							<span className="ml-2">ReactJS</span>
						</li>
						<li className="flex p-4">
							<Image
								height={15}
								width={30}
								alt={'angular-js'}
								src="https://img.icons8.com/color/48/null/angularjs.png"
							/>
							<span className="ml-2">AngularJS</span>
						</li>
						<li className="flex p-4">
							<Image
								height={15}
								width={30}
								alt={'react-native'}
								src="https://img.icons8.com/color/48/null/react-native.png"
							/>
							<span className="ml-2">React Native</span>
						</li>
						<li className="flex p-4">
							<Image
								height={15}
								width={30}
								alt={'typescript'}
								src="https://img.icons8.com/color/48/null/typescript.png"
							/>
							<span className="ml-2">Typescript</span>
						</li>
						<li className="flex p-4">
							<Image height={15} width={30} src={elixir} alt={'elixir'} />
							<span className="ml-2">Elixir</span>
						</li>
					</ul>
					<ul>
						<li className="flex p-4">
							<Image
								height={15}
								width={30}
								alt={'nodejs'}
								src="https://img.icons8.com/color/48/null/nodejs.png"
							/>
							<span className="ml-2">NodeJS & Express</span>
						</li>
						<li className="flex p-4">
							<Image
								height={15}
								width={30}
								alt={'firebase'}
								src="https://img.icons8.com/color/48/null/firebase.png"
							/>
							<span className="ml-2">Firebase</span>
						</li>
						<li className="flex p-4">
							<Image
								height={15}
								width={30}
								alt={'js'}
								src="https://img.icons8.com/color/48/null/javascript--v1.png"
							/>
							<span className="ml-2">Javascript</span>
						</li>
						<li className="flex p-4">
							<Image
								height={15}
								width={30}
								alt={'my-sql'}
								src="https://img.icons8.com/fluency/48/null/mysql-logo.png"
							/>
							<span className="ml-2">mySQL</span>
						</li>
						<li className="flex p-4">
							<Image
								height={15}
								width={30}
								alt={'laravel'}
								src="https://img.icons8.com/fluency/48/null/laravel.png"
							/>
							<span className="ml-2">Laravel</span>
						</li>
					</ul>

					<ul>
						<li className="flex p-4">
							<Image height={15} width={30} src={outsystems} alt={'outsystems'} />
							<span className="ml-2">Outsystems</span>
						</li>
						<li className="flex p-4">
							<Image
								height={15}
								width={30}
								alt={'svetle'}
								src="https://img.icons8.com/doodle/48/null/svetle.png"
							/>
							<span className="ml-2">Svelte</span>
						</li>
						<li className="flex p-4">
							<Image
								height={15}
								width={30}
								alt={'vue'}
								src="https://img.icons8.com/color/48/null/vue-js.png"
							/>
							<span className="ml-2">Vue</span>
						</li>
						<li className="flex p-4">
							<Image
								height={15}
								width={30}
								alt={'postgres'}
								src="https://img.icons8.com/color/48/null/postgreesql.png"
							/>
							<span className="ml-2">Postgres</span>
						</li>
						<li className="flex p-4">
							<Image
								height={15}
								width={30}
								alt={'git'}
								src="https://img.icons8.com/ios-filled/50/null/git.png"
							/>
							<span className="ml-2">Git</span>
						</li>
					</ul>
				</div>
			</div>
		</DefaultLayout>
	)
}
export default About
