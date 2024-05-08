import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import anb from '../assets/anb.png'
import DefaultLayout from '../layouts'

export const IndexPage = () => {
	const router = useRouter()
	return (
		<>
			<Head>
				<title>Zarish Iqbal</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<DefaultLayout
				meta={{ title: 'Home', description: '', url: router.route, ogImage: '' }}>
				<div className="p-10 md:p-10 space-y-3  text-gray-600 justify-center bg-purple-50 m-0 md:m-5 rounded-2xl shadow-md border border-sky-100 md:w-full flex flex-col items-center mt-5 flex-1 px-10 md:px-20 text-center">
					<motion.div
						className="flex justify-center flex-col items-center"
						initial="hidden"
						animate="visible"
						variants={{
							hidden: {
								opacity: 0,
								scale: 0.8
							},
							visible: {
								opacity: 1,
								scale: 1,
								transition: {
									duration: 1.5
								}
							}
						}}>
						<Image
							// className="shadow-lg"
							width={100}
							height={40}
							alt="under-construction"
							src={anb}
						/>
						<div className="">
							<h1 className="text-lg font-serif">Hello! I&apos;m Zarish Iqbal</h1>
							<div className="text-black text-sm">
								<strong>Software Developer</strong>
								<div className="my-4 flex justify-center flex-col items-center"></div>
								<div className="text-gray-400 text-sm">
									Outsystems | ReactJS | Typescript | React Native
								</div>
								<div className="text-gray-600 text-sm px-20 my-10">
									<strong>
										I&apos;m a mobile developer with experience in both
										OutSystems and React/React Native.
									</strong>{' '}
									Currently, I&apos;m at Arab National Bank, contributing to their
									mobile applications. My background allows me to leverage the
									rapid development capabilities of OutSystems while also building
									performant and user-friendly interfaces with React Native.
									I&apos;m passionate about creating innovative mobile experiences
									that meet the needs of today&apos;s digital banking customers.
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</DefaultLayout>
		</>
	)
}

export default IndexPage
