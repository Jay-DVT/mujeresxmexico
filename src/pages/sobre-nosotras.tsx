import "../app/styles/globals.css";
import Image from "next/image";

import Header from "../app/components/Header";
import Terms from "../app/components/Terms";
import KnowMoreButton from "../app/components/Buttons/KnowMoreButton";
import Head from "next/head";

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
						className='bg-cover relative rounded-3xl z-20'
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
						className='bg-cover relative rounded-3xl z-20'
					/>
				</div>
				<div className='w-full h-20 bg-primary relative '>
					<div className='absolute top-0 left-32 w-full h-full bg-primary ' />
					<div className='absolute top-0 right-32 w-full h-full bg-primary rounded-b-full' />
				</div>
			</div>
		</div>
	);
};

const Objectives = () => {
	return (
		<div className='flex flex-col gap-y-10 m-12 pb-12'>
			<div className='flex  '>
				<div className='flex-grow w-full'>
					<div className='bg-primary rounded-3xl relative w-[630px] h-[460px] m-12 '>
						<Image
							src='https://placehold.co/630x460/png'
							alt='right-side-image'
							fill={true}
							style={{ objectFit: "cover" }}
							className='bg-cover relative rounded-3xl z-20 '
						/>
						<div className='bg-primary rounded-3xl absolute w-[630px] h-[460px] z-10 top-14 right-14' />
					</div>
				</div>
				<div className='flex-shrink flex justify-center flex-col '>
					<p className='text-4xl font-semibold text-primary'>Misión</p>
					<p className='w-3/4 '>
						Contribuir a una sociedad bien informada, organizada, participativa
						y responsable que influya en las decisiones que la afectan y pueda
						elevar su calidad de vida.
					</p>
				</div>
			</div>
			<div className='flex  '>
				<div className='flex-shrink flex justify-center flex-col ml-12 mr-16'>
					<p className='text-4xl font-semibold text-secondary'>
						Objetivo Social
					</p>
					<p className=''>
						Colaborar con organismos municipales, estatales, nacionales e
						internacionales con el propósito común de la defensa de los derechos
						humanos para una vida digna y libre de violencia.
					</p>
				</div>
				<div className='flex-grow '>
					<div className='bg-secondary rounded-3xl relative w-[630px] h-[460px] m-12 '>
						<Image
							src='https://placehold.co/630x460/png'
							alt='right-side-image'
							fill={true}
							style={{ objectFit: "cover" }}
							className='bg-cover relative rounded-3xl z-20 '
						/>
						<div className='bg-secondary rounded-3xl absolute w-[630px] h-[460px] z-10 top-14 right-14' />
					</div>
				</div>
			</div>
			<div className='flex  '>
				<div className='flex-grow w-full'>
					<div className='bg-primary rounded-3xl relative w-[630px] h-[460px] m-12 '>
						<Image
							src='https://placehold.co/630x460/png'
							alt='right-side-image'
							fill={true}
							style={{ objectFit: "cover" }}
							className='bg-cover relative rounded-3xl z-20 '
						/>
						<div className='bg-primary rounded-3xl absolute w-[630px] h-[460px] z-10 top-14 right-14' />
					</div>
				</div>
				<div className='flex-shrink flex justify-center flex-col '>
					<p className='text-4xl font-semibold text-primary'>
						Objetivo del Acompañamiento
					</p>
					<p className='w-3/4 '>
						Un proyecto muy importante apoyado por la FECHAC, A.C. es el
						Acompañamiento Solidario de Familias en Situación de Violencia con
						el objetivo de acceder a la justicia evitando la revictimización.{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

const AboutUs = () => {
	return (
		<main className='overflow-hidden'>
			<Head>
				<title>Sobre Nosotras</title>
			</Head>
			<div className='flex flex-col min-h-screen '>
				<Header />
				<Us />
			</div>
			<Objectives />
			<Terms />
		</main>
	);
};

export default AboutUs;
