import { useSpring, animated } from 'react-spring'

import eye from '../assets/eyeball.png'

import Image from 'next/image'

const trans = (x, y) => {
	const calcX = x < 18 ? (x > -18 ? x : -18) : 18
	const calcY = y < 80 ? (y > -18 ? y : -18) : 80
	return `translate(${calcX}px,${calcY}px) translate(${calcX}px,${calcY}px)`
}

export const Eyes = () => {
	const [props, set] = useSpring(() => ({
		xy: [0, 0],
		config: { mass: 10, tension: 100, friction: 100 }
	}))

	const handleMouseMove: React.MouseEventHandler = e => {
		set({
			xy: [
				(e.clientX * 50 * e.movementX) / window.innerWidth,
				(e.clientY * 50 * e.movementY) / window.innerHeight
			]
		})
	}
	return (
		<div
			className="flex space-x-5 mt-10 bg-gray-50 p-40 rounded-full"
			onMouseMove={handleMouseMove}>
			<div className="h-60 w-32 rounded-full border-gray-200 border shadow-md">
				<animated.div style={{ transform: props.xy.to(trans) }}>
					<Image alt="eye-r" className="rounded-full" width={80} height={80} src={eye} />
				</animated.div>
			</div>

			<div className="h-60 w-32 rounded-full border-gray-200 border shadow-md">
				<animated.div style={{ transform: props.xy.to(trans) }}>
					<Image alt="eye-r" className="rounded-full" width={80} height={80} src={eye} />
				</animated.div>
			</div>
		</div>
	)
}
