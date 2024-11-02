import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Adopter } from './components/Adopter'
import { Inputform } from './components/Inputform'

function App() {
  const [showPetAdoptionForm, setShowPetAdoptionForm] = useState(false);
  const [data, setData] = useState([{petName:"Buddy", petType:"Dog", breed:"golden Retriever",adopterName:"John Doe", email:"john.doe@example.com",phone:"1234567890"},
  {petName:"Thumper", petType:"Rabbit", breed:"Holland Lop",adopterName:"Emily Brown", email:"emily.brown@example.com",phone:"1122334455"}
])

  return (<div>
    <div className='wrapper'>
      <div className='one'>
        <Header />
      </div>
      <div className='two'>
        <Sidebar setShowPetAdoptionForm={setShowPetAdoptionForm}/>
      </div>
      <div className='three'>
        <div className='table-heading-wrapper'>
        <div className='table-heading' style={{width:"7%"}}>S.no</div>
          <div className='table-heading'>Pet Name</div>
          <div className='table-heading'>Pet Type</div>
          <div className='table-heading'>Pet Breed</div>
          <div className='table-heading'>Your Name</div>
          <div className='table-heading'>Your Email</div>
          <div className='table-heading'>Your Phone</div>
      </div>
      {showPetAdoptionForm?<Inputform setShowPetAdoptionForm={setShowPetAdoptionForm} setData={setData} data={data}/>:
      data.map((pet,index) => 
      <Adopter 
      index={index+1}
      petName={pet.petName}
      type={pet.petType}
      breed={pet.breed}
      adopterName={pet.adopterName}
      email={pet.email}
      phone={pet.phone} />)}
      </div>
    </div>
  </div>
  )
}

export default App
