import React from 'react';

import LeftNav from '@/app/components/LeftNav';
import Feed from '@/app/components/Feed';
import ContactPanel from '@/app/components/ContactPanel';

const Home = () => {
	return (
		<section className="flex flex-row justify-around">
			<LeftNav />
			<Feed />
			<ContactPanel />
		</section>
	);
};

export default Home;
