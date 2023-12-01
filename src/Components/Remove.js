import React from 'react';
import { useEffect, useState } from 'react';


export default function Remove() {
    const API_URL = "https://654fe5f0358230d8f0cdca09.mockapi.io/api1/Pets"
    const [Pets, setPets] = useState([{}])
    
    function deletePet(id) {
        fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        }).then(() => getPets()).then(alert("Your pet is Checked Out!!"))
    
    
    function getPets() {
        fetch(API_URL)
            .then(data => data.json())
            .then(data => setPets(data))
    }
    useEffect(() => {
        getPets()
        console.log(Pets)
    }, [])
    
    
    
    
        return (
                <div className="Leave">
                    <h1 className="text-center"> Current Pets</h1>
                    
                    {Pets.map((Pets, index) =>
                            <div className="petContainer, text-center" key={index}>
                                <div id="PetDisplay">
                                    <h4> Pet ID # {Pets.id}</h4>
                                    <p> Name : {Pets.Name}<br></br></p>
                                    <p>Breed : {Pets.Breed}<br></br> </p>
                                    <p>Age : {Pets.Age}<br></br></p>
                                    <button onClick={() => deletePet(Pets.id)}>Check Out</button>
                                </div>
                            </div>
                    )}
                </div>
            )
    }
}
