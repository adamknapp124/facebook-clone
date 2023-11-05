import React from 'react';
import Image from 'next/image';

import profileIcon from '../../public/images/icons/navbar-icons/profile-image.jpg';

import searchIcon from '../../public/images/icons/navbar-icons/search-icon.svg';
import menuIcon from '../../public/images/icons/create-post-icons/menu-icon.svg';

const ContactPanel = () => {
	return (
		<div className="flex flex-col gap-3 p-6  w-[300px] h-screen hover:overflow-y-scroll bg-gray-100 fixed right-[650px]">
			<div className="flex justify-between w-full">
				<div className="text-md font-semibold text-zinc-600">Contacts</div>
				<div className="flex justify-end pr-4 gap-5">
					<Image src={searchIcon} alt="" width={14} height={14} />
					<Image src={menuIcon} alt="" width={14} height={14} />
				</div>
			</div>
			<ul className="flex flex-col gap-2">
				<li className="flex hover:bg-gray-200 rounded-l-md pl-2.5 pt-1.5 pb-1 gap-3 text-md font-medium">
					<Image
						src={profileIcon}
						alt="profile image"
						width={35}
						height={35}
						className="rounded-full"
					/>
					<div className="font-medium font-semibold my-auto">Adam Knapp</div>
				</li>
				<li className="flex hover:bg-gray-200 rounded-l-md pl-2.5 pt-1.5 pb-1 gap-3 text-md font-medium">
					<Image
						src={profileIcon}
						alt="profile image"
						width={35}
						height={35}
						className="rounded-full"
					/>
					<div className="font-medium font-semibold my-auto">Adam Knapp</div>
				</li>
				<li className="flex hover:bg-gray-200 rounded-l-md pl-2.5 pt-1.5 pb-1 gap-3 text-md font-medium">
					<Image
						src={profileIcon}
						alt="profile image"
						width={35}
						height={35}
						className="rounded-full"
					/>
					<div className="font-medium font-semibold my-auto">Adam Knapp</div>
				</li>
				<li className="flex hover:bg-gray-200 rounded-l-md pl-2.5 pt-1.5 pb-1 gap-3 text-md font-medium">
					<Image
						src={profileIcon}
						alt="profile image"
						width={35}
						height={35}
						className="rounded-full"
					/>
					<div className="font-medium font-semibold my-auto">
						Steven Gillespie
					</div>
				</li>
			</ul>
		</div>
	);
};

export default ContactPanel;
