'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import rightArrow from '../../public/images/icons/story-card-icons/right-arrow.svg';
import leftArrow from '../../public/images/icons/story-card-icons/left-arrow.svg';

import StoryCard from './StoryCard';

const Stories = () => {
	const [showButton, setShowButton] = useState(false);
	return (
		<div className="flex relative overflow-hidden">
			<div className="absolute inset-0 flex items-center z-10">
				{showButton ? (
					<div className="bg-white absolute left-3 h-[48px] w-[48px] rounded-full flex justify-center">
						<Image
							src={leftArrow}
							alt="left arrow"
							height={12}
							width={12}
							className="my-auto"
						/>
					</div>
				) : null}
				<div className="bg-white absolute right-3 h-[48px] w-[48px] rounded-full items-center flex justify-center">
					<Image
						src={rightArrow}
						alt="right arrow"
						height={12}
						width={12}
						className="my-auto"
					/>
				</div>
			</div>
			<StoryCard />
		</div>
	);
};

export default Stories;
