import Head from 'next/head'
import warning from '../assets/warning.png'
import Image from 'next/image'
export const IndexPage = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>Zarish Iqbal</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<h1 className="text-6xl font-bold">Zarish Iqbal</h1>
				<p className="my-5 flex items-center justify-center space-x-3">
					<Image alt="under-construction" height={30} width={30} src={warning} />
					<span> Site Under Construction</span>
				</p>
			</main>
		</div>
	)
}

export default IndexPage
