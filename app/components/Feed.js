import React from 'react';

import Stories from '../components/Stories';
import CreatePost from '../components/CreatePost';
import PostCard from '../components/PostCard';

const Feed = () => {
	return (
		<div className="bg-slate-100 w-[680px] flex flex-col flex-grow-1 gap-5 p-5 overflow-y-auto no-scrollbar">
			<Stories />
			<CreatePost />
			<PostCard />
			<PostCard />
			<PostCard />
			<PostCard />
		</div>
	);
};

export default Feed;
