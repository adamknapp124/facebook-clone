import React from 'react';
import LeftNav from './LeftNav';
import CenterNav from './CenterNav';
import RightNav from './RightNav';

const Navbar = () => {
	return (
		<div className="sticky-top">
			<div className="flex justify-between bg-white p-1 shadow-sm relative pl-3  z-20">
				<LeftNav />
				<CenterNav />
				<RightNav />
			</div>
		</div>
	);
};

export default Navbar;
