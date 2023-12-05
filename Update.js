import React, { useState, useEffect } from "react";
import "./Comp.css"
import Home from "./Home";
export default function Update(){
    const API_URL = "https://654fe5f0358230d8f0cdca09.mockapi.io/api1/Pets"
    const [updatedName, setUpdatedName]=useState('')
    const [updatedBreed, setUpdatedBreed]=useState('')
    const[updatedAge,setUpdatedAge]=useState('')
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
    
    function updatePet(e,petObject){
        e.preventDefault
        let updatedPetObject = {
            ...petObject,
            Name: updatedName,
            Breed: updatedBreed,
            Age: updatedAge
        } 
         

        fetch(`${API_URL}/${petObject.id}`,{
            method: 'PUT',
            body:JSON.stringify(updatedPetObject),
            headers:{
                "Content-Type": "application/json"
            },
        }).then(console.log(updatedPetObject)).then(()=>getPets()).then(alert("Pet Info Updated!")).then(<Home/>)
    }
    
    
    return(
        <div className="update text-center">
            <h1>Update Info</h1>
            {pet.map(( pet, index ) =>
            <div className="updateDisplay lead" key={ index}>
                <br></br><p className="petId">Pet ID # {pet.id}</p>
                <br></br><p>Pet Name: {pet.Name}</p>
                <br></br><p>Breed:  {pet.Breed} </p>
                <br></br><p>Age:  {pet.Age}</p><br></br>
            <label>Update Name</label>
            <br></br><input onChange={(e)=>setUpdatedName(e.target.value)} required></input><br></br>
            <br></br><label>Update Breed</label>
            <br></br><input onChange={(e)=>setUpdatedBreed(e.target.value)} required></input><br></br>
            <br></br><label>Update Age</label>
            <br></br><input onChange={(e)=>setUpdatedAge(e.target.value)} required></input><br></br>
            <br></br><button onClick={(e)=>updatePet(e,pet)}>Update Info</button>
            </div>
         )}    
        </div>
     
    )
} 
