import Image from "next/image";
import ContactButton from "./buttons/ContactButton";
import Link from "next/link";

const Header = () => {
	return (
		<header className='flex flex-col w-full flex-shrink-0 '>
			<div className='w-full relative h-1 md:hidden'>
				<Image
					src='/Sidebar.png'
					width={40}
					height={40}
					alt='Mujeres por Mexico menu'
					className='absolute top-5 right-5 z-0'
				/>
			</div>
			<div className='hidden md:flex justify-between h-24 px-3 lg:px-20 lg:gap-x-6 lg:text-base text-sm'>
				<nav className='flex h-full items-center px-8 '>
					<Link href='/'>
						<Image
							src='/favicon.png'
							alt='Mujeres por Mexico'
							width={60}
							height={60}
						/>
					</Link>
					<a
						href='sobre-nosotras'
						className='  hover:bg-slate-400 hover:bg-opacity-30 h-full px-3 flex items-center font-bold ml-4'
					>
						Quiénes somos
					</a>
					<a
						href='blog'
						className=' font-medium text-slate-500 hover:bg-slate-400 hover:bg-opacity-30 h-full px-3 flex items-center'
					>
						Blog
					</a>
					<a
						href='testimonios'
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
