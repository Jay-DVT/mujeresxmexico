import Link from "next/link";

function ContactButton() {
	return (
		<Link href='/sobre-nosotras' className='w-fit'>
			<button className='bg-primary text-white rounded-full py-2 px-5 w-fit'>
				Conocer más
			</button>
		</Link>
	);
}

export default ContactButton;
