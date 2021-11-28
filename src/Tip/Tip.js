import React from "react"
import "./Tip.css"
const Tip = ({ tipHandler, beenClicked }) => {
    const tipValues = ['5%', '10%', '15%', '25%', '50%', 'Custom']
    
    
    return (
        <div className="Tip">
      {      tipValues.map((item, index) => (
        <div className={beenClicked[index] ? 'square-clicked' : 'square'} onClick={(e) => tipHandler(e, index)}>{item}</div>
    ))}
            {/* <div className={beenClicked?'square-clicked':"square"} onClick={tipHandler} >5%</div>
            <div className={beenClicked?'square-clicked':"square"} onClick={tipHandler} >10%</div>
            <div className={beenClicked?'square-clicked':"square"} onClick={tipHandler} >15%</div>
            <div className={beenClicked?'square-clicked':"square"} onClick={tipHandler} >25%</div>
            <div className={beenClicked?'square-clicked':"square"} onClick={tipHandler} >50%</div>
            <div className={beenClicked?'square-clicked':"square"} onClick={tipHandler} >Custom</div> */}
            </div>
)
}

export default Tip;