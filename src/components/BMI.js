import React from 'react'
import BmiCalulator from './BmiCalulator';

const BMI = () => {
  return (
    <div className='Calculator'>
      <h1>Body Mass Index Calculator</h1>
      <div className="bmi-result-container">
        <div className="bmi-result">
          <div className="bmi-result-number">
            Body Mass Index (BMI) = 23
          </div>
          <div className={`bmi-category`}>
            Underweight
          </div>
        </div>
      </div>
      <BmiCalulator />
    </div>
  )
}

export default BMI;
