import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {

  return (
    <Fragment>

      <div className="belt">
        { 
          props.sushi.map(sushi => <Sushi key={sushi.id} sushi={sushi} removeSushi={props.removeSushi} dollars={props.dollars}/>)
        }
        <MoreButton getSushi={props.getSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer