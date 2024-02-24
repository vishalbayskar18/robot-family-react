import React from 'react'

import Card from './Card'

const getCardListA = ({robots}) => {

    return (
    <div>
     {

    robots.map(robot => {

    return <Card key={robot.id} id={robot.id} name={robot.name + ' s'}  email={robot.email}/>

    })

     }

    </div>
    );


}

export default getCardListA