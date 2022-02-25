import DefaultLayout from 'layouts'

const Contact = () => {
	return (
		<DefaultLayout meta={{ title: 'Contact Me' }}>
			<div className="p-10 space-y-3 mt-10 text-gray-600 flex justify-center flex-col bg-lightBlue-50 m-5 rounded-2xl shadow-md border border-lightBlue-100 leading-7 text-left">
				<h2 className="font-bold text-xl text-left w-full">Reach me at</h2>
				<ul>
					<li>
						Github:{' '}
						<a
							className="text-blue-500 underline"
							href="https://github.com/ZarishIqbal">
							zarishiqbal
						</a>
					</li>
					<li>
						Twitter:{' '}
						<a
							className="text-blue-500 underline"
							href="https://twitter.com/ZarishIqbal">
							@zarishiqbal
						</a>
					</li>
					<li>Email Id: zarishiqbal.zi@gmail.com</li>
				</ul>
			</div>
		</DefaultLayout>
	)
}

export default Contact
