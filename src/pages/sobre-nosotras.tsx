import "../app/styles/globals.css";
import Image from "next/image";

import Header from "../app/components/Header";
import Terms from "../app/components/Terms";
import KnowMoreButton from "../app/components/Buttons/KnowMoreButton";

const Us = () => {
	return (
		<div className='flex flex-grow justify-center items-center'>
			<div className='h-fit w-96 flex flex-col justify-center items-center flex-shrink gap-y-16'>
				<div className='w-full h-20 bg-secondary relative'>
					<div className='absolute top-0 right-32 w-full h-full bg-secondary ' />
					<div className='absolute top-0 left-32 w-full h-full bg-secondary rounded-t-full' />
				</div>
				<div className='bg-secondary w-5/6 h-96 rounded-3xl relative'>
					<Image
						src='https://placehold.co/277x377/png'
						alt='right-side-image'
						fill={true}
						style={{ objectFit: "cover" }}
						className='bg-cover relative rounded-3xl'
					/>
				</div>
				<div className='bg-secondary rounded-full w-36 h-36' />
			</div>
			{/* Central */}
			<div className='text-5xl lg:text-8xl text-center flex flex-col items-center gap-4 2xl:px-14 '>
				<p className='text-secondary'>En pro de los</p>
				<p className='text-primary font-bold'>Derechos Humanos</p>
				<p className='text-lg text-gray-400 w-1/2 m-4'>
					Desde 1995, nuestra organización ha luchado por proteger los derechos
					de los grupos vulnerables en México.{" "}
				</p>
				<div className='text-base'>
					<KnowMoreButton />
				</div>
			</div>
			<div className='h-fit w-96 flex flex-col justify-center items-center flex-shrink gap-y-16'>
				<div className='bg-primary rounded-full w-36 h-36' />

				<div className='bg-primary w-5/6 h-96 rounded-3xl relative'>
					<Image
						src='https://placehold.co/277x377/png'
						alt='right-side-image'
						fill={true}
						style={{ objectFit: "cover" }}
						className='bg-cover relative rounded-3xl'
					/>
				</div>
				<div className='w-full h-20 bg-primary relative'>
					<div className='absolute top-0 left-32 w-full h-full bg-primary ' />
					<div className='absolute top-0 right-32 w-full h-full bg-primary rounded-b-full' />
				</div>
			</div>
		</div>
	);
};

const AboutUs = () => {
	return (
		<div>
			<div className='flex flex-col min-h-screen'>
				<Header />
				<Us />
			</div>
			<Terms />
		</div>
	);
};

export default AboutUs;
