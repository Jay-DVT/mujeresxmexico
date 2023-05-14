import Head from "next/head";
import Image from "next/image";
import React from "react";

import Terms from "./components/Terms";
import Header from "./components/Header";
import ContactButton from "./components/buttons/ContactButton";
import KnowMoreButton from "./components/buttons/KnowMoreButton";

const Hero = () => {
	return (
		<div className='flex flex-grow justify-center md:inline-flex flex-col md:flex-row'>
			<div className='flex flex-col  justify-center text-left  md:w-1/2 items-center '>
				<div className='md:w-3/4 lg:ml-48 md:pr-36 md:h-96 flex flex-col justify-evenly md:p-0 p-4 h-fit'>
					<span className='uppercase'>Mujeres x MÉxico CUU</span>
					<br />
					<div className='flex flex-col gap-y-3'>
						<div>
							<span className='text-4xl md:text-6xl font-semibold'>
								Vive una vida libre, mujer.
							</span>
						</div>
						<div>
							<span className='text-base md:text-xl text-slate-500'>
								Somos una organización defensora de los derechos humanos. Te
								brindamos asesoría jurídica y acompañamiento durante tu proceso.
							</span>
						</div>
					</div>
					<br />
					<ContactButton />
				</div>
			</div>
			<div className='flex items-center justify-center md:justify-start lg:h-fill lg:w-1/2 '>
				<Image
					src='/Container.svg'
					height={700}
					width={700}
					alt='Mosaico'
					priority
					className='hidden md:block'
				/>
			</div>
		</div>
	);
};

const AboutUs = () => {
	return (
		<div className='flex bg-secondary h-full items-center '>
			<div className='hidden md:flex items-center justify-end lg:h-fill lg:w-1/2 pr-12 flex-shrink-0 '>
				<Image src='/about_us.svg' height={650} width={650} alt='Mosaico' />
			</div>
			<div className=' text-white flex flex-col justify-evenly md:mx-28 md:pr-56 md:p-0 p-6'>
				<span className='uppercase text-sm'>QUIÉNES SOMOS</span>
				<br />
				<div className='flex flex-col gap-y-3'>
					<div>
						<span className='text-3xl md:text-6xl font-semibold'>
							Trabajamos por los derechos de las mujeres en México.
						</span>
					</div>
					<div>
						<span className='text-sm md:text-base'>
							Mujeres por México en Chihuahua, A.C., nace en 1995 con un gran
							compromiso social, especialmente con los grupos más
							vulnerables.Trabajamos y luchamos por la formación integral de las
							personas mediante la promoción, difusión y defensa de los derechos
							humanos. Somos una Organización Civil incluyente y plural, no
							partidista y sin fines de lucro intregrada por mujeres.
							#NoEstasSola
						</span>
					</div>
				</div>
				<br />
				<KnowMoreButton />
			</div>
		</div>
	);
};

const Community = () => {
	return (
		<div className='flex flex-col md:pb-0 pb-5'>
			<div className='text-secondary font-semibold text-3xl md:text-6xl text-center md:py-20 py-10'>
				Únete a la comunidad
			</div>
			<div className='flex gap-x-20 justify-center pb-20 md:flex-row flex-col gap-y-5'>
				<a href='testimonios'>
					<div
						className='md:h-72 h-32 md:w-[530px] rounded-3xl text-white flex items-center justify-center cursor-pointer overflow-hidden relative'
						style={{
							backgroundImage: `url(/Image/df90237f-f92c-47a8-a71b-8a5d4f885180.jpg)`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					>
						<div className='rounded-3xl text-3xl font-semibold z-10'>
							Testimonios
						</div>
					</div>
				</a>
				<a href='blog'>
					<div
						className='md:h-72 h-32 md:w-[530px] rounded-3xl text-white flex items-center justify-center cursor-pointer overflow-hidden relative'
						style={{
							backgroundImage: `url(/Image/7b88dbf9-bd4d-4b8d-83d7-9df8e713f2d7.jpg)`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					>
						<div className='rounded-3xl text-3xl font-semibold z-10'>
							Blog Educativo
						</div>
					</div>
				</a>
			</div>
		</div>
	);
};

const Contact = () => {
	return (
		<div className='flex justify-center items-center mb-6'>
			<div className='flex bg-slate-100  rounded-2xl p-14 gap-6 md:gap-12 md:flex-row flex-col-reverse justify-center items-center'>
				<div className='flex flex-col  gap-3 '>
					<div className='text-2xl md:text-5xl font-bold'>Contáctanos</div>
					<div className='leading-none text-gray-500 flex flex-col gap-2 text-base md:text-xl'>
						<div>
							<span className='font-bold italic'>
								Oficinas: <br />
							</span>
							C. Ignacio Allende #419 <br />
							Col. Centro, C.P 31000 <br />
							Chihuahua, Chih. MX <br />
							Tel. (614) 410 10 19 <br />
						</div>
						<div>
							<span className='font-bold italic'>
								Modulo de Atención a Víctimas <br />
							</span>
							Centro de Justicia para las Mujeres (CEJUM) <br />
							Edificio Paloma Angélica Escobar Ledezma <br />
							C.51° y Rosales #1203 <br />
							Tel. (614) 429 33 00 ext. 10747 <br />
							Whatsapp (614) 128 31 10
						</div>
					</div>
				</div>
				<div className='md:w-96 w-64'>
					<Image
						src='/logo_descless.png'
						alt='Mujeres por Mexico'
						width={612}
						height={444}
					/>
				</div>
			</div>
		</div>
	);
};

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center'>
			<div className='flex flex-col h-screen 	'>
				<Header />
				<Hero />
			</div>
			<div className='h-screen'>
				<AboutUs />
			</div>
			<Community />
			<Contact />
			<Terms />
		</main>
	);
}
