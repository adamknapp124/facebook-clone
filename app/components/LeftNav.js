import React, { useState, useEffect, createElement } from 'react';
import Image from 'next/image';

import facebookIcon from '../../public/images/icons/navbar-icons/facebook-icon.svg';
import searchIcon from '../../public/images/icons/navbar-icons/search-icon.svg';

const LeftNav = () => {
	const [smallSearch, setSmallSearch] = useState(false);

	function handleResize() {
		if (window.innerWidth < 1260) {
			setSmallSearch(true);
		} else {
			setSmallSearch(false);
		}
	}

	const buttonClicked = () => {
		console.log('clicked');
	};

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
	}, [smallSearch]);

	return (
		<div className="flex flex-row align-middle h-100 w-100">
			<Image
				src={facebookIcon}
				alt="facebook icon"
				width={50}
				height={50}
				className=""
			/>
			<button className="w-full cursor-default" onClick={buttonClicked}>
				<div
					className={
						smallSearch
							? 'p-3 bg-gray-100 rounded-full my-auto'
							: 'flex justify-center my-auto gap-2 h-5/6 bg-gray-100 rounded-full'
					}>
					<Image
						src={searchIcon}
						alt="search icon"
						width={14}
						height={14}
						className={smallSearch ? '' : 'ml-3'}
					/>
					{smallSearch ? null : (
						<input
							type="text"
							placeholder="Search Fakesbook"
							className="bg-transparent border-0 focus:ring-0 outline-none text-sm border-none out"
						/>
					)}
				</div>
			</button>
		</div>
	);
};

// className={`link ${
// 	pathname === '/'
// 		? 'h-full w-[100px] mx-auto my-auto relative flex items-center justify-center border-b-2 border-blue-700'
// 		: 'h-full w-[100px] mx-auto my-auto relative flex items-center justify-center'
// }`}

export default LeftNav;
