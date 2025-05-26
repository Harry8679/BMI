import React from 'react'

const BmiCalculator = () => {
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
    </div>
  )
}

export default BmiCalculator
