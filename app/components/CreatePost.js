import React from 'react';
import Image from 'next/image';

import profileIcon from '../../public/images/icons/navbar-icons/facebook-icon.svg';
import videoIcon from '../../public/images/icons/sidenav-icons/video-icon.svg';
import photoIcon from '../../public/images/icons/sidenav-icons/video-icon.svg';
import smileyIcon from '../../public/images/icons/sidenav-icons/video-icon.svg';

const CreatePost = () => {
	return (
		<div className="mx-auto p-3 flex flex-col gap-2 w-[500px] shadow-md bg-white rounded-lg">
			<div className="h-100 w-100 flex justify-center my-auto gap-3">
				<div className="my-auto">
					<Image src={profileIcon} alt="profile icon" height={40} width={40} />
				</div>
				<div className="bg-gray-200 rounded-full flex pl-3 h-[40px]">
					<input
						type="text"
						placeholder="What's on your mind, User?"
						className="flex bg-transparent text-md w-[420px]"
					/>
				</div>
			</div>
			<hr></hr>
			<div className="flex my-auto justify-around h-[40px]">
				<div className="flex gap-1.5 text-gray-400 text-sm font-semibold">
					<Image src={videoIcon} alt="" height={25} width={25} />
					<div className="flex my-auto">Live Video</div>
				</div>
				<div className="flex gap-1.5 text-gray-400 text-sm font-semibold">
					<Image src={photoIcon} alt="" height={25} width={25} />
					<div className="flex my-auto">Photo/Video</div>
				</div>
				<div className="flex gap-1.5 text-gray-400 text-sm font-semibold">
					<Image src={smileyIcon} alt="" height={25} width={25} />
					<div className="flex my-auto">Feeling/Activity</div>
				</div>
			</div>
		</div>
	);
};

export default CreatePost;
