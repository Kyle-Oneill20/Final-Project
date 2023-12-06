import React from 'react';
import './Comp.css'
import Happy from'./Happy.jpg'
export default function About() {
	
		return <div> 
            <h1 id='about'className="text-uppercase, text-center">Learn About Us</h1>
            <p id='aboutBody' className="text-center, lead "> Here at Pet Daycare we take good care of your pets. We give them an hour and a half of outside/play time, plus 10 minutes of potty time. We also provide toys and treats as well as meals at your request! If you are willing to pay extra then we can add on some extra services such as providing dog friendly Ice cream, some pool play time, an extra long walk, a fun big play group, a bath, and much much more!!! Just ask aboout our extra service at the front desk! </p>
            <div className='dogImage flexbox'>
            <img className=" content-center" src={Happy} alt="Happy dogs" height={434} width={495}/>
           </div>
            <p>Please Note that we do not take any dogs that have history of human aggression, or have not been properly vaccinated. This is non negotiable and we will refuse you at the door in such cases.</p>
            </div>

    }




