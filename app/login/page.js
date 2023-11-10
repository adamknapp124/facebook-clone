'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

import Image from 'next/image';

import guestImage from '../../public/images/post-card-images/card-image5.jpg';
import plusIcon from '../../public/images/icons/plus-icon.svg';

export default function LoginPage() {
	const router = useRouter();
	const [data, setData] = useState({
		email: '',
		password: '',
	});

	const loginUser = async (e) => {
		e.preventDefault();
		await signIn('credentials', { ...data, redirect: false });
		router.push('/');
	};

	return (
		<section className="flex mx-auto justify-between max-w-[980px] h-screen">
			<form className="my-auto flex flex-col gap-6">
				<div className="flex flex-col">
					<div className="text-4xl font-extrabold my-2 text-[#1877f2]">
						fakesbook
					</div>
					<div className="text-2xl font-medium">Login as a guest</div>
					<div className="text-sm text-gray-600">
						Click guest or create an account
					</div>
				</div>
				<div className="flex gap-5">
					<div className="w-[160px] h-[200px] border-2 rounded-lg hover:shadow-lg transition-all justify-between flex flex-col">
						<Image
							src={guestImage}
							alt="Picture of the author"
							className="object-cover h-3/4 rounded-t-lg"
						/>
						<div className="flex flex-grow rounded-b-lg my-auto justify-center h-100 items-center bg-white">
							Guest Login
						</div>
					</div>
					<div className="w-[160px] h-[200px] border-2 rounded-lg hover:shadow-lg transition-all justify-end flex flex-col">
						<div className="object-cover h-3/4 rounded-t-lg mx-auto flex justify-center">
							<Image src={plusIcon} alt="" />
						</div>
						<div className="flex flex-grow rounded-b-lg my-auto justify-center h-100 items-center bg-white">
							Create Account
						</div>
					</div>
				</div>
			</form>
			<form className="flex" onSubmit={loginUser}>
				<div className="w-[380px] my-auto shadow-lg rounded-lg p-4 bg-white flex flex-col gap-4">
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Email"
						required
						value={data.email}
						onChange={(e) => {
							setData({ ...data, email: e.target.value });
						}}
						className="p-3.5 border-2 rounded-lg outline-[#1877f2]"
					/>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Password"
						required
						value={data.password}
						onChange={(e) => {
							setData({ ...data, password: e.target.value });
						}}
						className="p-3.5 border-2 rounded-lg outline-[#1877f2]"
					/>

					<button
						type="submit"
						className="py-3 w-full bg-[#1877f2] rounded-md text-xl font-semibold text-white flex justify-center">
						Log In
					</button>
					<div className="mx-auto text-sm">Forgot password?</div>
					<hr />
					<button
						type="submit"
						className="mx-auto rounded-lg bg px-4 py-2.5 my-2 text-lg font-semibold text-white bg-[#42b72a]">
						<Link href="/register">Create new account</Link>
					</button>
				</div>
			</form>
		</section>
	);
}
