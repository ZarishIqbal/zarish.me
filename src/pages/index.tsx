import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../assets/profile.jpeg'
import { motion } from 'framer-motion'
import { Eyes } from 'components/eyes'
import DefaultLayout from 'layouts'
import { useRouter } from 'next/router'

export const IndexPage = () => {
	const router = useRouter()
	console.log(router.route)
	return (
		<>
			<Head>
				<title>Zarish Iqbal</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<DefaultLayout
				meta={{ title: 'Home', description: '', url: router.route, ogImage: '' }}>
				<div className="flex flex-col items-center w-full mt-5 flex-1 px-20 text-center">
					<motion.div
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
							className="rounded-full shadow-lg"
							width={110}
							height={110}
							alt="under-construction"
							src={profilePic}
						/>
						<div className="">
							<h1 className="text-lg font-serif">Hello! I&apos;m Zarish Iqbal</h1>
							<p className="text-gray-400 text-sm">Full Stack Developer</p>
						</div>
					</motion.div>
					<motion.div
						transition={{
							y: {
								duration: 3,
								// yoyo: Infinity,
								ease: 'easeIn'
							}
						}}
						animate={{
							y: ['100%', '-100%', '50%', '-50%', '30%', '-30%', '0%'],
							scale: [0.3, 0.4, 0.5, 0.6, 1],
							transition: {
								duration: 3
							}
						}}
						className=" w-full flex mt-5 items-center justify-center">
						<Eyes />
					</motion.div>
				</div>
			</DefaultLayout>
		</>
	)
}

export default IndexPage
