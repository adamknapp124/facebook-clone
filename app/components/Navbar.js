import React, { useState, useEffect } from 'react';
import LeftNav from './LeftNav';
import CenterNav from './CenterNav';
import RightNav from './RightNav';

const Navbar = () => {
	const [isVisible, setIsVisible] = useState(true);

	function handleResize() {
		if (window.innerWidth < 700) {
			setIsVisible(false);
		}
		if (window.innerWidth > 700) {
			setIsVisible(true);
		}
	}

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
	}, [isVisible]);

	return (
		<div className="fixed top-0 w-full z-20">
			<div className="flex justify-between bg-white p-1 shadow-sm relative pl-3 z-20">
				<LeftNav />
				{isVisible ? <CenterNav /> : null}
				<RightNav />
			</div>
		</div>
	);
};

export default Navbar;
