import Terms from "@/app/components/Terms";
import "../app/styles/globals.css";
import Header from "@/app/components/Header";
import Head from "next/head";
import Image from "next/image";
import React from "react";

interface BlogCardProps {
	image: string;
	title: string;
}

const BlogCard = (props: BlogCardProps) => {
	return (
		<div className='w-full pb-6 text-center '>
			<a href=''>
				<div className='flex justify-center items-center'>
					<div className='xl:w-96 relative xl:h-72 mb-4 w-[200px] h-[150px]'>
						<Image
							src={`/Image/${props.image}`}
							alt={props.title}
							fill={true}
							className='rounded-3xl'
						/>
					</div>
				</div>
				<div className='flex justify-center'>
					<div className='w-5/6 lg:text-2xl text-xl font-semibold'>
						{props.title}
					</div>
				</div>
			</a>
		</div>
	);
};

export default function Testimonials() {
	const blogCards = [
		{
			image: "10ce0bdfec1780ef49f055d88489deb8.jpeg",
			title: "Tipos de violencia y como identificarlas",
		},
		{
			image: "48541d2bb64b1f0d7fc4168ed3739e9c.jpeg",
			title: "¿Qué es el feminismo? Mitos y Verdades",
		},
		{
			image: "1572347985879IgualdadEstandar.jpeg",
			title: "¿Qué es la igualdad de género?",
		},
		{
			image: "78598bc2099ead6387dad9fbd0d5b427.jpeg",
			title: "Medidas de prevención ante la violencia",
		},
		{
			image: "171bd3fd80ac8a4a97ff05f307149c7e.jpeg",
			title: "¿Cuáles son mis derechos? ¿Cómo los protejo?",
		},
		{
			image: "por-qué-es-importante-la-dignidad.jpeg",
			title: "¿Qué es la dignidad humana?",
		},
	];

	return (
		<main className='flex min-h-screen  flex-col items-center'>
			<Head>
				<title>Blog</title>
			</Head>
			<Header />
			<div className='flex items-center justify-center h-fit'>
				<div className='flex flex-col items-center gap-5 px-24 pb-12 md:p-24 pt-245'>
					<p className='font-semibold text-6xl text-primary text-center'>
						Blog Educativo
					</p>
					<p className='text-gray-400 text-center'>
						Creamos este espacio para compartirle información que es sumamente
						importante conocer.
					</p>
				</div>
			</div>
			<div className='grid grid-cols-2 md:grid-cols-3 w-screen  md:w-5/6 mb-7 '>
				{blogCards.map((card) => (
					<BlogCard image={card.image} title={card.title} key={card.title} />
				))}
			</div>
			<Terms />
		</main>
	);
}
