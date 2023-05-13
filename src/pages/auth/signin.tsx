import { useState } from "react";
import { useRouter } from "next/router";
import "../../app/styles/globals.css";
import Head from "next/head";

interface Props {}

function SignIn(props: Props) {
	const router = useRouter();
	const [invoice, setInvoice] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		try {
			const response = await fetch("/api/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ invoice, password }),
			});

			if (response.ok) {
				router.push("/dashboard"); // Redirect to the dashboard or any other protected route
			} else {
				setError("Credentials are invalid");
			}
		} catch (error) {
			setError("Something went wrong with sign in");
			console.error(error);
		}
	}

	return (
		<main className='flex h-screen items-center justify-center'>
			<Head>
				<title>Iniciar sesión</title>
			</Head>
			<div className='border-2 p-7 border-secondary rounded-lg max-w-lg'>
				<div>
					<h1 className='text-2xl font-semibold'>Iniciar sesión</h1>
					<p className='mb-5 text-gray-500'>
						Ingresa tu folio y contraseña para <br /> acceder al seguimiento de
						tu caso
					</p>
				</div>
				<form onSubmit={handleSubmit} className='w-64 flex flex-col gap-2'>
					<input
						type='text'
						placeholder='Folio-Clave'
						value={invoice}
						onChange={(e) => setInvoice(e.target.value)}
						autoFocus
						className='border border-gray-300 rounded-md p-2 mb-2 w-full focus:outline-none focus:border-secondary'
					/>
					<input
						type='password'
						placeholder='Contraseña'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className='border border-gray-300 rounded-md p-2 mb-2 w-full focus:outline-none focus:border-secondary'
					/>
					<button
						type='submit'
						className='bg-primary hover:bg-secondary text-white font-semibold py-2 px-4 rounded-md '
					>
						Iniciar sesión
					</button>
				</form>
			</div>
		</main>
	);
}
export default SignIn;
