import Image from "next/image";
import ContactButton from "./Buttons/ContactButton";

const Header = () => {
	return (
		<header className='flex flex-col w-full flex-shrink-0 '>
			<div className='flex justify-between h-16 px-20 gap-x-6'>
				<nav className='flex h-full items-center px-8 '>
					<Image
						src='/logo.png'
						alt='Mujeres por Mexico'
						width={60}
						height={60}
					/>
					<a
						href='sobre-nosotras'
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

export default Header;
