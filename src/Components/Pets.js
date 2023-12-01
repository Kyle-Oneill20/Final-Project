import React from "react";
import { useEffect, useState } from "react";
import './Comp.css'

export default function PetDisplay() {

    const API_URL = "https://654fe5f0358230d8f0cdca09.mockapi.io/api1/Pets"
    const [Pets, setPets] = useState([{}])
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
        <div>
            <header>
                <br></br> <h1 className="text-center"> Current Pets</h1><br></br>
            </header>
            {Pets.map((Pets, index) =>

                
                    <div id="plzWork" className="userContainer, text-center" key={index}>
                        <div id="PetDisplay">
                            <h4> Pet ID # {Pets.id}</h4>
                            <p> Name : {Pets.Name}</p>
                            <p>Breed : {Pets.Breed} </p>
                            <p>Age : {Pets.Age}</p>
                        </div>
                    </div>
                

            )}
        </div>
    )
}