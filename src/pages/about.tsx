import DefaultLayout from 'layouts'
import Link from 'next/link'
const About = () => {
	return (
		<DefaultLayout meta={{ title: 'About Me' }}>
			<div className="p-10 space-y-3 mt-10 text-gray-600 flex justify-center flex-col bg-lightBlue-50 m-5 rounded-2xl shadow-md border border-lightBlue-100 leading-7 text-left">
				<h2 className="font-bold text-xl text-left w-full">About Me</h2>
				<span className="h-auto mt-10 rounded-2xl md:space-x-6 sm:space-x-0 flex w-full md:flex-nowrap flex-wrap ">
					<p className=" text-justify ">
						I have a bachelor&apos;s degree in Software Engineering from COMSATS
						University Islamabad. Even prior to graduating, I began working as a
						freelance developer and acquired experience in managing customers with
						effective soft skills. As a self-spurred person, I continually explore
						different skill-driven avenues in my related domains. I am extremely
						enthusiastic about application development and endeavor to make headway as a
						Software Engineer ever compatible with the emerging trends and technologies.
					</p>
				</span>

				<p className=" text-justify">
					As a freelancer, I developed react native applications like Novoapka and
					GiftingYou along with contributing to multiple web and mobile applications.
					Currently, I am working as a full-stack web developer at{' '}
					<span className="text-lightBlue-500 cursor-pointer">
						<Link href="https://innovationlabs.ai/">Innovation Labs.</Link>{' '}
					</span>
					Following are the technologies I have worked with:
				</p>
				<div className="grid grid-cols-2">
					<ul>
						<li>ReactJS</li>
						<li>AngularJS</li>
						<li>React Native</li>
						<li>Typescript</li>
						<li>Elixir</li>
					</ul>
					<ul>
						<li>NodeJS & Express </li>
						<li>Firebase</li>
						<li>Javascript</li>
						<li>mySQL</li>
						<li>Laravel</li>
					</ul>
				</div>
			</div>
		</DefaultLayout>
	)
}
export default About
