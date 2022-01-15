import Head from 'next/head'

export const IndexPage = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>Zarish Iqbal</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<h1 className="text-6xl font-bold">Zarish Iqbal</h1>
			</main>
		</div>
	)
}

export default IndexPage
