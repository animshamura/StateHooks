import React, {useState} from 'react'

function HookObject() {
    const [name, setName] = useState({firstname : '', lastname : '', address : ''})
  return (
    <div>
      <form>
        <input type='text' value={name.firstname} onChange={e => setName({...name,firstname : e.target.value})}/>
        <input type='text' value={name.lastname} onChange={e => setName({...name,lastname : e.target.value})}/>
        <input type='text' value={name.address} onChange={e => setName({...name,address : e.target.value})}/>
      </form>
      <h1>Your firstname is {name.firstname}</h1>
      <h1>Your lastname is {name.lastname} </h1>
      <h1> Your address is {name.address}
      </h1>
    </div>
  )
}

export default HookObject
