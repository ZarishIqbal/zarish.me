import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import { Tag } from './tags'

type ProjectProps = {
	link?: string
	imgSrc: StaticImageData
	heading: string
	typeTags: string[]
	description: string
	tags: string[]
	imgHeight?: number
	imgWidth?: number
	bg?: string
}

export const Project = ({
	link,
	imgSrc,
	heading,
	typeTags,
	description,
	tags,
	imgHeight,
	imgWidth,
	bg
}: ProjectProps) => {
	const appType = typeTags.map(tag => (
		<span
			key={tag}
			className="mx-2 bg-gray-200  text-gray-500 font-thin  px-2  rounded-md  font-dongle shadow-md items-center">
			{tag}
		</span>
	))
	const techTags = tags.map(tag => <Tag key={tag} text={tag} />)
	const project = (
		<div>
			<h2 className="text-justify w-full font-semibold my-2 flex items-center flex-wrap">
				{heading}
				{appType}
			</h2>
			<div
				className={clsx(
					'flex items-center justify-center my-10 shadow-md p-5 rounded-xl h-56 ',
					bg ?? 'bg-blue-100 '
				)}>
				<Image
					alt={heading}
					src={imgSrc}
					className="rounded-md m-auto"
					height={imgHeight ?? 200}
					width={imgWidth ?? 300}
				/>
			</div>
			<p className="text-justify">{description}</p>

			<div className="flex space-x-3 flex-wrap my-3">{techTags}</div>
		</div>
	)

	if (link) {
		return (
			<div className="cursor-pointer p-10 space-y-3 mt-10 text-gray-600 bg-purple-50 m-5 rounded-2xl shadow-md border border-sky-100 leading-7">
				<a target="_blank" href={link}>
					{project}
				</a>
			</div>
		)
	}
	return (
		<div className="p-10 space-y-3 mt-10 text-gray-600 bg-purple-50 m-5 rounded-2xl shadow-md border border-sky-100 leading-7">
			{project}
		</div>
	)
}
