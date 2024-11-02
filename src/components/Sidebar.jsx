import { useState } from 'react'
import './sidebar.css'

export function Sidebar({setShowPetAdoptionForm}){

    return <div className='sidebar'>
        <div className='apply-btn-wrapper'>
            <button onClick={()=>setShowPetAdoptionForm(true)}>Apply For Adoption</button>
        </div>
    </div>
}