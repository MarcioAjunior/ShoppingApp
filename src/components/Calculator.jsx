import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sum, subtract } from '../store/Calculator/Calculator.actions'

function Calculator() {
  const dispatch = useDispatch()
  const result = useSelector( state => state.calc)
  const [inputs, setInputs] = useState({
    a : 0,
    b : 0
  })
  return(
    <>
      <input type="text" placeholder="a"
        value={inputs.a} 
        onChange={(e) => setInputs({...inputs, a : Number(e.target.value)})}>
      </input>
      <input type="text" placeholder="b"
        value={inputs.b} 
        onChange={(e) => setInputs({...inputs, b : Number(e.target.value)})}>
      </input>

      <button
        onClick={ () => {
          dispatch(sum(inputs.a, inputs.b))
        }}
      >somar
      </button>
      
      <button
        onClick={ () => {
          dispatch(subtract(inputs.a, inputs.b))
        }}
      >diminuir</button>

      <div>
          {result}
      </div>
    </>
  );
}
export default Calculator