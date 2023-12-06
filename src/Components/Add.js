import React, { useState } from "react";
import './Comp.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Add() {

    const API_URL = "https://654fe5f0358230d8f0cdca09.mockapi.io/api1/Pets"
    const [newPetsAge, setNewPetsAge] = useState('')
    const [newPetsBreed, setNewPetsBreed] = useState('')
    const [newPetsName, setNewPetsName] = useState('')
    const [newVaccine, setNewVaccine] = useState(Boolean)
    const [newAggression, setNewAggression] = useState(Boolean)
    function postNewPets(e) {
       

        console.log(newPetsName, newPetsBreed, newPetsAge, newVaccine,newAggression)

        if (newVaccine != "true") {
            let newVaccine = false
            return (
                alert("We cannot let an unvaccinated pets stay with us for the safety of others. Please comeback after getting the required treatments.")
            )
        }
        if (newAggression != "false") {
            let newAggression = true
            return (
                alert("We can not allow any pets with a history of bites or aggression to stay with us for the safety of our employees. We hope you can understand our precautions. Have a nice day!")
            )
        }
        else {
            let newAggression=false
            let newVaccine=true

        console.log(newPetsName, newPetsBreed, newPetsAge, newVaccine,newAggression)

            fetch(API_URL, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    Name: newPetsName,
                    Breed: newPetsBreed,
                    Age: newPetsAge,
                    Vaccinated: newVaccine,
                    Aggressive: newAggression,
                })
            }).then(alert("Your Pet is Checked in!!!")).then(<Link to="/home" />)
        }
    }


    return (
        <div className="text-center">
            <header>
                <h1 className="text-center">Add your Pets info to check them in </h1>
            </header>
            <form>
                <h2 className="lead">
                    <label>Name</label><br></br>
                    <input className="required" onChange={(e) => setNewPetsName(e.target.value)} required={true}/><br></br>
                    <label>Breed</label><br></br>
                    <input className="required" onChange={(e) => setNewPetsBreed(e.target.value)} required={true}/><br></br>
                    <label>Age</label><br></br>
                    <input className="required" onChange={(e) => setNewPetsAge(e.target.value)} required={true}/><br></br>

                    <div className=" custom-select buttongroup">
                        <br></br><label> Is your pet Vaccinated?</label><br></br>
                        <br></br><select onChange={(e) => setNewVaccine(e.target.value)} required={true}>
                            <option> Please select an option to move on</option>
                            <option value="true" >Yes</option>
                            <option value="false" >No</option>
                        </select>
                    </div>

                    <div className=" custom-select buttongroup">
                        <br></br><label>Has your pet had a history of aggression towards humans, or ever bitten anyone?</label><br></br>
                        <br></br><select onChange={(e) => setNewAggression(e.target.value)} required={true}>
                            <option>  Please select option to move on</option>
                            <option value= "true" > Yes </option>
                            <option value= "false" > No</option>
                        </select>
                    </div>
                    <br></br><button  type="submit" onClick={(e) => postNewPets(e)}>Check In!</button>
                </h2>
            </form>

        </div>
    )
}