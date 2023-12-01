import React from 'react';
import Pets from './Pets';

export default function Home() {
	
		return <div className="container-fluid">
			<header className='home'>
			<h1 className="text-uppercase, text-center">Home</h1>
			</header>
			<p className="text-center lead">Welcome to Pet Daycare!!!!
				To Add your pet Please click the Check In Link.
				You can use the Check Out link if you're ready to leave.
				Here are some of the current Pets below.
			</p>
			<Pets></Pets>
		</div>
}
