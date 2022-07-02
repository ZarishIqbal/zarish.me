import DefaultLayout from 'layouts'
import Image from 'next/image'
import Link from 'next/link'

const Contact = () => {
	return (
		<DefaultLayout meta={{ title: 'Contact Me' }}>
			<div className="p-5 space-y-6 md:mt-10 mt-0 text-gray-600 flex justify-center flex-col bg-lightBlue-50 md:m-5 rounded-2xl shadow-md border border-lightBlue-100 leading-7 text-left">
				<h2 className="font-bold text-xl text-left w-full">Reach me at</h2>
				<ul className="space-y-3">
					<li className="flex items-center space-x-3 md:text-base text-xs">
						<Image
							alt="github"
							src="https://img.icons8.com/ios-filled/50/000000/github.png"
							width={32}
							height={32}
						/>
						<span className="w-64">
							Github:{' '}
							<Link href="https://github.com/ZarishIqbal" passHref>
								<span className="text-lightBlue-500 cursor-pointer">
									zarishiqbal
								</span>
							</Link>
						</span>
					</li>

					<li className="flex items-center space-x-3">
						<Image
							alt="email"
							src="https://img.icons8.com/external-nawicon-flat-nawicon/64/000000/external-email-communication-nawicon-flat-nawicon-2.png"
							width={32}
							height={32}
						/>
						<span className="w-64">
							Email ID:{'   '}
							<Link href="mailto:zarishiqbal.zi@gmail.com" passHref>
								<span className="text-lightBlue-500 cursor-pointer">
									zarishiqbal.zi@gmail.com
								</span>
							</Link>
						</span>
					</li>
				</ul>
			</div>
		</DefaultLayout>
	)
}

export default Contact
