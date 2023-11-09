import React from 'react';

import Stories from '../components/Stories';
import CreatePost from '../components/CreatePost';
import PostCard from '../components/PostCard';

const Feed = () => {
	return (
		<div className="flex flex-col overflow-hidden max-w-[680px]">
			<Stories />
			<div className="bg-slate-100 max-w-[680px] flex flex-col flex-shrink-1 gap-5 p-5">
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
