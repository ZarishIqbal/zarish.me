import DefaultLayout from 'layouts'
import Image from 'next/image'
import Link from 'next/link'
import { InlineWidget } from 'react-calendly'

const Contact = () => {
	return (
		<DefaultLayout meta={{ title: 'Contact Me' }} full mini={false}>
			<div className="p-5 space-y-6 md:mt-10 mt-0 text-gray-600 flex justify-center flex-col bg-lightBlue-50 md:m-5 rounded-2xl shadow-md border border-lightBlue-100 leading-7 text-left">
				<h2 className="font-bold text-xl text-left w-full">Reach me at</h2>

				<div className="flex space-x-7 items-center justify-center">
					<div className="cursor-pointer">
						<Link href="https://github.com/ZarishIqbal" passHref>
							<Image
								alt="github"
								src="https://img.icons8.com/ios-filled/50/000000/github.png"
								width={32}
								height={32}
							/>
						</Link>
					</div>

					<div className="cursor-pointer">
						<Link href="https://www.linkedin.com/in/zarish-iqbal-799242194/" passHref>
							<Image
								alt="github"
								src="https://img.icons8.com/doodle/48/null/linkedin-circled.png"
								width={32}
								height={32}
							/>
						</Link>
					</div>

					<div className="cursor-pointer">
						<Link href="mailto:zarishiqbal.zi@gmail.com" passHref>
							<Image
								alt="email"
								src="https://img.icons8.com/bubbles/50/null/apple-mail.png"
								width={32}
								height={32}
							/>
						</Link>
					</div>

					<div className="cursor-pointer">
						<Link
							href="https://www.upwork.com/freelancers/~01cb198d5185a4ad1e"
							passHref>
							<Image
								alt="email"
								src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/null/external-upwork-a-global-freelancing-platform-where-professionals-connect-and-collaborate-remotely-logo-shadow-tal-revivo.png"
								width={32}
								height={32}
							/>
						</Link>
					</div>
				</div>

				<div className="App">
					<InlineWidget url="https://calendly.com/zarishiqbal" />
				</div>
			</div>
		</DefaultLayout>
	)
}

export default Contact
