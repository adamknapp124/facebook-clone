'use client';

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';

import SideNav from '/app/components/SideNav';
import Feed from '/app/components/Feed';
import ContactPanel from '/app/components/ContactPanel';
import Navbar from '/app/components/Navbar';
// import { redirect } from 'next/dist/server/api-utils';

export default function Home() {
	const [twoColumn, setTwoColumn] = useState(false);
	const [oneColumn, setOneColumn] = useState(false);

	function handleResize() {
		if (window.innerWidth >= 1100) {
			setTwoColumn(true);
		} else {
			setTwoColumn(false);
		}
		if (window.innerWidth < 900) {
			setOneColumn(true);
		} else {
			setOneColumn(false);
		}
	}

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		if (!session) {
			redirect('/login');
		}

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	const { data: session, status } = useSession();
	console.log(session);

	return (
		<div className="flex flex-col">
			<div>
				<Navbar />
			</div>
			<div className="flex flex-row flex-shrink justify-between max-w-[1464px] mx-auto mt-16">
				{twoColumn ? (
					<div className="">
						<SideNav />
					</div>
				) : null}
				<div className="flex-1 overflow-y-auto">
					<Feed />
				</div>
				{oneColumn ? null : <ContactPanel />}
			</div>
		</div>
	);
}
