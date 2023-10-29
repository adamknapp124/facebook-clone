import React from 'react';

const Login = () => {
	return (
		<section className="flex mx-auto justify-between max-w-[980px] h-screen">
			<form className="my-auto flex flex-col gap-6">
				<div className="flex flex-col">
					<div className="text-4xl font-extrabold my-2 text-[#1877f2]">
						facebook
					</div>
					<div className="text-2xl font-medium">Login as a guest</div>
					<div className="text-sm">Click guest or create an account</div>
				</div>
				<div className="flex gap-5">
					<div className="w-[160px] h-[200px] border-2 rounded-lg"></div>
					<div className="w-[160px] h-[200px] border-2 rounded-lg"></div>
				</div>
			</form>
			<form className="flex">
				<div className="w-[380px] my-auto shadow-lg rounded-lg p-4 bg-white flex flex-col gap-4">
					<input
						type="text"
						placeholder="Email or phone number"
						className="p-3.5 border-2 rounded-lg outline-[#1877f2]"
					/>
					<input
						type="password"
						placeholder="Password"
						className="p-3.5 border-2 rounded-lg outline-[#1877f2]"
					/>
					<button className="py-3 bg-[#1877f2] rounded-md text-xl font-semibold text-white">
						Log In
					</button>
					<div className="mx-auto text-sm">Forgot password?</div>
					<hr />
					<button
						type="submit"
						className="mx-auto rounded-lg bg px-4 py-2.5 text-lg font-semibold text-white bg-[#42b72a]">
						Create new account
					</button>
				</div>
			</form>
		</section>
	);
};

export default Login;
