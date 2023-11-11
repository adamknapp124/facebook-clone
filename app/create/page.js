'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import profileIcon from '../../public/images/icons/navbar-icons/profile-image.jpg';
import videoIcon from '../../public/images/icons/sidenav-icons/video-icon.svg';
import photoIcon from '../../public/images/icons/sidenav-icons/video-icon.svg';
import smileyIcon from '../../public/images/icons/sidenav-icons/video-icon.svg';

const CreatePost = () => {
	// const currentDate = new Date();
	const { data: session, status } = useSession();
	const [toggled, setToggled] = useState(false);
	const router = useRouter();
	const [data, setData] = useState({
		body: '',
		image: '',
		authorId: session?.user?.id,
		// publishedAt: currentDate,
	});

	function handleToggleUploader() {
		setToggled(!toggled);
	}

	const savePost = async (e) => {
		e.preventDefault();
		console.log('session user: ', session.user);
		console.log('users posts: ', session?.user?.posts);
		const response = await fetch('/api/createPost', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({ data }),
		});
		if (!response.ok) {
			// Handle non-successful response (e.g., server error, bad request)
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const postData = await response.json();
		console.log(postData);
		// router.push('/');
	};

	return (
		<form onSubmit={savePost} className="pt-4">
			<div className="mx-auto p-3 flex flex-col w-full gap-2 shadow-md bg-white rounded-lg">
				<div className=" flex justify-center my-auto gap-3">
					<div className="my-auto">
						<Image
							src={profileIcon}
							alt="profile icon"
							className="rounded-full"
							width={35}
							height={35}
						/>
					</div>
					<div className="bg-gray-100 rounded-full w-full flex pl-3 h-[40px]">
						<input
							type="text"
							name="body"
							id="body"
							value={data.body}
							onChange={(e) => setData({ ...data, body: e.target.value })}
							placeholder="What's on your mind?"
							className=" flex bg-transparent border-0 focus:ring-0 text-md w-full placeholder-gray-500"
						/>
					</div>
				</div>
				<hr></hr>
				<div>
					{toggled ? (
						<div className="w-full h-[200px] flex flex-col justify-center items-center border-2 border-dashed rounded-md">
							<label
								className="w-full h-full flex flex-col items-center justify-center cursor-pointer"
								htmlFor="media">
								Click here to select an Image or Video to upload
							</label>
							<input
								type="file"
								id="media"
								name="media"
								value={data.image}
								onChange={(e) => setData({ ...data, image: e.target.value })}
								accept="image/png, image/jpeg"
								className="hidden"
							/>
						</div>
					) : null}
					<div>
						<div className="flex my-auto justify-around h-[40px]">
							<div className="flex gap-1.5 text-gray-400 text-sm font-semibold">
								<Image src={videoIcon} alt="" height={25} width={25} />
								<div className="flex my-auto">Live Video</div>
							</div>
							<button onClick={handleToggleUploader}>
								<div className="flex gap-1.5 text-gray-400 text-sm font-semibold">
									<Image src={photoIcon} alt="" height={25} width={25} />
									<div className="flex my-auto">Photo/Video</div>
								</div>
							</button>
							<div className="flex gap-1.5 text-gray-400 text-sm font-semibold">
								<Image src={smileyIcon} alt="" height={25} width={25} />
								<div className="flex my-auto">Feeling/Activity</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};

export default CreatePost;
