import Image from "next/image";

const Terms = () => {
	return (
		<div className='bg-secondary flex justify-between text-white w-full p-32'>
			<div>
				<span>&#169;</span>
				Mujeres Por México CUU
			</div>
			<div>
				<ul className='overflow-hidden flex gap-4'>
					<li className='float-left mr-14'>Términos de Privacidad</li>
					<li>
						<a href='https://www.facebook.com'>
							<Image
								src='/Facebook.svg'
								width={24}
								height={24}
								alt='Facebook'
							/>
						</a>
					</li>
					<li>
						<a href='https://instagram.com'>
							<Image
								src='/Instagram.svg'
								width={24}
								height={24}
								alt='Instagram'
							/>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Terms;
