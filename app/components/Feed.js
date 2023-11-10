import React from 'react';

import Stories from '../components/Stories';
import CreatePost from '../create/page';
import PostCard from '../components/PostCard';

const Feed = () => {
	return (
		<div className="flex flex-col overflow-hidden max-w-[680px] pt-4">
			<Stories />
			<div className="bg-slate-100 max-w-[680px] flex flex-col flex-shrink-1 gap-5 p-1">
				<CreatePost />
				<PostCard />
				<PostCard />
				<PostCard />
				<PostCard />
			</div>
		</div>
	);
};

export default Feed;
