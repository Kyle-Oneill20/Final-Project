import React, { useState } from "react";
import './Comp.css'
export default function Add(){

    const API_URL = "https://654fe5f0358230d8f0cdca09.mockapi.io/api1/Pets"
    const [ newPetsAge, setNewPetsAge]=useState('')
    const [ newPetsBreed, setNewPetsBreed]=useState('')
    const [ newPetsName, setNewPetsName]=useState('')
   
    function postNewPets(e){
        e.preventDefault()
  
       console.log(newPetsName, newPetsBreed, newPetsAge)
  
  
      fetch(API_URL, {
        method: 'POST',
        headers:{ "Content-Type": "application/json"},
        body: JSON.stringify({
          Name: newPetsName,
          Breed: newPetsBreed,
          Age: newPetsAge,
      }) 
      }).then(alert("Your Pet is Checked in!!!"))
    }
    



    return(
        <div className="text-center">
            <header>
            <h1 className="text-center">Add your Pets info to check them in </h1>
            </header>
            <form>
                <h2 className="lead">
                    <label>Name</label><br></br>
                    <input onChange={(e)=>setNewPetsName(e.target.value)}></input><br></br>
                    <label>Breed</label><br></br>
                    <input onChange={(e)=>setNewPetsBreed(e.target.value)} ></input><br></br>
                    <label>Age</label><br></br>
                    <input onChange={(e)=>setNewPetsAge(e.target.value)}></input><br></br>
                    <br></br><button onClick={(e)=>postNewPets(e)}>Check In!</button>
                </h2>
            </form>

        </div>
    )
}