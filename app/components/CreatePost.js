import { useState } from 'react';
import Image from 'next/image';

import profileIcon from '../../public/images/icons/navbar-icons/profile-image.jpg';
import videoIcon from '../../public/images/icons/sidenav-icons/video-icon.svg';
import photoIcon from '../../public/images/icons/sidenav-icons/video-icon.svg';
import smileyIcon from '../../public/images/icons/sidenav-icons/video-icon.svg';

const CreatePost = () => {
	const [toggled, setToggled] = useState(false);
	function handleToggleUploader() {
		setToggled(!toggled);
	}
	return (
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
						placeholder="What's on your mind, User?"
						className=" flex bg-transparent text-md w-full placeholder-gray-500"
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
	);
};

export default CreatePost;
