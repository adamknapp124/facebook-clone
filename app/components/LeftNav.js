import React from 'react';
import Image from 'next/image';

import facebookIcon from '../../public/images/icons/navbar-icons/facebook-icon.svg';
import searchIcon from '../../public/images/icons/navbar-icons/search-icon.svg';

const LeftNav = () => {
	return (
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
					className="bg-transparent border-0 focus:ring-0 outline-none text-sm border-none out"
				/>
			</div>
		</div>
	);
};

export default LeftNav;
