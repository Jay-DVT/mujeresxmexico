import "../app/styles/globals.css";
import Header from "@/app/components/Header";
import Terms from "@/app/components/Terms";
import Head from "next/head";
import React from "react";

interface TestimonialCardProps {
	key: number;
	color: string;
	name: string;
	testimonial: string;
}

const TestimonialCard = (props: TestimonialCardProps) => {
	return (
		<div
			className={`bg-${props.color} h-fit flex flex-col justify-center mx-24 rounded-2xl mb-8 w-5/6 md:w-1/2`}
		>
			<div>
				<p className='text-2xl text-white font-semibold p-4'>
					De: {props.name}
				</p>
			</div>
			<div className='overflow-clip mx-4 mb-6 rounded-2xl '>
				<p className='bg-white p-4 text-lg'>{props.testimonial}</p>
			</div>
		</div>
	);
};

export default function Testimonials() {
	const testimonials = [
		{
			key: 1,
			color: "primary",
			name: "Luisa",
			testimonial:
				"La organización me ayudó bastante en el proceso de mi demanda. Mi caso cerro hace unas semanas y estoy realmente agradecida con las mujeres que forman parte de esta organización que me acompañaron en cada paso de mi proceso. Mujeres, no se queden calladas!! Luchen por sus derechos y por la vida que se merecen.",
		},
		{
			key: 2,
			color: "secondary",
			name: "María",
			testimonial:
				"La organización me ayudó bastante en el proceso de mi demanda. Mi caso cerro hace unas semanas y estoy realmente agradecida con las mujeres que forman parte de esta organización que me acompañaron en cada paso de mi proceso. Mujeres, no se queden calladas!! Luchen por sus derechos y por la vida que se merecen.",
		},
	];

	return (
		<main className='flex min-h-screen  flex-col items-center'>
			<Head>
				<title>Testimonios </title>
			</Head>
			<Header />
			<div className='flex items-center justify-center h-fit'>
				<div className='flex flex-col items-center gap-5 p-24'>
					<p className='font-semibold text-6xl'>NO ESTÁS SOLA</p>
					<p className='text-gray-400 text-center'>
						Usa tu voz y compartenos tu experiencia. <br /> Esto nos ayudará a
						empoderar a más muejeres a luchar por sus derechos <br /> y por una
						vida digna para todas.
					</p>
					<button className='bg-primary rounded-full text-white px-4 py-2 mt-4'>
						Compartir tu experiencia
					</button>
				</div>
			</div>
			{testimonials.map((testimonial) => (
				<TestimonialCard
					color={testimonial.color}
					name={testimonial.name}
					testimonial={testimonial.testimonial}
					key={testimonial.key}
				/>
			))}
			<Terms />
		</main>
	);
}
