import React from 'react';
import Image from 'next/image';

import homeIcon from '../../public/images/icons/navbar-icons/home-icon.svg';
import videoIcon from '../../public/images/icons/navbar-icons/video-icon.svg';
import marketIcon from '../../public/images/icons/navbar-icons/market-icon.svg';
import gamingIcon from '../../public/images/icons/navbar-icons/gaming-icon.svg';

const CenterNav = () => {
	return (
		<div className="flex absolute bottom-0 left-0 right-0 top-0 mx-auto justify-end h-full w-1/3">
			<div className="h-full w-[100px] mx-auto my-auto relative flex items-center justify-center border-b-2 border-blue-700">
				<Image src={homeIcon} alt="home icon" width={22} height={22} />
			</div>
			<div className="border-b-2 active: h-full w-[100px] mx-auto my-auto relative flex items-center justify-center">
				<Image src={videoIcon} alt="video icon" width={22} height={22} />
			</div>
			<div className="border-b-2 h-full w-[100px] mx-auto my-auto relative flex items-center justify-center">
				<Image src={marketIcon} alt="market icon" width={22} height={22} />
			</div>
			<div className="border-b-2 h-full w-[100px] mx-auto my-auto relative flex items-center justify-center">
				<Image src={gamingIcon} alt="gaming icon" width={22} height={22} />
			</div>
		</div>
	);
};

export default CenterNav;
