import { useState } from "react"
import './Formsinputs.css'
import { z } from "zod";

export function Inputform({setShowPetAdoptionForm, setData, data}){

  const[petName, setPetName] = useState("")
  const[petType, setPetType] = useState("")
  const[breed, setBreed] = useState("")
  const[adopterName, setAdopterName] = useState("")
  const[email, setEmail] = useState("")
  const[phone, setPhone] = useState("")
  const[errorText, setErrorText] = useState("");

    function handlePetName(e){
      const val = e.target.value;
      setPetName(val)
      if(val.length<3){
        setErrorText("Pet name should be at least 3 letters long!")
      }else{
        setErrorText("");
      }
    }

    function handlePetType(e){
      const val = e.target.value;
      setPetType(val)
      if(val.length<3){
        setErrorText("Pet type should be at least 3 letters long!")
      }else{
        setErrorText("");
      }
    }

    function handleBreed(e){
      const val = e.target.value;
      setBreed(val)
      if(val.length<3){
        setErrorText("Pet breed should be at least three letters long!")
      }else{
        setErrorText("");
      }
    }

    function handleAdopterName(e){
      const val = e.target.value;
      setAdopterName(val)
      if(val.length<3){
        setErrorText("Adopter name should be at least 3 letters long!")
      }else{
        setErrorText("");
      }
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    function handleEmail(e){
      const val = e.target.value;
      setEmail(val)
      if(val && !emailRegex.test(val)){
        setErrorText("Email should be of type johndoe@example.com")
      }else{
        setErrorText("");
      }
    }

    function handlePhone(e){
      const val = e.target.value;
      setPhone(val)
      if(val.length<10){
        setErrorText("Phone number must be 10 digits long")
      }else{
        setErrorText("");
      }
    }


    function addAdopter(){
      if(petName === "" || petType === "" || breed === "" || adopterName === "" || email === "" || phone === ""){
        alert("Please fill all the details!")
        return;
      }

      const adopterSchema =z.object({
        petName:z.string().min(3,{message:"Pet name should be at least 3 letters long."}),
        petType:z.string().min(3,{message:"Pet type should be at least 3 letters long."}),
        breed:z.string().min(3,{message:"Breed should be 3 letters long."}),
        adopterName:z.string().min(3,{message:"Adopter Name should be 3 letters long."}),
        email:z.string().email({message:"email should be of type john@example.com."}),
        phone:z.string()
        .regex(/^\d{10}$/,{message:"Phone number must be 10 digit long."}),
      })

      const result = adopterSchema.safeParse({
        petName:petName,
        petType:petType,
        breed:breed,
        adopterName:adopterName,
        email:email,
        phone:phone
      })

      if(result.success){
        setData([...data,{petName:petName, petType:petType, breed:breed,adopterName:adopterName, email:email,phone:phone}])

        setShowPetAdoptionForm(false);
      }else{
        const resultError = result.error.format();
        const errorMsg = resultError[Object.keys(resultError)[1]]["_errors"][0];
        setErrorText(errorMsg);
      }
    }

    return <div className="input-wrapper">
            <div className="input-container">
        <table>
          <tr>
            <th><input onChange={handlePetName} value={petName} style={{height:"2em"}} type="text" placeholder="Enter Pet Name"/></th>
            <th><input onChange={handlePetType} value={petType} style={{height:"2em"}} type="text" placeholder="Enter Pet Type"/></th>
            <th><input onChange={handleBreed} value={breed} style={{height:"2em"}} type="text" placeholder="Enter Pet Breed"/></th>
            <th><input onChange={handleAdopterName} value={adopterName} style={{height:"2em"}} type="text" placeholder="Enter Your Name"/></th>
            <th><input onChange={handleEmail} value={email} style={{height:"2em"}} type="text" placeholder="Enter Your Email"/></th>
            <th><input onChange={handlePhone} value={phone} style={{height:"2em"}} type="number" placeholder="Enter Your Phone"/></th>
        </tr>
      </table>
    </div>
    <button onClick={addAdopter} className="submit-btn">Submit</button>
    <button onClick={()=>setShowPetAdoptionForm(false)} className="cancel-btn">Cancel</button>
    <div className="errorText">
    {errorText}
    </div>
    </div> 
}