import React from 'react'

type TagProps = {
	text: string
}

export const Tag = ({ text }: TagProps) => {
	return (
		<div className="bg-blue-200 h-8 m-2 font-bold px-2 text-black rounded-md uppercase font-dongle shadow-md flex items-center">
			{text}
		</div>
	)
}
