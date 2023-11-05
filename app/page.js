'use client';

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';

import SideNav from '/app/components/SideNav';
import Feed from '/app/components/Feed';
import ContactPanel from '/app/components/ContactPanel';
import Navbar from '/app/components/Navbar';

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

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [twoColumn]);

	const { data: session, status } = useSession();
	console.log(session);
	return (
		<div className="flex flex-col">
			<div>
				<Navbar />
			</div>
			<div className="flex flex-row flex-shrink justify-between max-w-[1464px] mx-auto mt-16">
				{twoColumn ? <SideNav /> : null}
				<Feed />
				{oneColumn ? null : <ContactPanel />}
			</div>
		</div>
	);
}
