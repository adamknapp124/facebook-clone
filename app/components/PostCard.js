import React from 'react';
import Image from 'next/image';

import { useSession } from 'next-auth/react';

import channelIcon from '../../public/images/icons/navbar-icons/profile-image.jpg';
import menuIcon from '../../public/images/icons/create-post-icons/menu-icon.svg';
import closeIcon from '../../public/images/icons/create-post-icons/close-icon.svg';
import friendsIcon from '../../public/images/icons/sidenav-icons/friends-icon.svg';
import postCard1 from '../../public/images/post-card-images/card-image.jpg';

import messageBubble from '../../public/images/icons/post-icons/message-bubble-icon.svg';
import likeIcon from '../../public/images/icons/post-icons/like-icon.svg';
import loveIcon from '../../public/images/icons/post-icons/love-icon.svg';

import thumbIcon from '../../public/images/icons/post-icons/thumb-icon.svg';
import commentIcon from '../../public/images/icons/post-icons/comment-icon.svg';
import sendIcon from '../../public/images/icons/post-icons/send-icon.svg';

const PostCard = () => {
	const { data: session, status } = useSession();

	return (
		<div className="rounded-b-md w-min-fit">
			<div className="p-4 shadow-md bg-white rounded-t-md flex flex-col gap-5">
				<div className="flex gap-3 w-full justify-between">
					<div className="w-full flex justify-between gap-2">
						<div className="flex flex-col">
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
											{session.user.posts[0].body} ·
										</div>
										<div className="flex">
											<div className="text-xs">2h ·</div>
											<Image src={friendsIcon} alt="" width={14} height={14} />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="flex gap-3">
							<Image src={menuIcon} alt="" width={20} height={20} />
							<Image src={closeIcon} alt="" width={20} height={20} />
						</div>
					</div>
				</div>
				<div className="text-md">
					After two days it is finally done! Lets test this beast
				</div>
			</div>
			<div className="mx-auto w-full">
				<Image src={postCard1} alt="" className="flex" />
			</div>
			<div className="p-3 w-full mx-auto flex flex-col gap-1 justify-between bg-white rounded-b-md shadow-md">
				<div className="flex justify-between">
					<div className="flex gap-1">
						<Image src={likeIcon} alt="" width={18} height={18} className="" />
						<Image src={loveIcon} alt="" width={20} height={20} className="" />
					</div>
					<div className="flex gap-1">
						<div className="my-auto">2</div>
						<Image
							src={messageBubble}
							alt=""
							width={18}
							height={18}
							className=""
						/>
					</div>
				</div>
				<hr className="mt-2 pb-2"></hr>
				<div className="flex justify-around pl-2 pr-2">
					<div className="flex gap-2">
						<Image src={thumbIcon} alt="" width={24} height={24} />
						<div className="my-auto text-sm font-semibold text-gray-500">
							Like
						</div>
					</div>
					<div className="flex gap-2">
						<Image src={commentIcon} alt="" width={24} height={24} />
						<div className="my-auto text-sm font-semibold text-gray-500">
							Comment
						</div>
					</div>
					<div className="flex gap-2">
						<Image src={sendIcon} alt="" width={24} height={24} />
						<div className="my-auto text-sm font-semibold text-gray-500">
							Share
						</div>
					</div>
				</div>
				<hr className="mt-2 pb-2"></hr>
				<div className="flex gap-2">
					<div>
						<Image
							src={channelIcon}
							alt=""
							width={35}
							height={35}
							className="rounded-full"
						/>
					</div>
					<div>
						<div className="bg-gray-100 p-3 rounded-2xl w-[380px]">
							<div className="text-sm font-semibold text-gray-600">
								KaeWen Wei
							</div>
							<div className="text-md leading-5 text-gray-700">
								Damn I lost mine a while back I pulled something out of my
								pocket and the whole case fell out . I couldn’t track them but
								hopefully someone gets these back
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
