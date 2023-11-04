'use client';

import React from 'react';
import Image from 'next/image';

import { signOut } from 'next-auth/react';
import menuIcon from '../../public/images/icons/navbar-icons/menu-icon.svg';
import messengerIcon from '../../public/images/icons/navbar-icons/messenger-icon.svg';
import notificationIcon from '../../public/images/icons/navbar-icons/notification-icon.svg';
import profileIcon from '../../public/images/icons/navbar-icons/profile-image.jpg';

const RightNav = () => {
	return (
		<div className="flex my-auto gap-2 border-solid border-zinc-900 mr-3">
			<div className="bg-gray-200 h-10 w-10 flex justify-center rounded-full">
				<Image src={menuIcon} alt="menu icon" width={22} height={22} />
			</div>
			<div className="bg-gray-200 h-10 w-10 flex justify-center rounded-full">
				<Image
					src={messengerIcon}
					alt="messenger icon"
					width={22}
					height={22}
				/>
			</div>
			<div className="bg-gray-200 h-10 w-10 flex justify-center rounded-full">
				<Image
					src={notificationIcon}
					alt="notification icon"
					width={22}
					height={22}
				/>
			</div>
			<div className="bg-gray-200 h-10 w-10 flex justify-center rounded-full">
				<button onClick={() => signOut()}>
					<Image
						src={profileIcon}
						alt="facebook icon"
						width={100}
						height={100}
						className="rounded-full"
					/>
				</button>
			</div>
		</div>
	);
};

export default RightNav;
