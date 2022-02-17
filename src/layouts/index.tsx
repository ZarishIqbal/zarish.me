import React, { FunctionComponent } from 'react'
import { NextSeo } from 'next-seo'
import MainTab from 'components/main-tab'
import clsx from 'clsx'
type LayoutProps = {
	meta: any
	noIndex?: boolean
	children: React.ReactNode
	mini?: boolean
}

const DefaultLayout: FunctionComponent<LayoutProps> = ({
	children,
	meta,
	noIndex = false,
	mini = true
}) => {
	const { title, description, titleAppendSiteName = false, url, ogImage } = meta || {}
	return (
		<>
			<NextSeo
				noindex={noIndex}
				title={title}
				description={description}
				titleTemplate={titleAppendSiteName ? undefined : '%s'}
				openGraph={{
					title,
					description,
					url,
					images: ogImage ? [ogImage] : undefined
				}}
				canonical={url}
			/>
			<main
				className={clsx(' mx-auto sm:pt-10 pt-4 sm:pb-16 pb-8', {
					'max-w-screen-md': mini
				})}>
				<div className="flex flex-col items-center justify-center min-h-full py-2 ">
					<MainTab />

					{children}
				</div>
			</main>
		</>
	)
}

export default DefaultLayout
