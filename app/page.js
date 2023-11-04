'use client';

import { useSession } from 'next-auth/react';

import SideNav from '/app/components/SideNav';
import Feed from '/app/components/Feed';
import ContactPanel from '/app/components/ContactPanel';
import Navbar from '/app/components/Navbar';

export default function Home() {
	const { data: session, status } = useSession();
	console.log(session);
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
}
