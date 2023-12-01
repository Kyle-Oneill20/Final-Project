import React from 'react';
import Pets from './Pets';

export default function Home() {
	
		return <div className="container-fluid">
			<h1 className="text-uppercase, text-center">Home</h1>
			<p className="text-center">Welcome to Pet Daycare!!!!
				To Add your pet Please click the Check In Link.
				You can use the Check Out link if you're ready to leave.
				Here are some of the current Pets below.
			</p>
			<Pets></Pets>
		</div>
}
