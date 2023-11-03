'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import grayHome from '../../public/images/icons/navbar-icons/gray-home.svg';
import blueHome from '../../public/images/icons/navbar-icons/blue-home.svg';
import grayVideo from '../../public/images/icons/navbar-icons/gray-video.svg';
import blueVideo from '../../public/images/icons/navbar-icons/blue-video.svg';
import grayMarket from '../../public/images/icons/navbar-icons/gray-market.svg';
import blueMarket from '../../public/images/icons/navbar-icons/blue-market.svg';
import grayGaming from '../../public/images/icons/navbar-icons/gray-gaming.svg';
import blueGaming from '../../public/images/icons/navbar-icons/blue-gaming.svg';

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
				{pathname === '/' ? (
					<Image src={blueHome} alt="home icon" width={22} height={22} />
				) : (
					<Image src={grayHome} alt="home icon" width={22} height={22} />
				)}
			</Link>
			<Link
				href="/video"
				className={`link ${
					pathname === '/video'
						? 'h-full w-[100px] mx-auto my-auto relative flex items-center justify-center border-b-2 border-blue-700'
						: 'h-full w-[100px] mx-auto my-auto relative flex items-center justify-center'
				}`}>
				{pathname === '/video' ? (
					<Image src={blueVideo} alt="home icon" width={22} height={22} />
				) : (
					<Image src={grayVideo} alt="home icon" width={22} height={22} />
				)}
			</Link>
			<Link
				href="/marketplace"
				className={`link ${
					pathname === '/marketplace'
						? 'h-full w-[100px] mx-auto my-auto relative flex items-center justify-center border-b-2 border-blue-700'
						: 'h-full w-[100px] mx-auto my-auto relative flex items-center justify-center'
				}`}>
				{pathname === '/marketplace' ? (
					<Image src={blueMarket} alt="home icon" width={22} height={22} />
				) : (
					<Image src={grayMarket} alt="home icon" width={22} height={22} />
				)}{' '}
			</Link>
			<Link
				href="/games"
				className={`link ${
					pathname === '/games'
						? 'h-full w-[100px] mx-auto my-auto relative flex items-center justify-center border-b-2 border-blue-700'
						: 'h-full w-[100px] mx-auto my-auto relative flex items-center justify-center'
				}`}>
				{pathname === '/games' ? (
					<Image src={blueGaming} alt="home icon" width={22} height={22} />
				) : (
					<Image src={grayGaming} alt="home icon" width={22} height={22} />
				)}{' '}
			</Link>
		</div>
	);
};

export default CenterNav;
