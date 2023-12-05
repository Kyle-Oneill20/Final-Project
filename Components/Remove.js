import React from 'react';
import { useEffect, useState } from 'react';
import './Comp.css'


export default function Remove() {
    const API_URL = "https://654fe5f0358230d8f0cdca09.mockapi.io/api1/Pets"
    const [pet, setPets] = useState([{}])
    
    function deletePet(pet) {
        fetch(`${API_URL}/${pet.id}`, {
            method: "DELETE"
        }).then(() => getPets()).then(alert("Your pet is Checked Out!!"))
    }
    
    function getPets() {
        fetch(API_URL)
            .then(data => data.json())
            .then(data => setPets(data))
    }
    useEffect(() => {
        getPets()
        console.log(pet)
    }, [])

    
    
    
        return (
                <div className="leave lead">
                    
                    <h1 className=" leavePets text-center"> Current Pets</h1>
                    
                    {pet.map((pet, index) =>
                            <div className="petContainer text-center" key={index}>
                                <div className="petDisplay">
                                    <h4> Pet ID # {pet.id}</h4>
                                    <p> Name : {pet.Name}<br></br></p>
                                    <p>Breed : {pet.Breed}<br></br> </p>
                                    <p>Age : {pet.Age}<br></br></p>
                                    <button className='petLeave' onClick={() => deletePet(pet)}>Check Out</button>
                                </div>
                            </div>
                    )}
                </div>
            )
 }
