import React from 'react';

import LeftNav from '@/app/components/LeftNav';
import Feed from '@/app/components/Feed';
import ContactPanel from '@/app/components/ContactPanel';

const Home = () => {
	return (
		<div className="flex flex-row justify-between">
			<LeftNav />
			<Feed />
			<ContactPanel />
		</div>
	);
};

export default Home;
