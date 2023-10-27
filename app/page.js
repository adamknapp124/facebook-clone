import Image from 'next/image';
import Navbar from './components/Navbar';
import Homepage from './(pages)/homepage/Homepage';

export default function Home() {
	return (
		<>
			<Navbar />
			<Homepage />
		</>
	);
}
