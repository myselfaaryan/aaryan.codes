import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const DixonBaxi: NextPage = () => {
	return (
		<>
			<Head>
				<title>aaryan kapoor // DixonBaxi</title>
				<meta name="description"
				content="🙋🏻‍♂️ hey there, i am aaryan. this is my creative application pitch for the DixonBaxi intern academy." />
			</Head>
			<div className="select-none font-mono">
				<Link href="/">
				    <img src="/arrow.svg" className="!cursor-pointer z-10 text-white mix-blend-difference fixed top-0 left-0 m-4 h-6 lg:h-9 transform rotate-180" />
				</Link>
				<Link href="/">
				    <img src="/ak.svg" className="!cursor-pointer z-10 text-white mix-blend-difference fixed top-0 right-0 m-4 h-6 lg:h-9" />
				</Link>
                <div className="p-4 flex flex-col bg-white select-none font-mono lg:min-h-screen w-auto">
					<div className="relative w-full h-full">
						<img src="/dixonbaxi/Frame 1.png" className="w-full h-full" />
					</div>
                    <div className="relative w-full h-full">
						<img src="/dixonbaxi/Frame 2.png" className="w-full h-full" />
					</div>
                    <div className="relative w-full h-full">
						<video className="w-full h-full" autoPlay muted playsInline loop>
							<source src="/application.mp4" type="video/mp4" />
						</video>
					</div>
                    <div className="relative w-full h-full">
						<img src="/dixonbaxi/Frame 4.png" className="w-full h-full -mt-[0.01rem]" />
					</div>
                    <div className="relative w-full h-full">
						<img src="/dixonbaxi/Frame 5.png" className="w-full h-full" />
					</div>
                    <div className="relative w-full h-full">
						<img src="/dixonbaxi/Frame 6.png" className="w-full h-full" />
					</div>
                    <div className="relative w-full h-full">
						<img src="/dixonbaxi/Frame 7.png" className="w-full h-full" />
					</div>
                    <div className="relative w-full h-full">
						<img src="/dixonbaxi/Frame 8.png" className="w-full h-full" />
					</div>
                    <div className="relative w-full h-full">
						<img src="/dixonbaxi/Frame 9.png" className="w-full h-full" />
					</div>
                    <div className="relative w-full h-full">
						<img src="/dixonbaxi/Frame 10.png" className="w-full h-full" />
					</div>
				</div>
			</div>
		</>
	)
}

export default DixonBaxi