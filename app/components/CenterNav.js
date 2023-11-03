'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import homeIcon from '../../public/images/icons/navbar-icons/home-icon.svg';

import videoIcon from '../../public/images/icons/navbar-icons/video-icon.svg';
import marketIcon from '../../public/images/icons/navbar-icons/market-icon.svg';
import gamingIcon from '../../public/images/icons/navbar-icons/gaming-icon.svg';
import Link from 'next/link';

const CenterNav = () => {
	const pathname = usePathname();
	return (
		<div className="flex absolute bottom-0 left-0 right-0 top-0 mx-auto justify-end h-full w-1/3">
			<Link
				href="/
				"
				className={`link ${
					pathname === '/'
						? 'h-full w-[100px] mx-auto my-auto relative flex items-center justify-center border-b-2 border-blue-700'
						: 'h-full w-[100px] mx-auto my-auto relative flex items-center justify-center'
				}`}>
				<Image src={homeIcon} alt="home icon" width={22} height={22} />
			</Link>
			<Link
				href="/video"
				className={`link ${
					pathname === '/video'
						? 'h-full w-[100px] mx-auto my-auto relative flex items-center justify-center border-b-2 border-blue-700'
						: 'h-full w-[100px] mx-auto my-auto relative flex items-center justify-center'
				}`}>
				<Image src={videoIcon} alt="video icon" width={22} height={22} />
			</Link>
			<Link
				href="/marketplace"
				className={`link ${
					pathname === '/marketplace'
						? 'h-full w-[100px] mx-auto my-auto relative flex items-center justify-center border-b-2 border-blue-700'
						: 'h-full w-[100px] mx-auto my-auto relative flex items-center justify-center'
				}`}>
				<Image src={marketIcon} alt="market icon" width={22} height={22} />
			</Link>
			<Link
				href="/games"
				className={`link ${
					pathname === '/games'
						? 'h-full w-[100px] mx-auto my-auto relative flex items-center justify-center border-b-2 border-blue-700'
						: 'h-full w-[100px] mx-auto my-auto relative flex items-center justify-center'
				}`}>
				<Image src={gamingIcon} alt="gaming icon" width={22} height={22} />
			</Link>
		</div>
	);
};

export default CenterNav;
