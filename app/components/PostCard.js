import React from 'react';
import Image from 'next/image';

import channelIcon from '../../public/images/icons/navbar-icons/profile-image.jpg';
import menuIcon from '../../public/images/icons/create-post-icons/menu-icon.svg';
import closeIcon from '../../public/images/icons/create-post-icons/close-icon.svg';
import friendsIcon from '../../public/images/icons/sidenav-icons/friends-icon.svg';

const PostCard = () => {
	return (
		<div className="p-4 mx-auto w-[500px] shadow-md bg-white rounded-md flex flex-col gap-5">
			<div className="flex gap-2 justify-between">
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
								KaeWen Wei
							</div>
							<div className="text-xs">2h</div>
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
				After two days it is finall done! Lets test this beast
			</div>
		</div>
	);
};

export default PostCard;
