import anb from 'assets/anb.png'
import profile from 'assets/profile.png'
import { Eyes } from 'components/eyes'
import { motion } from 'framer-motion'
import DefaultLayout from 'layouts'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

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
				<div className="p-10 md:p-10 space-y-3  text-gray-600 justify-center bg-lightBlue-50 m-0 md:m-5 rounded-2xl shadow-md border border-lightBlue-100 md:w-full flex flex-col items-center mt-5 flex-1 px-10 md:px-20 text-center">
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
							src={profile}
						/>
						<div className="">
							<h1 className="text-lg font-serif">Hello! I&apos;m Zarish Iqbal</h1>
							<p className="text-black text-sm">
								<strong>Software Developer at Arab National Bank</strong>
								<div className="my-4">
									<Image
										className="shadow-lg"
										width={100}
										height={40}
										alt="under-construction"
										src={anb}
									/>
								</div>
								<div className="text-gray-400 text-sm">
									Outsystems | ReactJS | Typescript | React Native
								</div>
							</p>
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
						className=" w-full flex mt-5 items-center justify-center ">
						<Eyes />
					</motion.div>
				</div>
			</DefaultLayout>
		</>
	)
}

export default IndexPage
