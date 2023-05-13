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
		<main className='flex min-h-screen h-screen flex-col items-center'>
			<Head>
				<title>Iniciar sesión</title>
			</Head>
			<div className=''>
				<form onSubmit={handleSubmit} className='w-64'>
					<input
						type='text'
						placeholder='Folio'
						value={invoice}
						onChange={(e) => setInvoice(e.target.value)}
						className='border border-gray-300 rounded-md p-2 mb-2 w-full'
					/>
					<input
						type='password'
						placeholder='Contraseña'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className='border border-gray-300 rounded-md p-2 mb-2 w-full'
					/>
					{error && <p className='text-red-500 mb-2'>{error}</p>}
					<button
						type='submit'
						className='bg-primary hover:bg-secondary text-white font-semibold py-2 px-4 rounded-md'
					>
						Iniciar sesión
					</button>
				</form>
			</div>
		</main>
	);
}
export default SignIn;
