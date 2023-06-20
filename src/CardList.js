import React from 'react'
import {robots} from './robot'
import Card from './Card';
const CardList = ({robots}) => {
  
  const cardComponents = robots.map((robot,id )=> {
        return (<Card 
        key={id} 
        id={robots[id].id} 
        name={robots[id].name} 
        email={robots[id].email}/>
  )})
  return (
    
    <div>
      {cardComponents}
    </div>
  )
}

export default CardList