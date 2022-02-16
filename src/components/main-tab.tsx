import Link from 'next/link'
import { useRouter } from 'next/router'
import toTitleCase from 'utils/toTitleCase'
import clsx from 'clsx'
const MainTab = () => {
	const tabs = ['home', 'about', 'projects', 'contact']
	const router = useRouter()
	return (
		<div className="flex sm:space-x-2 md:space-x-6  text-lightBlue-900 md:text-xl sm:text-sm font-balsamic">
			{tabs.map(tab => (
				<Link href={`/${tab == 'home' ? '' : tab}`} key={tab}>
					<span
						className={clsx(
							(router.route.includes(tab) ||
								(tab === 'home' && router.route == '/')) &&
								'font-bold cursor-default',
							'px-2 py-1 rounded-lg cursor-pointer'
						)}>
						{toTitleCase(tab)}
					</span>
				</Link>
			))}
		</div>
	)
}

export default MainTab
