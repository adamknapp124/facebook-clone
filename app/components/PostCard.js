import React from 'react';
import Image from 'next/image';

import channelIcon from '../../public/images/icons/navbar-icons/profile-image.jpg';
import menuIcon from '../../public/images/icons/create-post-icons/menu-icon.svg';
import closeIcon from '../../public/images/icons/create-post-icons/close-icon.svg';
import friendsIcon from '../../public/images/icons/sidenav-icons/friends-icon.svg';

import postCard1 from '../../public/images/post-card-images/card-image.jpg';
import messageBubble from '../../public/images/icons/post-icons/message-bubble-icon.svg';

const PostCard = () => {
	return (
		<div className="rounded-b-md">
			<div className="p-4 mx-auto w-[500px] shadow-md bg-white rounded-t-md flex flex-col gap-5">
				<div className="flex gap-3 justify-between">
					<div className="flex gap-2">
						<Image
							src={channelIcon}
							alt=""
							height={35}
							width={35}
							className="rounded-md"
						/>
						<div className="flex flex-col">
							<div className="text-black text-sm font-medium">
								PC Gaming and Building Enthusiasts
							</div>
							<div className="flex gap-1">
								<div className="text-xs font-medium text-zinc-600">
									KaeWen Wei ·
								</div>
								<div className="text-xs">2h ·</div>
								<Image src={friendsIcon} alt="" width={14} height={14} />
							</div>
						</div>
					</div>
					<div className="flex gap-5">
						<Image src={menuIcon} alt="" width={20} height={20} />
						<Image src={closeIcon} alt="" width={20} height={20} />
					</div>
				</div>
				<div className="text-md">
					After two days it is finally done! Lets test this beast
				</div>
			</div>
			<div className="mx-auto w-[500px]">
				<Image src={postCard1} alt="" className="w-full h-auto" />
			</div>
			<div className="p-3 w-[500px] mx-auto flex gap-1 justify-end bg-white rounded-b-md shadow-md">
				<div className="my-auto">2</div>
				<Image src={messageBubble} alt="" width={18} height={18} className="" />
			</div>
		</div>
	);
};

export default PostCard;
