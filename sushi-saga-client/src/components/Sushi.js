import React, {useState} from 'react'

const Sushi = (props) => {

  const [click, setClicked] = useState(false)

  let handleClick = () => {
    if (click !== true) {
      if (props.dollars >= props.sushi.price) {
        props.removeSushi(props.sushi.price)
        setClicked(true)
      }
    }
  }

  return (
    
    <div className="sushi">
      <div className="plate" 
           onClick={handleClick}>
        { 
          click ?
            null
          :
            <img src={props.sushi.img_url } width="100%"  alt=""/>
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi