import "../app/styles/globals.css";
import Image from "next/image";

import Header from "../app/components/Header";
import Terms from "../app/components/Terms";
import KnowMoreButton from "../app/components/buttons/KnowMoreButton";
import Head from "next/head";

const Us = () => {
	return (
		<div className='flex flex-grow justify-center items-center'>
			<div className='h-fit  hidden md:w-96 md:flex flex-col justify-center items-center flex-shrink gap-y-16'>
				<div className='w-full h-20 bg-secondary relative'>
					<div className='absolute top-0 right-32 w-full h-full bg-secondary ' />
					<div className='absolute top-0 left-32 w-full h-full bg-secondary rounded-t-full' />
				</div>
				<div
					className='bg-secondary w-5/6 h-96 rounded-3xl relative hidden md:block'
					style={{
						backgroundImage: `url(/Image/df90237f-f92c-47a8-a71b-8a5d4f885180.jpg)`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				></div>
				<div className='bg-secondary rounded-full w-36 h-36 md:block hidden' />
			</div>
			{/* Central */}
			<div className='text-5xl lg:text-8xl text-center flex flex-col items-center gap-4 2xl:px-14 '>
				<p className='text-primary'>
					Defendemos derechos <br />
					<span className='text-secondary'>
						Empoderamos mujeres <br />
					</span>
					Buscamos justicia
				</p>
				<p className='text-lg text-gray-400 w-1/2 m-4'>
					Desde 1995, nuestra organización ha luchado por proteger los derechos
					de los grupos vulnerables en México.{" "}
				</p>
				<div className='text-base'>
					<KnowMoreButton />
				</div>
			</div>
			<div className='h-fithidden md:w-96 md:flex flex-col justify-center items-center flex-shrink gap-y-16'>
				<div className='bg-primary rounded-full w-36 h-36 hidden md:block' />

				<div
					className='bg-primary w-5/6 h-96 rounded-3xl relative hidden md:block'
					style={{
						backgroundImage: `url(/Image/f920b122-84b8-46ec-ae13-a5c3d35b6911.jpg)`,
						backgroundSize: "cover",
						backgroundPosition: "start",
					}}
				></div>
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
		<div className=' grid grid-cols-1 md:grid-cols-2 mb-24'>
			<div className='bg-primary rounded-3xl relative lg:w-[630px] lg:h-[460px] lg:m-12 lg:ml-32 z-10 w-[274px] h-[200px] mx-auto my-5'>
				<div className='bg-primary rounded-3xl absolute lg:w-[630px] lg:h-[460px] z-0 lg:top-14 lg:right-14 top-3 right-3 w-[274px] h-[200px] lg:w-' />
				<div
					className='w-full h-full absolute z-20 rounded-3xl'
					style={{
						backgroundImage: `url(/Image/00ca22f2-08af-43d6-b57d-18a57736fdbe.jpg)`,
						backgroundSize: "cover",
						backgroundPosition: "start",
					}}
				></div>
			</div>
			<div className='flex flex-col items-center lg:items-start justify-center my-5'>
				<p className='text-4xl xl:text-6xl font-semibold text-primary'>
					Misión
				</p>
				<p className='w-3/4 lg:text-3xl py-5 text-center lg:text-left'>
					Contribuir a una sociedad bien informada, organizada, participativa y
					responsable que influya en las decisiones que la afectan y pueda
					elevar su calidad de vida.
				</p>
			</div>
			<div className='bg-secondary rounded-3xl relative lg:w-[630px] lg:h-[460px] lg:m-12 lg:ml-32 z-10 w-[274px] h-[200px] mx-auto my-5 lg:hidden block'>
				<div className='bg-secondary rounded-3xl absolute lg:w-[630px] lg:h-[460px] z-0 lg:top-14 lg:right-14 top-3 left-3 w-[274px] h-[200px]' />
				<div
					className='w-full h-full absolute z-20 rounded-3xl'
					style={{
						backgroundImage: `url(/Image/f1a16f72-5436-4929-a5a9-c7a0940f853c.jpg)`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				></div>
			</div>
			<div className='flex flex-col text-left justify-center lg:ml-28 items-center lg:items-start my-5 '>
				<p className='text-4xl xl:text-6xl font-semibold text-secondary'>
					Objetivo Social
				</p>
				<p className='xl:text-3xl py-5 w-3/4 text-center lg:text-left'>
					Colaborar con organismos municipales, estatales, nacionales e
					internacionales con el propósito común de la defensa de los derechos
					humanos para una vida digna y libre de violencia.
				</p>
			</div>
			<div className='bg-secondary rounded-3xl relative w-[630px] h-[460px] m-12 hidden lg:block '>
				<div className='bg-secondary rounded-3xl absolute w-[630px] h-[460px] z-0 top-14 right-14' />
				<div
					className='w-full h-full absolute z-20 rounded-3xl'
					style={{
						backgroundImage: `url(/Image/f1a16f72-5436-4929-a5a9-c7a0940f853c.jpg)`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				></div>
			</div>
			<div className='bg-primary rounded-3xl relative lg:w-[630px] lg:h-[460px] lg:m-12 lg:ml-32 z-10 w-[274px] h-[200px] mx-auto my-5'>
				<div className='bg-primary rounded-3xl absolute lg:w-[630px] lg:h-[460px] z-0 lg:top-14 lg:right-14 top-3 right-3 w-[274px] h-[200px]' />
				<div
					className='w-full h-full absolute z-20 rounded-3xl'
					style={{
						backgroundImage: `url(/Image/d24a56ec-6aee-4bf7-a676-9c7ab2a164ae.jpg)`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				></div>
			</div>
			<div className='flex flex-col items-center lg:items-center justify-center my-5 '>
				<p className='text-4xl xl:text-6xl font-semibold text-primary text-center lg:text-left'>
					Objetivo del Acompañamiento
				</p>
				<p className='w-3/4 xl:text-3xl py-5 text-center lg:text-left'>
					Un proyecto muy importante apoyado por la FECHAC, A.C. es el
					Acompañamiento Solidario de Familias en Situación de Violencia con el
					objetivo de acceder a la justicia evitando la revictimización.
				</p>
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
