import React from "react";
import { useEffect, useState } from "react";
import './Comp.css'

export default function PetDisplay() {

    const API_URL = "https://654fe5f0358230d8f0cdca09.mockapi.io/api1/Pets"
    const [pet, setPets] = useState([{}])
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
        <div>
            <header className="petsHeader">
                <br></br> <h1 className="text-center"> Current Pets</h1><br></br>
                
            </header>
            {pet.map((pet, index) =>

                
                    <div  className="userContainer text-center plzWork" key={index}>
                        <div className="lead" id="PetDisplay">
                            <h4> Pet ID # {pet.id}</h4>
                            <p> Name : {pet.Name}</p>
                            <p>Breed : {pet.Breed} </p>
                            <p>Age : {pet.Age}</p>
                        </div> 
                    </div>
                

            )}
        </div>
    )
}