import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';

import Stories from '../components/Stories';
import CreatePost from '../create/page';
import PostCard from '../components/PostCard';

export default function Feed() {
	const { data: session, status } = useSession();

	if (session) {
		return (
			<div className="flex flex-col overflow-hidden max-w-[680px] pt-4">
				<Stories />
				<div className="bg-slate-100 max-w-[680px] flex flex-col flex-shrink-1 gap-5 p-1">
					<CreatePost />
					<PostCard />
				</div>
			</div>
		);
	}

	// Add a default return in case there is a session
	return <p>Sign in first please.</p>;
}
