import React from 'react';

import SideNav from '@/app/components/SideNav';
import Feed from '@/app/components/Feed';
import ContactPanel from '@/app/components/ContactPanel';

const Home = () => {
	return (
		<div className="flex flex-row justify-between">
			<SideNav />
			<Feed />
			<ContactPanel />
		</div>
	);
};

export default Home;
