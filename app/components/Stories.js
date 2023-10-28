import React from 'react';

import StoryCard from './StoryCard';

const Stories = () => {
	return (
		<div className="flex gap-3">
			<StoryCard />
			<StoryCard />
			<StoryCard />
			<StoryCard />
		</div>
	);
};

export default Stories;
