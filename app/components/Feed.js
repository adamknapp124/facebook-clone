import React from 'react';

import Stories from '../components/Stories';
import CreatePost from '../components/CreatePost';
import PostCard from '../components/PostCard';

const Feed = () => {
	return (
		<div className="bg-slate-100 flex flex-col gap-5 p-5">
			<Stories />
			<CreatePost />
			<PostCard />
		</div>
	);
};

export default Feed;
