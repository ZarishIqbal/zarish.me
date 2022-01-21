import Head from 'next/head'
import { Transition } from '@headlessui/react'

import profilePic from '../assets/profile.jpeg'
import Image from 'next/image'
import { Tab } from 'components/tabs'
import { useEffect, useState } from 'react'
import { useTimeoutFn } from 'react-use'
import { Projects } from 'components/projects'
import { motion } from 'framer-motion'
import { Eyes } from 'components/eyes'

export const IndexPage = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-full py-2">
			<Head>
				<title>Zarish Iqbal</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col items-center my-20 w-full flex-1 px-20 text-center">
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
						<h1 className="text-xl font-serif">Hello! I&apos;m Zarish Iqbal</h1>
						<p className="text-gray-400 text-sm">Full Stack Developer</p>
					</div>
				</motion.div>
				<Eyes />
			</div>
		</div>
	)
}

export default IndexPage
