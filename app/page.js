import Navbar from './components/Navbar';
import Homepage from './(pages)/homepage/Homepage';
import Login from './(pages)/users/Login';

export default function Home() {
	return (
		<>
			<div>
				{/* <Navbar /> */}
				<Login />
				{/* <Homepage /> */}
			</div>
		</>
	);
}
