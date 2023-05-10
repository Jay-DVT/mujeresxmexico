import Image from "next/image";

import React from "react";

function ContactButton() {
	return (
		<button className='bg-primary text-white rounded-full py-2 px-5 w-fit'>
			Contáctanos
		</button>
	);
}

const Header = () => {
	return (
		<header className='flex flex-col w-full flex-shrink-0 '>
			<div className='flex justify-between h-16 px-20 gap-x-6'>
				<nav className='flex h-full items-center px-8 '>
					<Image
						src='/logo.svg'
						alt='Mujeres por Mexico'
						width={60}
						height={60}
					/>
					<a
						href='#'
						className='  hover:bg-slate-400 hover:bg-opacity-30 h-full px-3 flex items-center font-bold'
					>
						Quiénes somos
					</a>
					<a
						href='#'
						className=' font-medium text-slate-500 hover:bg-slate-400 hover:bg-opacity-30 h-full px-3 flex items-center'
					>
						Blog
					</a>
					<a
						href='#'
						className=' font-medium text-slate-500 hover:bg-slate-400 hover:bg-opacity-30 h-full px-3 flex items-center '
					>
						Testimonios
					</a>
				</nav>
				<div className='flex h-full items-center px-8  gap-x-3'>
					<a
						href='#'
						className='  hover:bg-slate-400 hover:bg-opacity-30  p-2 flex items-center font-bold rounded-full'
					>
						Conoce tu caso
					</a>
					<ContactButton />
				</div>
			</div>
		</header>
	);
};

const Hero = () => {
	return (
		<div className='flex flex-grow justify-center '>
			<div className='flex flex-col  justify-center text-left  w-1/2 items-center '>
				<div className='w-3/4 lg:ml-48 pr-36 h-96 flex flex-col justify-evenly'>
					<span className='uppercase'>Mujeres x MÉxico CUU</span>
					<br />
					<div className='flex flex-col gap-y-3'>
						<div>
							<span className=' text-6xl font-semibold'>
								Vive una vida libre, mujer.
							</span>
						</div>
						<div>
							<span className=' text-xl text-slate-500'>
								Somos una organización defensora de los derechos humanos. Te
								brindamos asesoría jurídica y acompañamiento durante tu proceso.
							</span>
						</div>
					</div>
					<br />
					<ContactButton />
				</div>
			</div>
			<div className='flex items-center justify-start lg:h-fill lg:w-1/2 '>
				<Image src='/Container.svg' height={700} width={700} alt='Mosaico' />
			</div>
		</div>
	);
};

const AboutUs = () => {
	return (
		<div className='flex bg-secondary h-full items-center '>
			<div className='flex items-center justify-end lg:h-fill lg:w-1/2 pr-12 flex-shrink-0'>
				<Image src='/about_us.svg' height={650} width={650} alt='Mosaico' />
			</div>
			<div className=' text-white flex flex-col justify-evenly mx-28 pr-56'>
				<span className='uppercase text-sm'>QUIÉNES SOMOS</span>
				<br />
				<div className='flex flex-col gap-y-3'>
					<div>
						<span className=' text-6xl font-semibold'>
							Trabajamos por los derechos de las mujeres en México.
						</span>
					</div>
					<div>
						<span className=' text-base'>
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
				<ContactButton />
			</div>
		</div>
	);
};

const Community = () => {
	return (
		<div className='flex flex-col w-full '>
			<div className='text-secondary font-semibold text-6xl text-center py-20'>
				Únete a la comunidad
			</div>
			<div className='flex gap-x-20 justify-center pb-20'>
				<div className='lg:h-72 w-1/3 bg-slate-700 rounded-3xl  text-white flex items-center justify-center cursor-pointer'>
					<div className='rounded-3xl text-3xl font-semibold'>Testimonios</div>
				</div>
				<div className='lg:h-72 w-1/3 bg-slate-700 rounded-3xl  text-white flex items-center justify-center cursor-pointer'>
					<div className='rounded-3xl text-3xl font-semibold'>
						Blog Educativo
					</div>
				</div>
			</div>
		</div>
	);
};

const Contact = () => {
	return (
		<div className='flex justify-center items-center w-full'>
			<div className='flex bg-orange-100 m-72'>
				<div className='flex flex-col'>
					<div>Contáctanos</div>
					<div>
						Oficinas: C. Ignacio Allende #419 Col. Centro, C.P 31000 Chihuahua,
						Chih. MX Tel. (614) 410 10 19 Modulo de Atención a Víctimas Centro
						de Justicia para las Mujeres (CEJUM) Edificio PalomaAngélica Escobar
						Ledezma C.51° y Rosales #1203 Tel. (614) 429 33 00 ext. 10747
						Whatsapp (614) 128 31 10
					</div>
				</div>
				<div>
					<Image
						src='/logo.svg'
						alt='Mujeres por Mexico'
						width={60}
						height={60}
					/>
				</div>
			</div>
		</div>
	);
};

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center '>
			<div className='flex flex-col min-h-screen 	'>
				<Header />
				<Hero />
			</div>
			<div className='h-screen w-full'>
				<AboutUs />
			</div>
			<Community />
			<Contact />
		</main>
	);
}
