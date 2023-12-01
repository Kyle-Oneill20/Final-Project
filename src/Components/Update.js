import React, { useState, useEffect } from "react";

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
        e.preventDefault()
        let updatedPetObject = {
            ...petObject,
            name: updatedName,
            breed: updatedBreed,
            age: updatedAge
        }

        fetch(`${API_URL}/${petObject.id}`,{
            method: 'PUT',
            body:JSON.stringify(updatedPetObject),
            headers:{
                "Content-Type": "application/json"
            },
        }).then(console.log(updatedPetObject)).then(alert("Pet Info Updated!"))
    }
    return(
        <div className="update">
            <label>Update name</label>
            <br></br><input onChange={(e)=>setUpdatedName(e.target.value)}></input><br></br>
            <br></br><label>Update Breed</label>
            <br></br><input onChange={(e)=>setUpdatedBreed(e.target.value)}></input><br></br>
            <br></br><label>Update Age</label>
            <br></br><input onChange={(e)=>setUpdatedAge(e.target.value)}></input><br></br>
            <br></br><button onClick={(e)=>updatePet(e,pet)}>Update Info</button>
        </div>
       
    )
}