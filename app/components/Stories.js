import React from 'react';

import StoryCard from './StoryCard';

const Stories = () => {
	return (
		<div className="flex gap-3 w-[600px]">
			<StoryCard />
			<StoryCard />
			<StoryCard />
			<StoryCard />
		</div>
	);
};

export default Stories;
