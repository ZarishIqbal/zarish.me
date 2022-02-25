import Link from 'next/link'
import { useRouter } from 'next/router'
import toTitleCase from 'utils/toTitleCase'
import clsx from 'clsx'

import logo from 'assets/logo.png'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Image from 'next/image'
const MainTab = () => {
	const navigation = ['home', 'about', 'projects', 'contact']
	const icon = {
		projects:
			'https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-code-agile-flaticons-flat-flat-icons.png',
		home: 'https://img.icons8.com/color/48/000000/home.png',
		about: 'https://img.icons8.com/external-others-pike-picture/50/000000/external-about-web-design-development-others-pike-picture.png',
		contact:
			'https://img.icons8.com/external-nawicon-flat-nawicon/64/000000/external-contact-communication-nawicon-flat-nawicon.png'
	}
	const router = useRouter()
	return (
		<Disclosure as="nav" className="bg-gray-800 w-full z-10">
			{({ open }) => (
				<>
					<div className="max-w-screen-md mx-auto px-2 sm:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
								<a href="/" className="flex-shrink-0 flex items-center">
									<span className="flex md:hidden">
										<Image alt="logo" width={160} height={30} src={logo} />
									</span>
									<span className="hidden md:flex">
										<Image alt="logo" width={160} height={30} src={logo} />
									</span>
								</a>
								<div className="hidden sm:block sm:ml-6 w-full">
									<div className="flex justify-between">
										{navigation.map(item => (
											<a
												key={item}
												href={`/${item == 'home' ? '' : item}`}
												className={clsx(
													router.route.includes(item) ||
														(item === 'home' &&
															router.route == '/' &&
															'bg-gray-900 text-white'),
													'text-gray-300 hover:bg-gray-700 hover:text-white',
													'px-3 py-2 rounded-md text-sm font-medium flex items-center justify-center space-x-2'
												)}>
												<Image
													alt={item}
													src={icon[item]}
													width={32}
													height={32}
												/>
												<span>{toTitleCase(item)}</span>
											</a>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigation.map(item => (
								<Disclosure.Button
									key={item}
									as="a"
									href={`/${item == 'home' ? '' : item}`}
									className={clsx(
										router.route.includes(item) ||
											(item === 'home' && router.route == '/')
											? 'bg-gray-900 text-white'
											: 'text-gray-300 hover:bg-gray-700 hover:text-white',
										'px-3 py-2 rounded-md text-sm font-medium flex items-center justify-center space-x-2'
									)}>
									<Image alt={item} src={icon[item]} width={32} height={32} />
									<span>{toTitleCase(item)}</span>
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}

export default MainTab
