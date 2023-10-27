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
// import profileIcon from '../../public/images/icons/navbar-icons/facebook-icon.svg';

const Navbar = () => {
	return (
		<div className="border nav-background">
			<div className="flex">
				<Image src={facebookIcon} alt="facebook icon" width={50} height={50} />
				<div className="input-background">
					<Image
						src={searchIcon}
						alt="search icon"
						width={15}
						height={15}
						className="left-margin"
					/>
					<input type="text" placeholder="Search Fakesbook" />
				</div>
			</div>
			<div className="gap">
				<div className="icon-background" width={50} height={50}>
					<Image src={menuIcon} alt="facebook icon" width={18} height={18} />
				</div>
				<div className="icon-background" width={50} height={50}>
					<Image
						src={messengerIcon}
						alt="facebook icon"
						width={18}
						height={18}
					/>
				</div>
				<div className="icon-background" width={50} height={50}>
					<Image
						src={notificationIcon}
						alt="facebook icon"
						width={18}
						height={18}
					/>
				</div>
				<div className="icon-background" width={50} height={50}>
					<Image
						src={facebookIcon}
						alt="facebook icon"
						width={18}
						height={18}
					/>
				</div>
			</div>
			<div className="absolute gap-large">
				<Image src={homeIcon} alt="facebook icon" width={25} height={25} />
				<Image src={videoIcon} alt="facebook icon" width={25} height={25} />
				<Image src={marketIcon} alt="facebook icon" width={25} height={25} />
				<Image src={gamingIcon} alt="facebook icon" width={25} height={25} />
			</div>
		</div>
	);
};

export default Navbar;
