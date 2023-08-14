import React, {useState} from 'react'

function HookArray() {
    const [items, setItem] = useState([])
    const songs = ['breathing slowly', 'blind','wake up','right here', 'king of fools', 'so far away', 'let it go', 'someday', 'right in two', 'just one','unaffected','not meant to be', 'addicted','unwell','carnival of rust','the last song','last resort','take me away','shadow of the day','whatsername']
    const additems =()=> {
        setItem([...items, {
            id : items.length,
            value : songs[Math.floor(Math.random()*20)+1]
        }])
    }

  return (

<div>
       
      <button onClick={additems}>Add New Song!</button>
 <ul>   
  {items.map(item => (<li key={item.id}>{item.value}</li>))}
</ul>
</div>
   
  )
}

export default HookArray
