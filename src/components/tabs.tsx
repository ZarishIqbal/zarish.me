import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import { useTimeoutFn } from 'react-use'
type TabProps = {
	title: string
	desc: string | React.ReactNode
	duration: number
}
export const Tab = ({ title, desc, duration }: TabProps) => {
	let [isShowing, setIsShowing] = useState(true)
	let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), duration + 500)

	useEffect(() => {
		setIsShowing(false)
		resetIsShowing()
	}, [])

	return (
		<Transition
			appear
			show={isShowing}
			enter="transform transition duration-[800ms]"
			enterFrom="opacity-0 translate-x-40"
			enterTo="opacity-100 rotate-0 scale-100"
			leave="transform duration-200 transition ease-in-out"
			leaveFrom="opacity-100 rotate-0 scale-100 "
			leaveTo="opacity-0 scale-95 "
			className="w-full px-32 mx-auto bg-white rounded-2xl">
			<Disclosure defaultOpen>
				{({ open }) => (
					<>
						<Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-900 rounded-lg hover:bg-blue-50 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
							<span>{title}</span>
						</Disclosure.Button>
						<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 text-left">
							{desc}
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</Transition>
	)
}
