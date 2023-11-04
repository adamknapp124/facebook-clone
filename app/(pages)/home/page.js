import React from 'react';

import SideNav from '/app/components/SideNav';
import Feed from '/app/components/Feed';
import ContactPanel from '/app/components/ContactPanel';
import Navbar from '/app/components/Navbar';

const Page = () => {
	return (
		<div className="flex flex-col">
			<div>
				<Navbar />
			</div>
			<div className="flex flex-row justify-between">
				<SideNav />
				<Feed />
				<ContactPanel />
			</div>
		</div>
	);
};

export default Page;
