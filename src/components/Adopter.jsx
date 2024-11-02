import './adopter.css'
export function Adopter({index,petName, type, breed, adopterName,email, phone }){
    return <div>
        <div className='adopter-details-wrapper'>
        <div className='adopter-details' style={{width:"7%"}}>{index}</div>
          <div className='adopter-details'>{petName}</div>
          <div className='adopter-details'>{type}</div>
          <div className='adopter-details'>{breed}</div>
          <div className='adopter-details'>{adopterName}</div>
          <div className='adopter-details'>{email}</div>
          <div className='adopter-details' style={{marginLeft:"1.5em"}}>{phone}</div>
      </div>
    </div>
}