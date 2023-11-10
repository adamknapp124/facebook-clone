import React from 'react';
import Image from 'next/image';

import storyImage from '../../public/images/post-card-images/card-image.jpg';
import storyImage2 from '../../public/images/post-card-images/card-image2.jpg';
import storyImage3 from '../../public/images/post-card-images/card-image3.jpg';
import storyImage4 from '../../public/images/post-card-images/card-image4.jpg';

import profile1 from '../../public/images/icons/story-card-icons/profile1.jpg';
import profile2 from '../../public/images/icons/story-card-icons/profile2.jpg';
import profile3 from '../../public/images/icons/story-card-icons/profile3.jpg';
import profile4 from '../../public/images/icons/story-card-icons/profile4.jpg';

const StoryCard = () => {
	const storiesArray = [
		{ background: storyImage, name: 'Emily Johnson', profileImage: profile1 },
		{ background: storyImage2, name: 'Lily Rodriguez', profileImage: profile2 },
		{ background: storyImage3, name: 'Marcus Bennett', profileImage: profile3 },
		{ background: storyImage4, name: 'Noah Anderson', profileImage: profile4 },
		{ background: storyImage4, name: 'Noah Anderson', profileImage: profile4 },
	];
	return (
		<>
			{storiesArray.map((story, index) => (
				<div
					key={index}
					className="p-3 overflow-hidden shadow-md rounded-lg flex justify-center min-w-[141px] h-[250px] relative group mr-2">
					<Image
						src={story.background}
						alt="Story Image"
						fill
						style={{ objectFit: 'cover' }}
					/>
					<div className="h-full w-full my-auto relative flex flex-col">
						<div className="border-4 border-sky-500 h-10 w-10 absolute rounded-full">
							<Image
								src={story.profileImage}
								alt=""
								fill
								style={{ objectFit: 'cover' }}
								className="overflow-hidden rounded-full"
							/>
						</div>
						<div className="absolute bottom-0 left-0 text-white text-xs font-semibold">
							{story.name}
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default StoryCard;
