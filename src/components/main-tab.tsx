import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import toTitleCase from 'utils/toTitleCase'

import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
const MainTab = () => {
	const navigation = ['home', 'about', 'projects', 'contact']

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
								{/* <Link href="/" passHref>
									<div className="flex-shrink-0 flex items-center cursor-pointer">
										<Image alt="logo" width={160} height={30} src={logo} />
									</div>
								</Link> */}
								<div className="hidden sm:block sm:ml-6 w-full">
									<div className="flex justify-between">
										{navigation.map(item => (
											<Link
												passHref
												key={item}
												href={`/${item == 'home' ? '' : item}`}>
												<div
													key={item}
													className={clsx(
														{
															'bg-gray-900 text-white':
																router.route.includes(item) ||
																(item === 'home' &&
																	router.route == '/')
														},
														'text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer',
														'px-3 py-2 rounded-md text-sm font-medium flex items-center justify-center space-x-2'
													)}>
													<span>{toTitleCase(item)}</span>
												</div>
											</Link>
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
										'px-3 py-2 rounded-md text-sm font-medium flex items-center justify-center space-x-2 cut'
									)}>
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
