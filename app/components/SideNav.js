import React from 'react';
import Image from 'next/image';

import profileicon from '../../public/images/icons/navbar-icons/profile-image.jpg';
import friendsicon from '../../public/images/icons/sidenav-icons/friends-icon.svg';
import groupsicon from '../../public/images/icons/sidenav-icons/groups-icon.svg';
import memoriesicon from '../../public/images/icons/sidenav-icons/memories-icon.svg';
import savedicon from '../../public/images/icons/sidenav-icons/saved-icon.svg';
import videoicon from '../../public/images/icons/sidenav-icons/video-icon.svg';
import marketplaceicon from '../../public/images/icons/sidenav-icons/marketplace-icon.svg';
import adcentericon from '../../public/images/icons/sidenav-icons/adcenter-icon.svg';
import adsmanagericon from '../../public/images/icons/sidenav-icons/adsmanager-icon.svg';
import bloodicon from '../../public/images/icons/sidenav-icons/blood-icon.svg';
import climateicon from '../../public/images/icons/sidenav-icons/climate-icon.svg';
import eventsicon from '../../public/images/icons/sidenav-icons/events-icon.svg';
import feedsicon from '../../public/images/icons/sidenav-icons/feeds-icon.svg';
import fundraisersicon from '../../public/images/icons/sidenav-icons/fundraisers-icon.svg';
import gamingvideoicon from '../../public/images/icons/sidenav-icons/gamingvideo-icon.svg';
import messengericon from '../../public/images/icons/sidenav-icons/messenger-icon.svg';
import kidsmessengericon from '../../public/images/icons/sidenav-icons/kidsmessenger-icon.svg';
import metaquesticon from '../../public/images/icons/sidenav-icons/metaquest-icon.svg';
import newsicon from '../../public/images/icons/sidenav-icons/news-icon.svg';
import paymentsicon from '../../public/images/icons/sidenav-icons/payments-icon.svg';
import pagesicon from '../../public/images/icons/sidenav-icons/pages-icon.svg';
import gamesicon from '../../public/images/icons/sidenav-icons/games-icon.svg';
import raybanmetaicon from '../../public/images/icons/sidenav-icons/raybanmeta-icon.svg';
import adactivityicon from '../../public/images/icons/sidenav-icons/adactivity-icon.svg';

const SideNav = () => {
	const homeFillData = [
		{ icon: friendsicon, title: 'Friends', link: '/' },
		{ icon: memoriesicon, title: 'Memories', link: '/' },
		{ icon: savedicon, title: 'Saved', link: '/' },
		{ icon: groupsicon, title: 'Groups', link: '/' },
		{ icon: videoicon, title: 'Video', link: '/' },
		{ icon: marketplaceicon, title: 'Marketplace', link: '/' },
		{ icon: adcentericon, title: 'Ad Center', link: '/' },
		{ icon: adsmanagericon, title: 'Ads Manager', link: '/' },
		{ icon: bloodicon, title: 'Blood Donations', link: '/' },
		{ icon: climateicon, title: 'Climate Science Center', link: '/' },
		{ icon: eventsicon, title: 'Events', link: '/' },
		{ icon: feedsicon, title: 'Feeds', link: '/' },
		{ icon: fundraisersicon, title: 'Fundraisers', link: '/' },
		{ icon: gamingvideoicon, title: 'Gaming Video', link: '/' },
		{ icon: messengericon, title: 'Messenger', link: '/' },
		{ icon: kidsmessengericon, title: 'Messenger Kids', link: '/' },
		{ icon: metaquesticon, title: 'Meta Quest', link: '/' },
		{ icon: newsicon, title: 'News', link: '/' },
		{ icon: paymentsicon, title: 'Orders and payments' },
		{ icon: pagesicon, title: 'Pages', link: '/' },
		{ icon: gamesicon, title: 'Play Games', link: '/' },
		{ icon: raybanmetaicon, title: 'Ray-Ban Meta', link: '/' },
		{ icon: adactivityicon, title: 'Recent ad activity', link: '/' },
	];

	return (
		<div className="sticky pl-2 w-72 pt-4 h-screen hover:overflow-y-scroll scroll bg-gray-100">
			<ul className="flex flex-col">
				<li className="flex hover:bg-gray-200 rounded-l-md pl-2.5 pt-1.5 pb-1 gap-3 text-sm font-medium">
					<Image
						src={profileicon}
						alt="profile image"
						width={24}
						height={24}
						className="rounded-full"
					/>
					<div className="font-medium">Adam Knapp</div>
				</li>
				{homeFillData.map((link, index) => (
					<li
						key={index}
						className="flex hover:bg-gray-200 rounded-l-md pl-2.5 pt-2.5 pb-2.5 gap-3 text-sm font-medium">
						<Image src={link.icon} alt={link.title} width={24} height={24} />
						<div className="font-medium">{link.title}</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SideNav;
