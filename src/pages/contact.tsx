import DefaultLayout from 'layouts'
import Image from 'next/image'

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
							<a
								className="text-blue-500 underline"
								href="https://github.com/ZarishIqbal">
								zarishiqbal
							</a>
						</span>
					</li>
					<li className="flex items-center space-x-3">
						<Image
							alt="twitter"
							src="https://img.icons8.com/color/48/000000/twitter--v1.png"
							width={32}
							height={32}
						/>
						<span className="w-64">
							Twitter:{' '}
							<a
								className="text-blue-500 underline"
								href="https://twitter.com/ZarishIqbal">
								@zarishiqbal
							</a>
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
							<a
								className="text-blue-500 underline"
								href="mailto:zarishiqbal.zi@gmail.com">
								zarishiqbal.zi@gmail.com
							</a>
						</span>
					</li>
				</ul>
			</div>
		</DefaultLayout>
	)
}

export default Contact
