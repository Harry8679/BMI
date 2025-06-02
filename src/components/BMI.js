import React, { useState } from 'react'
import BmiCalulator from './BmiCalulator';

const BMI = () => {
  const [bmiValue, setBmiValue] = useState(0);
  return (
    <div className='calculator'>
      <h1>Body Mass Index Calculator</h1>
      <div className="bmi-result-container">
        <div className="bmi-result">
          <div className="bmi-result-number">
            Body Mass Index (BMI) = {bmiValue}
          </div>
          <div className={`bmi-category`}>
            Underweight
          </div>
        </div>
      </div>
      <BmiCalulator setBmiValue={setBmiValue} />
    </div>
  )
}

export default BMI;
