import React,{useState,useEffect} from "react"
import Tip from "./Tip/Tip"
import './App.css';

const App = () => {
  const [tipAmount, setTipAmount] = useState(0)
  const [billAmountEntered, setBillAmountEntered] = useState("")
  const [numberOfPeopleEntered, setNumberofPeopleEntered] = useState("")
  const defaultClickedVals = Array(6).fill(false)
  const [beenClicked, setBeenClicked] = useState(defaultClickedVals)

  const tipHandler = (e, index) => {
    let newVals = [...defaultClickedVals]
    newVals[index] = true
    setBeenClicked(newVals)
    if (parseInt(e.target.innerText)) {
      setTipAmount(parseInt(e.target.innerText))
    }
  }

  const handleReset = () => {
    setTipAmount(0)
    setBillAmountEntered(0)
    setNumberofPeopleEntered(0)
    setBeenClicked(defaultClickedVals)
  }

  const billEntered = (e) => {
     //allow for backspace
    if (e.target.value.length<1) {
      setBillAmountEntered("")
    }
    //don't take strings
  if (isNaN(parseInt(e.target.value))){
     alert("Please enter a numerical value") 
    }
    if(!isNaN(parseInt(e.target.value))){
    setBillAmountEntered(parseInt(e.target.value))}
}

  const peopleEntered = (e) => {
    //allow for backspace
    if (e.target.value.length < 1) {
      setNumberofPeopleEntered("")
    }
    //don't take strings
    if (isNaN(parseInt(e.target.value))){
     alert("Please enter a numerical value") 
    }
    if(!isNaN(parseInt(e.target.value))) {
    setNumberofPeopleEntered(parseInt(e.target.value))
    }
    }


  const displaySummaryTotals = (summary_type) => {
    if(tipAmount!==0 && billAmountEntered!=="" && numberOfPeopleEntered!==""){
    switch (summary_type) {
      case 'tip':
        return <div className="Bill__summary__TipAmount__total">{"$"+((billAmountEntered * (tipAmount/100)) / numberOfPeopleEntered).toFixed(2)}</div>
      case 'total':
        return <div className="Bill__summary__TotalAmount__total">{"$"+((billAmountEntered * (tipAmount/100)) + billAmountEntered)/numberOfPeopleEntered.toFixed(2)}</div>
      default:
        return null
    }
      
    }
    else {
      return null
    }
  }
  
  return (
    <>
    <div className="App">
        
        <div className="Section_a">
          Bill
      <div className="Bill">
        <span className="Bill__currency">$</span>
            <input className="Bill__amount" onChange={ billEntered} value={billAmountEntered}></input>
      </div>
     
      <div className="Tip_label">Select Tip %</div>
      <Tip tipHandler={tipHandler} beenClicked={beenClicked} />
      Number of People
          <div>
            <input className="People__count"  onChange={peopleEntered} value={numberOfPeopleEntered}></input>
            </div>
        </div>
        <div className="Section_b">
          <div className="Bill__summary">
            <div className="Bill__summary__headers">
            <div className="Bill__summary__TipAmount__header">
              Tip Amount</div> 
              <div className="Bill__summary__TipAmount__header__annotation">/person</div>
              
            <div className="Bill__summary__TotalAmount__header">
              Total Amount</div>  
              <div className="Bill__summary__TipAmount__header__annotation">/person</div>
              </div>
            <div className="Bill__summary__totals">
            {displaySummaryTotals('tip')}
              {displaySummaryTotals('total')}
              </div>
          </div>
          <div className="Bill__summary__reset">
            <button className="resetButton" onClick={handleReset}>RESET</button>
          </div>
          
          </div>
      </div>
   
      </>
    
  )
}

      export default App;
