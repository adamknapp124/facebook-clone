import React from 'react';
import Image from 'next/image';

import facebookIcon from '../../public/images/icons/navbar-icons/facebook-icon.svg';
import searchIcon from '../../public/images/icons/navbar-icons/search-icon.svg';

import homeIcon from '../../public/images/icons/navbar-icons/home-icon.svg';
import videoIcon from '../../public/images/icons/navbar-icons/video-icon.svg';
import marketIcon from '../../public/images/icons/navbar-icons/market-icon.svg';
import gamingIcon from '../../public/images/icons/navbar-icons/gaming-icon.svg';

import menuIcon from '../../public/images/icons/navbar-icons/menu-icon.svg';
import messengerIcon from '../../public/images/icons/navbar-icons/messenger-icon.svg';
import notificationIcon from '../../public/images/icons/navbar-icons/notification-icon.svg';
import profileIcon from '../../public/images/icons/navbar-icons/profile-image.jpg';

const Navbar = () => {
	return (
		<div className="sticky-top">
			<div className="flex justify-between bg-white p-1 shadow-sm relative pl-3  z-20">
				<div className="flex flex-row align-middle h-100 w-100">
					<Image
						src={facebookIcon}
						alt="facebook icon"
						width={50}
						height={50}
						className=""
					/>
					<div className="flex justify-center my-auto gap-2 h-5/6 bg-gray-100 rounded-full">
						<Image
							src={searchIcon}
							alt="search icon"
							width={14}
							height={14}
							className="ml-3"
						/>
						<input
							type="text"
							placeholder="Search Fakesbook"
							className="bg-transparent text-sm outline-none"
						/>
					</div>
				</div>
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
						<Image
							src={profileIcon}
							alt="facebook icon"
							width={100}
							height={100}
							className="rounded-full"
						/>
					</div>
				</div>
				<div className="flex absolute bottom-0 left-0 right-0 top-0 m-auto justify-end h-full w-2/4">
					<div className="border-b-2 w-[60px] mx-auto my-auto">
						<Image src={homeIcon} alt="facebook icon" width={25} height={25} />
					</div>
					<div className="border-b-2 w-[60px] mx-auto my-auto">
						<Image src={videoIcon} alt="facebook icon" width={25} height={25} />
					</div>
					<div className="border-b-2 w-[60px] mx-auto my-auto">
						<Image
							src={marketIcon}
							alt="facebook icon"
							width={25}
							height={25}
						/>
					</div>
					<div className="border-b-2 w-[60px] mx-auto my-auto">
						<Image
							src={gamingIcon}
							alt="facebook icon"
							width={25}
							height={25}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
